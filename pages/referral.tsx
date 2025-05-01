import axios from "axios"
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import VerticalDivider from "./_components/Icons/VerticalDivider";

import { Poppins } from "next/font/google";
import { AgGridReact } from 'ag-grid-react';
import type { ColDef, RowSelectionOptions } from "ag-grid-community";
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

  const [rowData1, setRowData1] = useState<IReferralGridRowData[]>([]);

  const columnDefs1: ColDef[] = [
    { headerName: "Level", field: 'level', flex: 1 },
    { headerName: "User name", field: 'from', flex: 2 },
    // { headerName: "Date", field: 'date', flex: 3 },
    // { headerName: "Chain", field: 'chain', flex: 3 },
    // { headerName: "Wallet", field: 'wallet', flex: 6 },
    { headerName: "Amount", field: 'amount', flex: 1 },
    { headerName: "State", field: 'state', flex: 2 },
  ];

  const [rowData2, setRowData2] = useState<IReferralGridRowData[]>([]);

  const columnDefs2: ColDef[] = [
    { headerName: "Level", field: 'level', flex: 1 },
    { headerName: "User name", field: 'from', flex: 2 },
    { headerName: "Date", field: 'date', flex: 3 },
    { headerName: "Chain", field: 'chain', flex: 3 },
    { headerName: "Wallet", field: 'wallet', flex: 4 },
    { headerName: "Amount", field: 'amount', flex: 1 },
    { headerName: "State", field: 'state', flex: 2 },
  ];

  const [withdrawable, setWithdrawable] = useState<IReferralGridRowData[]>()
  const [history, setHistory] = useState<IReferralGridRowData[]>()
  useEffect(() => {
    fetchReferralData()
  }, [])

  const fetchReferralData = async () => {
    axios.get(`${getBackend()}/api/referrals/withdrawable/${user?.userId}`)
      .then(res => {
        console.log('referral =.', res.data)
        setWithdrawable(res.data);
      })
      .catch(e => {
        console.log("get withdrawable error:", e)
      })

    axios.get(`${getBackend()}/api/referrals/history/${user?.userId}`)
      .then(res => {
        console.log('referral =.', res.data)
        setHistory(res.data);
      })
      .catch(e => {
        console.log("get history error:", e)
      })
  }

  useEffect(() => {
    if (withdrawable) {
      const fillTable = async () => {
        let investArray: any[] = [];

        withdrawable.map(async (referral, index) => {

          investArray.push({
            level: referral.level,
            from: referral.from,
            date: referral.date,
            chain: referral.chain,
            wallet: referral.wallet,
            amount: referral.amount,
            state: referral.state,
          });
        })

        setRowData1(investArray)
      }

      fillTable();
    }

    if (history) {
      const fillTable = async () => {
        let investArray: any[] = [];

        history.map(async (referral, index) => {

          investArray.push({
            level: referral.level,
            from: referral.from,
            date: referral.date,
            chain: referral.chain,
            wallet: referral.wallet,
            amount: referral.amount,
            state: referral.state,
          });
        })

        setRowData2(investArray)
      }

      fillTable();
    }
  }, [withdrawable, history])

  const [defaultColDef, setDefaultColDef] = useState({
    resizable: true,
  });

  const gridOption = React.useMemo(() => {
    return {
      pagination: true,
      paginationPageSize: 10,
      // paginationPageSizeSelector: [10, 20, 30, 40, 50],
    };
  }, []);

  const onWithdraw = () => {
    axios.post(`${getBackend()}/api/referrals/withdraw/${user?.userId}`)
    .then(res => {
      toast.success("Withdraw successfully done! 🎉");
      fetchReferralData()
    })
    .catch(err => {
      toast.error("Withdraw failed.")
    })
  }

  return (
    <main className="flex flex-col items-center justify-center lg:py-16 z-10 relative">
      <div className="max-w-[1320px] w-full flex flex-col items-center px-4 lg:px-12 2xl:px-20 relative z-10">

        {/* Referral Information */}
        <div className="w-full py-10 item-center flex flex-col gap-8">
          <div className="w-full mb-4 text-2xl font-medium text-white border-b-2 border-white">
            Referral Information
          </div>

          <div className="flex w-full">
            <div style={{ width: "100%", height: "30vh" }}>
              <AgGridReact
                rowData={rowData1}
                columnDefs={columnDefs1}
                domLayout="autoHeight"
                defaultColDef={defaultColDef}
                gridOptions={gridOption} />
            </div>
          </div>
        </div>

        {/* Withdraw */}
        <div className="w-full py-10 item-center flex flex-col md:flex-row gap-8">
          <div className={`flex items-center justify-center relative bg-gradient-to-r from-[#1A1A1A] to-[#242424] text-white rounded-lg w-[250px] h-[48px] cursor-pointer text-[16px] font-semibold overflow-hidden whitespace-nowrap text-ellipsis hover:from-[#242424] hover:to-[#1A1A1A]`}>
            <div className="flex w-full justify-between">
              <button className="h-[30.78px] md:h-[45px] w-full" onClick={() => onWithdraw()} >
                Withdraw
              </button>
            </div>
          </div>

          <div className="text-xl traking-[-2px] font-normal text-light-white">
            After making withdrawal request, balance will show under "Pending Withdrawal". Admin will send this payment manually and update as "Completed Payment" with a note of TrxID from admin dashboard.
          </div>
        </div>

        {/* Withdrawal History */}
        <div className="w-full py-10 item-center flex flex-col gap-8">
          <div className="w-full mb-4 text-2xl font-medium text-white border-b-2 border-white">
            Withdrawal History
          </div>

          <div className="flex w-full">
            <div style={{ width: "100%", height: "30vh" }}>
              <AgGridReact
                rowData={rowData2}
                columnDefs={columnDefs2}
                domLayout="autoHeight"
                defaultColDef={defaultColDef}
                gridOptions={gridOption} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}