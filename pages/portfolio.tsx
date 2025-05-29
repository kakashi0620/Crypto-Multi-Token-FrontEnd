import axios from "axios";
import moment from 'moment-timezone';
import { format } from 'date-fns';
import toast from "react-hot-toast";
import { Poppins } from "next/font/google";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import type { ColDef } from "ag-grid-community";
import { ClientSideRowModelModule, CsvExportModule, AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { getBackend } from "./utils";
import { useUser } from "../hooks/userContext";
// import PortfolioTable, { IPortfolioRowData } from "./_components/GridTable/Portfolio/PortfolioTable";
import DealCell from './_components/GridTable/Portfolio/cells/DealCell';
import StatusCell from './_components/GridTable/Portfolio/cells/StatusCell';
import TokensReceivedCell from './_components/GridTable/Portfolio/cells/TokensReceivedCell';
import DualValueCell from './_components/GridTable/Portfolio/cells/DualValueCell';


ModuleRegistry.registerModules([ClientSideRowModelModule, CsvExportModule, AllCommunityModule]);

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

interface IPortfolioRowData {
  deal: { logo: string; name: string };
  status: string;
  allocation: { invest: string; pay: string };
  tokensReceived: { percent: number; received: string; receiving: string };
  valueLocked: { free: string; locked: string };
  nextUnlock: { date: string; amount: string };
}

const PortfolioPage: NextPage = () => {

  const [rowData, setRowData] = useState<IPortfolioRowData[]>([]);
  // const [columnDefs, setColumnDefs] = useState<ColDef[]>([
  //   { field: "Deal", flex: 1 },
  //   { field: "Status", flex: 1 },
  //   { field: "Allocation", flex: 1, filter: 'agTextColumnFilter' },
  //   { field: "Token Received", flex: 1, filter: 'agTextColumnFilter' },
  //   { field: "Value Locked", flex: 1, filter: 'agTextColumnFilter' },
  //   { field: "NextUnlock", flex: 1, filter: 'agTextColumnFilter' },
  // ]);

  const { user } = useUser()
  const [dealCount, setDealCount] = useState(0);
  const [totalInvest, setTotalInvest] = useState(0);
  const fetchInvestData = async () => {
    try {
      const investData = await axios.post(`${getBackend()}/api/invests/getbyuser`, { userName: user?.userName })
      
      // Group investments by deal name
      const groupedInvestments = investData.data.reduce((acc: any, invest: any) => {
        const dealname = invest.dealname;
        if (acc[dealname]) {
          acc[dealname].amount += invest.amount;
        } else {
          acc[dealname] = { ...invest };
        }
        return acc;
      }, {});

      const uniqueDeals = Object.values(groupedInvestments);
      setDealCount(uniqueDeals.length);

      if (uniqueDeals.length > 0) {
        let total = 0;
        let investArray: IPortfolioRowData[] = [];
  
        const promises = uniqueDeals.map(async (invest: any) => {
          const dealname = invest.dealname
          const investamount = invest.amount // This is now the combined amount for this deal
          let dealData: any = null
          let realPaidAmount = 0

          // Get deal data
          try {
            dealData = await axios.post(`${getBackend()}/api/deals/getdeal`, { name: dealname })
            realPaidAmount = Number(investamount) * (100 + Number(dealData.data.fee)) / 100
            total += Number(investamount) // Add net investment amount (without fees)
          }
          catch (e) {
            toast.error("Error: Can not fetch deal data!");
          }
  
          // Get distribution schedule
          if (dealData !== null) {
            const status = dealData.data.state
            const tokenPrice = dealData.data.tokenprice
  
            try {
              const { data } = await axios.get(`${getBackend()}/api/distributions/summary`, {
                params: { dealname: dealname, date: moment.utc() }
              })
  
              const tokenReceived = (investamount * data.totalReceived / 100) / tokenPrice
              const tokenTotal = investamount / tokenPrice
              const percent = 100 * tokenReceived / tokenTotal
  
              const tokenLocked = tokenTotal - tokenReceived
              const assetsLocked = tokenLocked * tokenPrice
              const symbol = dealname
  
              const nextDate = data.date
              const nextTokenAmount = tokenTotal * data.percent / 100
  
              investArray.push({
                deal: { logo: "http://localhost:5000" + dealData.data.logo.substring(1), name: dealname },
                status: status,
                allocation: { invest: '$' + Number(investamount).toLocaleString(), pay: '$' + realPaidAmount.toLocaleString() },
                tokensReceived: { percent: percent, received: tokenReceived.toFixed(2).toLocaleString(), receiving: tokenTotal.toFixed(2).toLocaleString() + symbol },
                valueLocked: { free: '$' + assetsLocked.toFixed(2).toLocaleString(), locked: '🔒 ' + tokenLocked.toFixed(2).toLocaleString() + symbol },
                nextUnlock: { date: nextDate === 'No schedule' ? nextDate : format(nextDate, 'yyyy-MM-dd') + ' 🔓', amount: nextTokenAmount.toFixed(2).toLocaleString() + symbol },
              })
  
            } catch (e) {
              toast.error("Error: Can not fetch schedule data!")
              console.log("Error: Can not fetch schedule data =>", e)
            }
          }
  
        });
  
        await Promise.all(promises);
  
        setTotalInvest(total);
        setRowData(investArray)
      }
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

  const columnDefs: ColDef[] = [
    {
      headerName: 'Deal',
      field: 'deal',
      flex: 1,
      cellRenderer: DealCell,
    },
    {
      // Status filter allows users to filter portfolio by deal stage:
      // - "Fundraising": Active deals still accepting investments
      // - "Distributing": Deals currently paying out tokens
      // - "Completed": Finished deals with all tokens distributed
      // - "Awaiting TGE": Deals waiting for Token Generation Event
      // - etc. Useful for portfolio management and tracking deal progress
      headerName: 'Status',
      field: 'status',
      flex: 1,
      filter: 'agSetColumnFilter',
      cellRenderer: StatusCell,
    },
    {
      headerName: 'Allocation',
      field: 'allocation',
      flex: 1,
      cellRenderer: DualValueCell,
    },
    {
      headerName: 'Tokens Received',
      field: 'tokensReceived',
      flex: 1,
      autoHeight: true,
      cellRenderer: TokensReceivedCell,
    },
    {
      headerName: 'Value Locked',
      field: 'valueLocked',
      flex: 1,
      cellRenderer: DualValueCell,
    },
    {
      headerName: 'Next Unlock',
      field: 'nextUnlock',
      flex: 1,
      cellRenderer: DualValueCell,
    },
  ];

  return (
    <>
      <div className={`bg-term ${poppins.className}`}>
        <div className="flex flex-col gap-8 md:gap-16 relative z-10 px-4 md:px-12 py-20 md:0 mx-auto max-w-[1480px]">
          <div className="flex flex-col gap-y-4 lg:grid lg:grid-cols-2 lg:gap-x-12 text-3xl md:text-4xl font-bold text-white text-center">
            <div className="flex flex-col gap-y-3">
              <h1>
                {"My Deals"}
              </h1>
              <h1>
                {dealCount}
              </h1>
            </div>

            <div className="flex flex-col gap-y-3">
              <h1>
                {"My Investment"}
              </h1>
              <h1>
                {"$ " + totalInvest.toLocaleString()}
              </h1>
            </div>
          </div>

          <div className="flex w-full">
            <div className="aaa_123" style={{ width: "100%", height: "40vh" }}>
              {/* <PortfolioTable rowData={rowData} /> */}
              <AgGridReact
                columnDefs={columnDefs}
                rowData={rowData}
                defaultColDef={defaultColDef}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;