import axios from 'axios'
import moment from 'moment-timezone';
import { Poppins } from "next/font/google";
import toast from 'react-hot-toast';
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useAccount, useChainId, useChains } from 'wagmi';
import { AgGridReact } from 'ag-grid-react';
import type { CellClickedEvent, ColDef } from "ag-grid-community";
import { ClientSideRowModelModule, CsvExportModule, AllCommunityModule, ModuleRegistry } from "ag-grid-community";

import { Deal, useDeal } from "../hooks/dealContext";
import { getBackend } from './utils';
import { IDealGridRowData } from '../interface/DealGridRowData';

import Schedule from './_components/Dialog/Schedule';
import DealNameCell from './_components/GridTable/AllDeals/DealNameCell';
import DealProgressCell from './_components/GridTable/AllDeals/DealProgressCell';
import DistributionActionCell from './_components/GridTable/Distribution/DistributionActionCell';
import Distribute from './_components/Dialog/Distribute';
import DealStatusCell from './_components/GridTable/AllDeals/DealStatusCell';


ModuleRegistry.registerModules([ClientSideRowModelModule, CsvExportModule, AllCommunityModule]);

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

const Distribution: NextPage = () => {

  const { deal, setDeal } = useDeal();

  // For distribute button
  const [currentBatch, setCurrentBatch] = useState("")
  const [network, setNetwork] = useState("")
  const [distributeAmount, setDistributeAmount] = useState(0)

  const chainId = useChainId();  // get current connected chain id
  const chains = useChains();    // get all available chains
  const { address } = useAccount();

  const [bOpenPayDlg, setOpenPayDlg] = useState(false);
  const [modalData, setModalData] = useState<IDealGridRowData | null>(null);

  const openModal = async (dealRowData: IDealGridRowData) => {

    const deal = deals?.find(d => d.name === dealRowData.name);
    if (!deal)
      return;

    setDeal(deal)
        
    // Get current batch
    let batchPercent: number = 0
    try {
      const curbatchRes = await axios.get(`${getBackend()}/api/distributions/getcurbatch/${deal.name}`);
      setCurrentBatch(curbatchRes.data.type)
      batchPercent = Number(curbatchRes.data.percent);
      console.log(`${deal.name}'s curent batch is ${currentBatch} ${batchPercent} of ${deal?.fundrasing} fundraising amount.`)
    }
    catch (e) {
      console.log('Fetching current batch error');
      toast.error('Fetching current batch error');
      return;
    }

    setDistributeAmount(Number(deal?.fundrasing) * batchPercent / 100)

    // Get network
    console.log("chains =>", chains)
    const currentChain = chains.find(c => c.id === chainId);
    console.log("currentChain =>", currentChain)
    if (currentChain)
      setNetwork(currentChain.name)

    setModalData(dealRowData);
    setOpenPayDlg(true);
  };

  const closeModal = () => {
    setOpenPayDlg(false);
    setModalData(null);
  };

  const onPay = async () => {
    try {
      const newPayment = {
        dealname: deal?.name,
        batch: currentBatch,
        network: network,
        wallet: address,
        token: deal?.name,
        amount: distributeAmount
      }

      await axios.post(`${getBackend()}/api/payments/pay/`, newPayment);
      toast.success("Payment successfully done! 🎉");
      fetchDealData()
    }
    catch (e) {
      console.log('Payment failed:', e);

      if (axios.isAxiosError(e)) {
        toast.error(e.response?.data?.message || e.response?.data || e.message);
      } else {
        toast.error((e as Error).message || 'Unknown error');
      }
    }

    closeModal()
  }

  // Grid table data
  const [rowData, setRowData] = useState<IDealGridRowData[]>([]);

  const columnDefs: ColDef[] = [
    { headerName: "SN", field: 'no', flex: 1 },
    { headerName: "Deal Detail", field: 'name', cellRenderer: DealNameCell, flex: 2 },
    { headerName: "Status", field: 'status', flex: 2,
      filter: 'agTextColumnFilter',
      cellRenderer: DealStatusCell },
    { headerName: "Deal Time", field: 'time', flex: 3, filter: 'agDateColumnFilter',
      cellRenderer: (params: any) => {
        return (
          <div className="flex h-full items-center">
            <p>{params.value}</p>
          </div>
        );
      } },
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
    { headerName: "Distribution", field: 'distribution', flex: 3,
      cellRenderer: (params: any) => {
        return (
          <div className="flex h-full items-center">
            <p>{params.value}</p>
          </div>
        );
      } },
    { headerName: "Progress", field: 'progress', flex: 2, cellRenderer: DealProgressCell },
    {
      headerName: "Action", field: 'action', flex: 2, cellRenderer: DistributionActionCell,
      cellRendererParams: {
        openModal,  // Pass openModal into the cell
      },
    }
  ];

  const [defaultColDef, setDefaultColDef] = useState({
    resizable: true,
  });

  const gridOption = React.useMemo(() => {
    return {
      pagination: true,
      paginationPageSize: 10,
    };
  }, []);

  // Fill table
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

          try {
            const res = await axios.get(`${getBackend()}/api/invests/summary/${deal.name}`);
            investorCount = res.data.investorCount
          }
          catch (e) {
            console.log('Fetching invest summary failed:', e)
          }

          try {
            const curBatchData = await axios.get(`${getBackend()}/api/distributions/getcurbatch/${deal.name}`)
            const curBatch = curBatchData.data.type + "-" + curBatchData.data.percent + "%";

            const totalPaymentData = await axios.get(`${getBackend()}/api/payments/total/${deal.name}`);
            const totalPayment = totalPaymentData.data.totalAmount
            console.log(`totalPayment: ${totalPayment}, fundrasing: ${deal.fundrasing}, so percent: ${100 * totalPayment / Number(deal.fundrasing)}`)

            const fundraising = Number(deal.fundrasing)
            const percent = 100 * totalPayment / fundraising

            investArray.push({
              no: index + 1,
              name: deal.name,
              logo: "http://localhost:5000" + deal.logo.substring(1),
              status: deal.state,
              time: timeString,
              amount: `$${fundraising}/$${deal.fdv}\n${investorCount} Investors`,
              distribution: curBatch,
              progress: percent
            })
          }
          catch (e) {
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

  // Schedule dialog.
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
  const handleRowClick = (event: CellClickedEvent) => {
    const clickedRowData = event.data as IDealGridRowData;
    setCurDealName(clickedRowData.name)
  };

  // Rendering table
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
                onCellClicked={(event) => {
                  console.log('cell field', event.colDef.field)
                  if (event.colDef.field !== 'action') {
                    handleRowClick(event);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <Schedule isOpen={bOpenSchedule} onConfirm={() => closeSchedule()} onClose={() => closeSchedule()} />

      {/* Render Distribute Modal OUTSIDE the grid */}
      {modalData && (
        <Distribute
          isOpen={bOpenPayDlg}
          onClose={closeModal}
          onConfirm={() => onPay()}
          network={network}
          wallet={address}
          token={deal?.name}
          amount={distributeAmount}
        />
      )}
    </>

  );
};

export default Distribution;
