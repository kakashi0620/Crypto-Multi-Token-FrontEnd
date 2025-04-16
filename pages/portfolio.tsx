import axios from "axios";
import toast from "react-hot-toast";
import { Poppins } from "next/font/google";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import type { ColDef } from "ag-grid-community";
import { ClientSideRowModelModule, CsvExportModule, AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import Schedule from "./_components/Dialog/Schedule";
import { getBackend } from "./utils";
import { useUser } from "../hooks/userContext";

ModuleRegistry.registerModules([ClientSideRowModelModule, CsvExportModule, AllCommunityModule]);

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

const PortfolioPage: NextPage = () => {

  const [rowData, setRowData] = useState<any[]>([]);
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    { field: "Deal", flex: 1 },
    { field: "Status", flex: 1 },
    { field: "Allocation", flex: 1, filter: 'agTextColumnFilter' },
    { field: "Token Received", flex: 1, filter: 'agTextColumnFilter' },
    { field: "Value Locked", flex: 1, filter: 'agTextColumnFilter' },
    { field: "NextUnlock", flex: 1, filter: 'agTextColumnFilter' },
  ]);

  const { user } = useUser()
  const [dealCount, setDealCount] = useState(0);
  const [totalInvest, setTotalInvest] = useState(0);
  const fetchInvestData = async () => {
    try {
      const investData = await axios.post(`${getBackend()}/api/invests/getbyuser`, { userName: user?.userName })
      setDealCount(investData.data.length);

      let total = 0;
      let investArray: any[] = [];

      const promises = investData.data.map(async (invest: any) => {
        try {
          const dealData = await axios.post(`${getBackend()}/api/deals/getdeal`, { name: invest.dealname })
          const realPaidAmount = invest.amount * (100 + dealData.data.fee) / 100;

          investArray.push({
            "Deal": invest.dealname,
            "Status": dealData.data.state,
            "Allocation": `${realPaidAmount} / ${invest.amount}`,
            "Token Received": `${invest.amount / dealData.data.tokenprice}`,
            "Value Locked": "",
            "NextUnlock": ""
          });

          total += realPaidAmount;

        } catch (e) {
          toast.error("Error: Can not fetch deal data!");
        }
      });

      await Promise.all(promises);
      
      setTotalInvest(total);
      setRowData(investArray)
    }
    catch (e) {
      toast.error("Error: Can not fetch invest data!")
    }
  }

  useEffect(() => {
    fetchInvestData();
  }, []);

  const [defaultColDef, setDefaultColDef] = useState({
    resizable: true,
  });

  const [nextDate, setNextDate] = useState("")
  const [nextAmount, setNextAmount] = useState("")
  const [nextSymbol, setNextSymbol] = useState("")
  const [curSymbol, setCurSymbol] = useState("")

  const [bModalOpen, setModalOpen] = useState(false)

  const onRowClicked = (event: any) => {
    // Example: Navigate to a dynamic page based on row data (e.g., a profile page)
    let next = event.data.NextUnlock.split(' 🔓\n');
    if (next.length <= 0)
      return;

    let abstract = next[1].split(' ');

    setNextDate(next[0]);
    setNextAmount(abstract.length > 1 ? abstract[0] : '');
    setNextSymbol(abstract.length > 1 ? abstract[1] : next[1]);
    setCurSymbol(event.data.Deal)

    setModalOpen(true);
  };

  return (
    <>
      <div className={`bg-term ${poppins.className}`}>
        <div className="flex flex-col gap-8 md:gap-16 relative z-10 px-4 md:px-12 py-20 md:0 mx-auto max-w-[1480px]">
          <div className="flex flex-col gap-y-4 lg:grid lg:grid-cols-2 lg:gap-x-12 text-3xl md:text-4xl font-bold text-white text-center">
            <div className="flex flex-col">
              <h1>
                {"My Deals"}
              </h1>
              <h1>
                {dealCount}
              </h1>
            </div>

            <div className="flex flex-col">
              <h1>
                {"My Investment"}
              </h1>
              <h1>
                {totalInvest}
              </h1>
            </div>
          </div>

          <div className="flex w-full">

            <div style={{ width: "100%", height: "40vh" }}>
              <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                onRowClicked={onRowClicked}
              />
            </div>
          </div>
        </div>
      </div>

      <Schedule curSymbol={curSymbol} nextSymbol={nextSymbol} date={nextDate} amount={nextAmount} isOpen={bModalOpen} onConfirm={() => setModalOpen(false)} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default PortfolioPage;