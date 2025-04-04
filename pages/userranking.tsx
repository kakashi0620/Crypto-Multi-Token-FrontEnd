import { Poppins } from "next/font/google";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import type { ColDef, RowSelectionOptions } from "ag-grid-community";
import { ClientSideRowModelModule, CsvExportModule, AllCommunityModule, ModuleRegistry } from "ag-grid-community";

ModuleRegistry.registerModules([ClientSideRowModelModule, CsvExportModule, AllCommunityModule]);

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});


const UserRankingPage: NextPage = () => {

  const [referralRowData, setReferralRowData] = useState<any[]>([]);
  const [referralColumnDefs, setReferralColumnDefs] = useState<ColDef[]>([
    { field: "SN", flex:1 },
    { field: "Username", flex:2, filter: 'agTextColumnFilter' },
    { field: "No of L1", flex:2, filter: 'agTextColumnFilter' }
  ]);

  const [memberRowData, setMemberRowData] = useState<any[]>([]);
  const [memberColumnDefs, setMemberColumnDefs] = useState<ColDef[]>([
    { field: "SN" },
    { field: "Username", filter: 'agTextColumnFilter' },
    { field: "Team Size", filter: 'agTextColumnFilter' }
  ]);

  const [incomeRowData, setIncomeRowData] = useState<any[]>([]);
  const [incomeColumnDefs, setIncomeColumnDefs] = useState<ColDef[]>([
    { field: "SN" },
    { field: "Username", filter: 'agTextColumnFilter' },
    { field: "Total Income", filter: 'agTextColumnFilter' }
  ]);

  useEffect(() => {
    setReferralRowData(
      [
        {
          "SN": "1",
          "Username": "Maxym",
          "No of L1": "23"
        },
        {
          "SN": "2",
          "Username": "Mykola",
          "No of L1": "18"
        }
      ]
    )

    setMemberRowData(
      [
        {
          "SN": "1",
          "Username": "Maxym",
          "Team Size": "4"
        },
        {
          "SN": "2",
          "Username": "Mykola",
          "Team Size": "9"
        }
      ]
    )

    setIncomeRowData(
      [
        {
          "SN": "1",
          "Username": "Maxym",
          "Total Income": "$19,283"
        },
        {
          "SN": "2",
          "Username": "Mykola",
          "Total Income": "$4,923"
        }
      ]
    )
  }, []);

  const [defaultColDef, setDefaultColDef] = useState({
    resizable: true,
  });

  const rowSelection = React.useMemo(() => {
    return {
      mode: 'multiRow',
    };
  }, []);

  const gridOption = React.useMemo(() => {
    return {
      // pagination: true,
      // paginationPageSize: 10
      autoSizeStrategy: {
        type: 'fitGridWidth',
        // defaultMinWidth: 100,
        // columnLimits: [
        //   {
        //     colId: 'SN',
        //     width: 100
        //   }
        // ]
      }
    };
  }, []);

  return (
    <div className={`bg-term ${poppins.className}`}>
      <div className="flex flex-col gap-8 md:gap-16 relative z-10 px-4 md:px-12 py-20 md:0 mx-auto max-w-[1480px]">
        <h1 className="text-3xl md:text-5xl font-bold text-green text-center">
          User Ranking
        </h1>

        <div className="flex flex-col gap-y-4 lg:grid lg:grid-cols-3 lg:gap-x-12">
          <div className="flex flex-col gap-y-4">
            <div className="text-xl font-medium text-green-400 border-b-2 border-green-400">
              Rank of Referral L1
            </div>

            <div style={{ width: "100%", height: "60vh" }}>
              <AgGridReact
                rowData={referralRowData}
                columnDefs={referralColumnDefs}
                defaultColDef={defaultColDef}
                rowSelection={rowSelection as RowSelectionOptions}
                gridOptions={gridOption}
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-4">
            <div className="text-xl font-medium text-green-400 border-b-2 border-green-400">
              Rank of Total Team Members
            </div>

            <div style={{ width: "100%", height: "60vh" }}>
              <AgGridReact
                rowData={memberRowData}
                columnDefs={memberColumnDefs}
                defaultColDef={defaultColDef}
                rowSelection={rowSelection as RowSelectionOptions}
                gridOptions={gridOption}
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-4">
            <div className="text-xl font-medium text-green-400 border-b-2 border-green-400">
              Rank of Ref.Income
            </div>

            <div style={{ width: "100%", height: "60vh" }}>
              <AgGridReact
                rowData={incomeRowData}
                columnDefs={incomeColumnDefs}
                defaultColDef={defaultColDef}
                rowSelection={rowSelection as RowSelectionOptions}
                gridOptions={gridOption}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRankingPage;
