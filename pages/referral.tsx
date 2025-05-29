import axios from "axios"
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { Poppins } from "next/font/google";
import { AgGridReact } from 'ag-grid-react';
import type { ColDef } from "ag-grid-community";
import { ClientSideRowModelModule, CsvExportModule, AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { IReferralGridRowData } from "../interface/ReferralGridRowData";
import { useUser } from "../hooks/userContext";
import { getBackend } from "./utils";

ModuleRegistry.registerModules([ClientSideRowModelModule, CsvExportModule, AllCommunityModule]);

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

export default function Referral() {
  const { user } = useUser()
  const [rowData, setRowData] = useState<IReferralGridRowData[]>([]);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [totalReferrals, setTotalReferrals] = useState(0);

  const columnDefs: ColDef[] = [
    { headerName: "Level", field: 'level', flex: 1 },
    { headerName: "User Name", field: 'from', flex: 2 },
    { headerName: "Amount", field: 'amount', flex: 1 },
    { headerName: "State", field: 'state', flex: 2 },
  ];

  const [withdrawable, setWithdrawable] = useState<IReferralGridRowData[]>()

  useEffect(() => {
    fetchReferralData()
  }, [])

  const fetchReferralData = async () => {
    try {
      const response = await axios.get(`${getBackend()}/api/referrals/withdrawable/${user?.userId}`)
      console.log('referral data:', response.data)
      setWithdrawable(response.data);
    } catch (e) {
      console.log("get withdrawable error:", e)
      toast.error("Failed to fetch referral data")
    }
  }

  useEffect(() => {
    if (withdrawable) {
      const fillTable = async () => {
        let referralArray: any[] = [];
        let totalAmount = 0;

        withdrawable.forEach((referral) => {
          referralArray.push({
            level: referral.level,
            from: referral.from,
            date: referral.date,
            chain: referral.chain,
            wallet: referral.wallet,
            amount: `$${parseFloat(referral.amount).toLocaleString()}`,
            state: referral.state,
          });
          totalAmount += parseFloat(referral.amount) || 0;
        })

        setRowData(referralArray)
        setTotalEarnings(totalAmount)
        setTotalReferrals(withdrawable.length)
      }

      fillTable();
    }
  }, [withdrawable])

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

  return (
    <div className={`bg-term ${poppins.className}`}>
      <main className="flex flex-col items-center justify-center lg:py-16 z-10 relative">
        <div className="max-w-[1320px] w-full flex flex-col items-center px-4 lg:px-12 2xl:px-20 relative z-10">

          {/* Page Title */}
          <div className="w-full text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Referral Information
            </h1>
            <p className="text-lg text-gray-300">
              Track your referral earnings and manage your network
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-r from-[#1A1A1A] to-[#242424] rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Total Referrals</h3>
              <p className="text-3xl font-bold text-[#6EC1E4]">{totalReferrals}</p>
            </div>
            <div className="bg-gradient-to-r from-[#1A1A1A] to-[#242424] rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Total Earnings</h3>
              <p className="text-3xl font-bold text-[#84FF38]">${totalEarnings.toLocaleString()}</p>
            </div>
            <div className="bg-gradient-to-r from-[#1A1A1A] to-[#242424] rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Available Balance</h3>
              <p className="text-3xl font-bold text-[#F9FF38]">${totalEarnings.toLocaleString()}</p>
            </div>
          </div>

          {/* Referral Information Table */}
          <div className="w-full py-10 flex flex-col gap-8">
            <div className="w-full mb-4">
              <h2 className="text-2xl font-semibold text-white border-b-2 border-[#6EC1E4] pb-2">
                Referral Details
              </h2>
              <p className="text-gray-300 mt-2">
                View all your referral commissions and their current status
              </p>
            </div>

            <div className="w-full bg-gradient-to-r from-[#0A1A2A] to-[#1A2A3A] rounded-lg p-6">
              <div style={{ width: "100%", minHeight: "400px" }}>
                <AgGridReact
                  rowData={rowData}
                  columnDefs={columnDefs}
                  domLayout="autoHeight"
                  defaultColDef={defaultColDef}
                  gridOptions={gridOption}
                  className="ag-theme-alpine-dark"
                />
              </div>
            </div>
          </div>

          {/* Referral Program Info */}
          <div className="w-full mt-12 bg-gradient-to-r from-[#1A1A1A] to-[#242424] rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">How Our Referral Program Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-[#6EC1E4] mb-3">Commission Structure</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Level 1: Direct referrals earn you commission</li>
                  <li>• Level 2: Second-tier referrals provide additional rewards</li>
                  <li>• Instant tracking of all referral activities</li>
                  <li>• Real-time commission calculations</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#6EC1E4] mb-3">Getting Started</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Share your unique referral link</li>
                  <li>• Earn commissions when friends invest</li>
                  <li>• Track earnings in real-time</li>
                  <li>• Withdraw earnings anytime</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}