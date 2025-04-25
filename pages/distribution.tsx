import axios from 'axios'
import moment from 'moment-timezone';
import { Poppins } from "next/font/google";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import type { ColDef, RowClickedEvent } from "ag-grid-community";
import { ClientSideRowModelModule, CsvExportModule, AllCommunityModule, ModuleRegistry } from "ag-grid-community";

import { Deal, useDeal } from "../hooks/dealContext";
import { getBackend } from './utils';
import { IDealGridRowData } from '../interface/DealGridRowData';
import DealNameCell from './_components/GridTable/AllDeals/DealNameCell';
import DealProgressCell from './_components/GridTable/AllDeals/DealProgressCell';
import Schedule from './_components/Dialog/Schedule';


ModuleRegistry.registerModules([ClientSideRowModelModule, CsvExportModule, AllCommunityModule]);

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

const Distribution: NextPage = () => {

  const [rowData, setRowData] = useState<IDealGridRowData[]>([]);

  const columnDefs: ColDef[] = [
    { headerName: "SN", field: 'no', flex: 1 },
    { headerName: "Deal Detail", field: 'name', cellRenderer: DealNameCell, flex: 2 },
    { headerName: "Status", field: 'status', flex: 2 },
    { headerName: "Deal Time", field: 'time', flex: 3, filter: 'agDateColumnFilter' },
    {
      headerName: "Amount Raised", field: 'amount', flex: 3, autoHeight: true,
      cellRenderer: (params: any) => {
        const [line1, line2] = params.value?.split('\n') || ['', ''];
        return (
          <div className="whitespace-pre-wrap">
            <p>{line1}</p>
            <p>{line2}</p>
          </div>
        );
      }
    },
    { headerName: "Distribution", field: 'distribution', flex: 3 },
    { headerName: "Progress", field: 'progress', flex: 2, cellRenderer: DealProgressCell },
  ];

  const { deal, setDeal } = useDeal();
  const [deals, setDeals] = useState<Deal[]>();
  const fetchDealData = async () => {
    axios.get(`${getBackend()}/api/deals/getfordistribution`)
      .then(res => {
        setDeals(res.data)
      })
      .catch(e => {
        console.log("get deal by state error:", e)
      })
  }

  useEffect(() => {
    if (deals) {
      const fillTable = async () => {
        let investArray: any[] = [];

        const promises = deals.map(async (deal, index) => {
          const liveDate = new Date(deal.livedate)
          const timeString = moment.tz(liveDate, 'UTC').utc().format('YYYY-MM-DD HH:mm:ss')

          let investorCount = 0;
          let totalInvest = 0;

          try {
            const res = await axios.get(`${getBackend()}/api/invests/summary/${deal.name}`);
            totalInvest = res.data.totalAmount
            investorCount = res.data.investorCount
          }
          catch (e) {
            console.log('Fetching invest summary failed:', e)
          }
          
          try {
            const { data } = await axios.get(`${getBackend()}/api/distributions/summary`, {
              params: { dealname: deal.name, date: moment.utc() }
            })

            const tokenPrice = Number(deal.tokenprice)
            const fundraising = Number(deal.fundrasing)
            const tokenReceived = (fundraising * data.totalReceived / 100) / tokenPrice
            const tokenTotal = fundraising / tokenPrice
            const percent = 100 * tokenReceived / tokenTotal

            investArray.push({
              no: index + 1,
              name: deal.name,
              logo: '/images/metamask.png', //deal.logo,
              status: deal.state,
              time: timeString,
              amount: `$${totalInvest}/$${deal.fundrasing}\n${investorCount} Investors`,
              distribution: `${percent}%`,
              progress: percent
            });
          }
          catch(e) {
            console.log('Fetching schedule summary failed:', e)
          }
        })

        await Promise.all(promises);

        setRowData(investArray)
      }

      fillTable();
    }
  }, [deals])

  useEffect(() => {
    fetchDealData()
  }, [])

  const [defaultColDef, setDefaultColDef] = useState({
    resizable: true,
  });

  const gridOption = React.useMemo(() => {
    return {
      pagination: true,
      paginationPageSize: 10,
    };
  }, []);

  const [curDealName, setCurDealName] = useState("")
  useEffect(() => {
    if (curDealName) {
      const deal = deals?.find(d => d.name === curDealName);
      if (deal) {
        setDeal(deal)
        setOpenSchedule(true)
      }
    }
  }, [curDealName])

  const [bOpenSchedule, setOpenSchedule] = useState(false)
  const closeSchedule = () => {
    setCurDealName("")
    setOpenSchedule(false)
  }
  const handleRowClick = (event: RowClickedEvent) => {
    const clickedRowData = event.data as IDealGridRowData;
    setCurDealName(clickedRowData.name)
  };

  return (
    <>
      <div className={`bg-term ${poppins.className}`}>
        <div className="flex flex-col gap-8 md:gap-16 z-10 px-4 md:px-12 py-20 md:0 mx-auto max-w-[1480px]">

          {/* Title */}
          <h1 className="page-title">
            Distribution
          </h1>

          <div className="flex w-full">
            <div style={{ width: "100%", height: "60vh" }}>
              <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                domLayout="autoHeight"
                defaultColDef={defaultColDef}
                gridOptions={gridOption}
                onRowClicked={handleRowClick}
              />
            </div>
          </div>
        </div>
      </div>

      <Schedule isOpen={bOpenSchedule} onConfirm={() => closeSchedule()} onClose={() => closeSchedule()} />
    </>

  );
};

export default Distribution;
