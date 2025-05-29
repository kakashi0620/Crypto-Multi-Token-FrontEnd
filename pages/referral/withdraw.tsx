import axios from "axios"
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { Poppins } from "next/font/google";
import { AgGridReact } from 'ag-grid-react';
import type { ColDef } from "ag-grid-community";
import { ClientSideRowModelModule, CsvExportModule, AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { IReferralGridRowData } from "../../interface/ReferralGridRowData";
import { useUser } from "../../hooks/userContext";
import { getBackend } from "../utils";

ModuleRegistry.registerModules([ClientSideRowModelModule, CsvExportModule, AllCommunityModule]);

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

export default function ReferralWithdraw() {
  const { user } = useUser()
  const [withdrawableData, setWithdrawableData] = useState<IReferralGridRowData[]>([]);
  const [historyData, setHistoryData] = useState<IReferralGridRowData[]>([]);
  const [availableBalance, setAvailableBalance] = useState(0);
  const [pendingWithdrawals, setPendingWithdrawals] = useState(0);
  const [completedWithdrawals, setCompletedWithdrawals] = useState(0);
  const [isWithdrawing, setIsWithdrawing] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [selectedNetwork, setSelectedNetwork] = useState("BSC");

  const withdrawableColumns: ColDef[] = [
    { headerName: "Level", field: 'level', flex: 1 },
    { headerName: "User Name", field: 'from', flex: 2 },
    { headerName: "Amount", field: 'amount', flex: 1 },
    { headerName: "State", field: 'state', flex: 2 },
  ];

  const historyColumns: ColDef[] = [
    { headerName: "Date", field: 'date', flex: 2 },
    { headerName: "Amount", field: 'amount', flex: 1 },
    { headerName: "Network", field: 'chain', flex: 1 },
    { headerName: "Wallet", field: 'wallet', flex: 3 },
    { headerName: "Status", field: 'state', flex: 1 },
    { headerName: "TxID", field: 'txid', flex: 2 },
  ];

  useEffect(() => {
    fetchReferralData()
  }, [])

  const fetchReferralData = async () => {
    try {
      // Fetch withdrawable data
      const withdrawableResponse = await axios.get(`${getBackend()}/api/referrals/withdrawable/${user?.userId}`)
      const withdrawableReferrals = withdrawableResponse.data;
      
      // Fetch history data
      const historyResponse = await axios.get(`${getBackend()}/api/referrals/history/${user?.userId}`)
      const historyReferrals = historyResponse.data;

      // Process withdrawable data
      let totalAvailable = 0;
      const processedWithdrawable = withdrawableReferrals.map((referral: IReferralGridRowData) => {
        const amount = parseFloat(referral.amount) || 0;
        totalAvailable += amount;
        return {
          ...referral,
          amount: `$${amount.toLocaleString()}`
        };
      });

      // Process history data
      let totalPending = 0;
      let totalCompleted = 0;
      const processedHistory = historyReferrals.map((referral: IReferralGridRowData) => {
        const amount = parseFloat(referral.amount) || 0;
        if (referral.state === 'Pending') {
          totalPending += amount;
        } else if (referral.state === 'Completed') {
          totalCompleted += amount;
        }
        return {
          ...referral,
          amount: `$${amount.toLocaleString()}`,
          txid: referral.state === 'Completed' ? 'TX123...ABC' : '-'
        };
      });

      setWithdrawableData(processedWithdrawable);
      setHistoryData(processedHistory);
      setAvailableBalance(totalAvailable);
      setPendingWithdrawals(totalPending);
      setCompletedWithdrawals(totalCompleted);

    } catch (e) {
      console.log("fetch referral data error:", e)
      toast.error("Failed to fetch referral data")
    }
  }

  const [defaultColDef] = useState({
    resizable: true,
    sortable: true,
    filter: true,
  });

  const gridOption = React.useMemo(() => {
    return {
      pagination: true,
      paginationPageSize: 10,
      paginationPageSizeSelector: [10, 20, 50],
    };
  }, []);

  const handleWithdraw = async () => {
    if (!withdrawAmount || parseFloat(withdrawAmount) <= 0) {
      toast.error("Please enter a valid withdrawal amount");
      return;
    }

    if (parseFloat(withdrawAmount) > availableBalance) {
      toast.error("Withdrawal amount exceeds available balance");
      return;
    }

    if (!walletAddress) {
      toast.error("Please enter your wallet address");
      return;
    }

    setIsWithdrawing(true);
    
    try {
      await axios.post(`${getBackend()}/api/referrals/withdraw/${user?.userId}`, {
        amount: parseFloat(withdrawAmount),
        wallet: walletAddress,
        network: selectedNetwork
      });
      
      toast.success("Withdrawal request submitted successfully! 🎉");
      setWithdrawAmount("");
      setWalletAddress("");
      fetchReferralData(); // Refresh data
    } catch (err) {
      toast.error("Withdrawal request failed. Please try again.");
    } finally {
      setIsWithdrawing(false);
    }
  }

  const handleMaxWithdraw = () => {
    setWithdrawAmount(availableBalance.toString());
  }

  return (
    <div className={`bg-term ${poppins.className}`}>
      <main className="flex flex-col items-center justify-center lg:py-16 z-10 relative">
        <div className="max-w-[1320px] w-full flex flex-col items-center px-4 lg:px-12 2xl:px-20 relative z-10">

          {/* Page Title */}
          <div className="w-full text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Referral Withdraw
            </h1>
            <p className="text-lg text-gray-300">
              Manage your referral earnings and withdrawal requests
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-r from-[#1A1A1A] to-[#242424] rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Available Balance</h3>
              <p className="text-3xl font-bold text-[#84FF38]">${availableBalance.toLocaleString()}</p>
            </div>
            <div className="bg-gradient-to-r from-[#1A1A1A] to-[#242424] rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Pending Withdrawals</h3>
              <p className="text-3xl font-bold text-[#F9FF38]">${pendingWithdrawals.toLocaleString()}</p>
            </div>
            <div className="bg-gradient-to-r from-[#1A1A1A] to-[#242424] rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Total Withdrawn</h3>
              <p className="text-3xl font-bold text-[#6EC1E4]">${completedWithdrawals.toLocaleString()}</p>
            </div>
          </div>

          {/* Withdrawal Form */}
          <div className="w-full mb-12">
            <div className="bg-gradient-to-r from-[#1A1A1A] to-[#242424] rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-white mb-6 border-b-2 border-[#6EC1E4] pb-2">
                Request Withdrawal
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Withdrawal Amount (USD)
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={withdrawAmount}
                        onChange={(e) => setWithdrawAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="w-full px-4 py-3 bg-[#0A1A2A] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#6EC1E4] focus:outline-none"
                        max={availableBalance}
                        min="0"
                        step="0.01"
                      />
                      <button
                        onClick={handleMaxWithdraw}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-[#6EC1E4] text-black text-sm rounded hover:bg-[#5AB1D4] transition-colors"
                      >
                        MAX
                      </button>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                      Available: ${availableBalance.toLocaleString()}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Network
                    </label>
                    <select
                      value={selectedNetwork}
                      onChange={(e) => setSelectedNetwork(e.target.value)}
                      className="w-full px-4 py-3 bg-[#0A1A2A] border border-gray-600 rounded-lg text-white focus:border-[#6EC1E4] focus:outline-none"
                    >
                      <option value="BSC">Binance Smart Chain (BSC)</option>
                      <option value="ETH">Ethereum (ETH)</option>
                      <option value="POLYGON">Polygon (MATIC)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Wallet Address
                    </label>
                    <input
                      type="text"
                      value={walletAddress}
                      onChange={(e) => setWalletAddress(e.target.value)}
                      placeholder="Enter your wallet address"
                      className="w-full px-4 py-3 bg-[#0A1A2A] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#6EC1E4] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-[#0A1A2A] rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Withdrawal Information</h3>
                    <div className="space-y-3 text-sm text-gray-300">
                      <div className="flex justify-between">
                        <span>Processing Time:</span>
                        <span className="text-[#6EC1E4]">24-48 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Minimum Withdrawal:</span>
                        <span className="text-[#6EC1E4]">$10</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Network Fee:</span>
                        <span className="text-[#6EC1E4]">Covered by platform</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Status Updates:</span>
                        <span className="text-[#6EC1E4]">Email notifications</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleWithdraw}
                    disabled={isWithdrawing || !withdrawAmount || !walletAddress}
                    className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                      isWithdrawing || !withdrawAmount || !walletAddress
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-[#6EC1E4] to-[#4A9BC1] text-black hover:from-[#4A9BC1] hover:to-[#6EC1E4] hover:shadow-lg'
                    }`}
                  >
                    {isWithdrawing ? 'Processing...' : 'Request Withdrawal'}
                  </button>
                </div>
              </div>

              <div className="mt-8 p-4 bg-[#0A1A2A] rounded-lg border-l-4 border-[#F9FF38]">
                <p className="text-sm text-gray-300">
                  <strong className="text-[#F9FF38]">Important:</strong> After making a withdrawal request, 
                  the balance will show under "Pending Withdrawal". Our admin team will process your payment 
                  manually and update the status as "Completed Payment" with a transaction ID within 24-48 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Available Balance Table */}
          <div className="w-full mb-12">
            <div className="bg-gradient-to-r from-[#0A1A2A] to-[#1A2A3A] rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-6 border-b-2 border-[#6EC1E4] pb-2">
                Available Balance Details
              </h2>
              <div style={{ width: "100%", minHeight: "300px" }}>
                <AgGridReact
                  rowData={withdrawableData}
                  columnDefs={withdrawableColumns}
                  domLayout="autoHeight"
                  defaultColDef={defaultColDef}
                  gridOptions={gridOption}
                  className="ag-theme-alpine-dark"
                />
              </div>
            </div>
          </div>

          {/* Withdrawal History */}
          <div className="w-full">
            <div className="bg-gradient-to-r from-[#0A1A2A] to-[#1A2A3A] rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-6 border-b-2 border-[#6EC1E4] pb-2">
                Withdrawal History
              </h2>
              <div style={{ width: "100%", minHeight: "400px" }}>
                <AgGridReact
                  rowData={historyData}
                  columnDefs={historyColumns}
                  domLayout="autoHeight"
                  defaultColDef={defaultColDef}
                  gridOptions={gridOption}
                  className="ag-theme-alpine-dark"
                />
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
} 