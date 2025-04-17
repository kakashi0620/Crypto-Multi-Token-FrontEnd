import axios from 'axios'
import { Poppins } from "next/font/google";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import type { ColDef, RowSelectionOptions } from "ag-grid-community";
import { ClientSideRowModelModule, CsvExportModule, AllCommunityModule, ModuleRegistry } from "ag-grid-community";

import { Deal, useDeal } from "../hooks/dealContext";
import { getBackend } from './utils';

ModuleRegistry.registerModules([ClientSideRowModelModule, CsvExportModule, AllCommunityModule]);


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

const AllDeals: NextPage = () => {

  const [rowData, setRowData] = useState<any[]>([]);

  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    { field: "SN", flex: 1, filter: 'agTextColumnFilter' },
    { field: "Deal Detail", flex: 3, filter: true },
    { field: "Status", flex: 2, filter: true },
    { field: "Deal Time", flex: 3, filter: true },
    { field: "Amount Raised", flex: 3, filter: true },
    { field: "Distribution", flex: 3, filter: true },
    { field: "Progress", flex: 2, filter: true },
    { field: "Action", flex: 2, filter: true }
  ]);

  const { deal, setDeal } = useDeal();
  const [deals, setDeals] = useState<Deal[]>();
  const fetchDealData = async (dealState: string) => {
    if (dealState == "All") {
      axios.get(`${getBackend()}/api/deals/getalldeals`)
        .then(res => {
          setDeals(res.data)
        })
        .catch(e => {
          console.log("get all deal error:", e)
        })
    }
    else {
      axios.post(`${getBackend()}/api/deals/getdealbystate`, { state: dealState })
        .then(res => {
          setDeals(res.data)
        })
        .catch(e => {
          console.log("get deal by state error:", e)
        })
    }
  }

  useEffect(() => {
    let investArray: any[] = [];
    deals?.map((deal, index) => {
      console.log(`${index} deal data got`)
      investArray.push({
        "SN": index + 1,
        "Deal Detail": deal.name,
        "Status": deal.state,
        "Deal Time": deal.livedate,
        "Amount Raised": "",
        "Distribution": "",
        "Progress": "",
        "Action": ""
      });
    })

    setRowData(investArray)
  }, [deals])

  const [dealState, setDealState] = useState("All");
  useEffect(() => {
    fetchDealData(dealState)
  }, [dealState])

  const [stateList, setStateList] = useState([
    'All',
    'Draft',
    'Upcoming',
    'Fundraising',
    'Awaiting TGE',
    'Distributing',
    'Completed',
    'Refunded',
    'Archived'
  ])

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
      pagination: true,
      paginationPageSize: 10,
      // paginationPageSizeSelector: [10, 20, 30, 40, 50],
    };
  }, []);

  return (
    <div className={`bg-term ${poppins.className}`}>
      <div className="flex flex-col gap-8 md:gap-16 z-10 px-4 md:px-12 py-20 md:0 mx-auto max-w-[1480px]">

        {/* Title */}
        <h1 className="page-title">
          All Deals
        </h1>

        {/* Deal state */}
        <div className="flex w-full justify-start">
          <select
            id="dealstate"
            name="dealstate"
            value={dealState}
            className="flex rounded-md border-0 p-1 text-white shadow-sm ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
            onChange={(e) => setDealState(e.target.value)}
          >
            {stateList.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>


        <div className="flex w-full">

          <div style={{ width: "100%", height: "30vh" }}>
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              rowSelection={rowSelection as RowSelectionOptions}
              gridOptions={gridOption} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDeals;
