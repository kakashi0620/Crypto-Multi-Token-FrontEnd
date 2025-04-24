import axios from 'axios'
import { Poppins } from "next/font/google";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import type { ColDef, RowSelectionOptions } from "ag-grid-community";
import { ClientSideRowModelModule, CsvExportModule, AllCommunityModule, ModuleRegistry } from "ag-grid-community";

import { Deal, useDeal } from "../hooks/dealContext";
import { getBackend } from './utils';
import { IDealGridRowData } from '../interface/DealGridRowData';
import DealNameCell from './_components/GridTable/AllDeals/DealNameCell';
import DealProgressCell from './_components/GridTable/AllDeals/DealProgressCell';
import DealActionCell from './_components/GridTable/AllDeals/DealActionCell';


ModuleRegistry.registerModules([ClientSideRowModelModule, CsvExportModule, AllCommunityModule]);

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

const AllDeals: NextPage = () => {

  const [rowData, setRowData] = useState<IDealGridRowData[]>([]);

  const columnDefs: ColDef[] = [
    { headerName: "SN", field: 'no', flex: 1 },
    { headerName: "Deal Detail", field: 'name', cellRenderer: DealNameCell, flex: 2 },
    { headerName: "Status", field: 'status', flex: 2, filter: 'agTextColumnFilter' },
    { headerName: "Deal Time", field: 'time', flex: 3, filter: 'agDateColumnFilter' },
    { headerName: "Amount Raised", field: 'amount', flex: 3, autoHeight: true,
      cellRenderer: (params: any) => {
        const [line1, line2] = params.value?.split('\n') || ['', ''];
        return (
          <div className="whitespace-pre-wrap">
            <p>{line1}</p>
            <p>{line2}</p>
          </div>
        );
      } },
    { headerName: "Distribution", field: 'distribution', flex: 3 },
    { headerName: "Progress", field: 'progress', flex: 2, cellRenderer: DealProgressCell },
    { headerName: "Action", field: 'action', flex: 3, cellRenderer: DealActionCell }
  ];

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
    if (deals) {
      const fillTable = async () => {
        let investArray: any[] = [];

        const promises = deals.map(async (deal, index) => {

          const liveDate = deal.livedate ? new Date(deal.livedate) : null; // Ensure it's a valid Date object or null
          const timeString = liveDate ? liveDate.toISOString() : '';

          let investorCount = 0;
          let progress = 0;

          try {
            const res = await axios.get(`${getBackend()}/api/invests/summary/${deal.name}`);
            progress = 100 * res.data.totalAmount / Number(deal.fundrasing)
            investorCount = res.data.investorCount
          }
          catch (e) {
            console.log('invest summary failed:', e)
          }

          investArray.push({
            no: index + 1,
            name: deal.name,
            logo: '/images/metamask.png', //deal.logo,
            status: deal.state,
            time: timeString,
            amount: `$${deal.fundrasing}/$${deal.fdv}\n${investorCount} Investors`,
            distribution: `${progress}%`,
            progress: progress
          });
        })

        await Promise.all(promises);

        setRowData(investArray)
      }

      fillTable();
    }
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
          <div style={{ width: "100%", height: "60vh" }}>
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              domLayout="autoHeight"
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
