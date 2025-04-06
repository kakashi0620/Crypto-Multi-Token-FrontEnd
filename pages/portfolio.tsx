import { Poppins } from "next/font/google";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import type { ColDef } from "ag-grid-community";
import { ClientSideRowModelModule, CsvExportModule, AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import Schedule from "./_components/Dialog/Schedule";

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

  useEffect(() => {
    setRowData(
      [
        {
          "Deal": "Lakia AI",
          "Status": "Distributing",
          "Allocation": "$500.00\n$437.50",
          "Token Received": "45,152.69\n93,085 LKI",
          "Value Locked": "$268.66\n🔒 47,932.41 LKI",
          "NextUnlock": "06.Mar 2025 🔓\n93,085 LKI",
        },
        {
          "Deal": "Piena finance",
          "Status": "Distributing",
          "Allocation": "$500.00\n$450.00",
          "Token Received": "8,901.52\n34,090.91 PLENA",
          "Value Locked": "$74.88\n🔒 25,189.39 PLENA",
          "NextUnlock": "22.Mar 2025 🔓\n3,598.48 PLENA",
        },
        {
          "Deal": "Hybrid",
          "Status": "Awaiting TGE",
          "Allocation": "$0.00\n$0.00",
          "Token Received": "Not started\n0 TOKENS",
          "Value Locked": "Token value not available\n🔒 0 TOKENS",
          "NextUnlock": "Not schedule set 🔓\nTGE",
        },
        {
          "Deal": "Tars AI",
          "Status": "completed",
          "Allocation": "$500.00\n$450.00",
          "Token Received": "34,615.38\n34,615.38 USDT",
          "Value Locked": "Token value not available\n0 B-USDT",
          "NextUnlock": "",
        },
      ]
    )
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
                {"4"}
              </h1>
            </div>

            <div className="flex flex-col">
              <h1>
                {"My Investment"}
              </h1>
              <h1>
                {"$1000"}
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