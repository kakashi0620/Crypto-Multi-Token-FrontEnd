import * as React from 'react';
import toast from "react-hot-toast";
import axios from 'axios';
import moment from 'moment';
import { format } from 'date-fns';
import AddIcon from '@mui/icons-material/Add';
import { PROXY_URL } from '../../../docs/data';
import Swal from 'sweetalert2';
import TableCellRender from '../TableCellRender';
import { AgGridReact } from 'ag-grid-react';
import { useEffect, useState } from "react";
import type { ColDef, RowSelectionOptions } from "ag-grid-community";
import { ClientSideRowModelModule, CsvExportModule, AllCommunityModule, ModuleRegistry } from "ag-grid-community";

ModuleRegistry.registerModules([ClientSideRowModelModule, CsvExportModule, AllCommunityModule]);

// LicenseManager.setLicenseKey('your License Key');

export default function EveryDealTableGird(props) {

  const gridRef = React.useRef();
  const { data, handleOpenEditDialog, isadmin, handleClickOpen } = props;

  // const handleRemoveEveryDeal = (info) => {
  //   Swal.fire({
  //     title: 'Warnning!',
  //     text: 'Are you sure to remove this data?',
  //     type: 'confirm',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'OK',
  //     cancelButtonText: 'Cancel',
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       axios.post(PROXY_URL + '/api/vac/delete', { _id: info._id },
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${localStorage.getItem("token_info")}`,
  //           },
  //         }
  //       ).then(res => {
  //         if (res.data.success === true) {
  //           toast.success(res.data.message);
  //           window.location.reload();
  //         }
  //       })
  //         .catch(err => console.log(err));
  //     } else if (result.isDismissed) {
  //     }
  //   });
  // }

  const [rowData, setRowData] = useState<any[]>([]);

  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    { field: "S/N", filter: true },
    { field: "Deal Detail", filter: 'agTextColumnFilter' },
    { field: "Status", filter: 'agTextColumnFilter' },
    { field: "Deal Time", filter: 'agDateColumnFilter' },
    { field: "Amount Raised", filter: 'agTextColumnFilter' },
    { field: "Distribution", filter: 'agTextColumnFilter' },
    { field: "Progress", filter: 'agTextColumnFilter' }
  ]);

  useEffect(() => {
    // fetch("https://www.ag-grid.com/example-assets/olympic-winners.json") // Fetch data from server
    //   .then((result) => result.json()) // Convert to JSON
    //   .then((rowData) => setRowData(rowData)); // Update state of `rowData`
    setRowData(
      [
        {
          "S/N":"1",
          "Deal Detail":"Laika Ai, KOL, $0.00469 11 % TGE, 2M Cliff, 12M vesting",
          "Status":"Closed",
          "Deal Time":"29-Jun-24 10.15 UTC",
          "Amount Raised":"$10,000/$10,0000 28 Investors",
          "Distribution":"Create Distribution Schedule Or Batch -1: 15%",
          "Progress":"15%"
        },
        {
          "S/N":"2",
          "Deal Detail":"Navi, S, $0.061 15 % TGE, 1.5M Cliff, 8M vesting",
          "Status":"Closed",
          "Deal Time":"16-Mar-25 04.32 UTC",
          "Amount Raised":"$6,230/$10,0000 17 Investors",
          "Distribution":"Create Distribution Schedule Or Batch -1: 25%",
          "Progress":"25%"
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
      pagination: true,
      paginationPageSize: 10,
      // paginationPageSizeSelector: [10, 20, 30, 40, 50],
    };
  }, []);

  // const onBtExport = React.useCallback(() => {
  //   const spreadsheets = [];
  //   let nodesToExport = [];
  //   gridRef.current.api.forEachNode((node, index) => {
  //     nodesToExport.push(node);
  //     if (index % 100 === 99) {
  //       gridRef.current.api.setNodesSelected({
  //         nodes: nodesToExport,
  //         newValue: true,
  //       });
  //       spreadsheets.push(
  //         gridRef.current.api.getSheetDataForExcel({
  //           onlySelected: true,
  //         }),
  //       );
  //       gridRef.current.api.deselectAll();
  //       nodesToExport = [];
  //     }
  //   });

  //   // check if the last page was exported
  //   if (gridRef.current.api.getSelectedNodes().length) {
  //     spreadsheets.push(
  //       gridRef.current.api.getSheetDataForExcel({
  //         onlySelected: true,
  //       }),
  //     );
  //     gridRef.current.api.deselectAll();

  //     gridRef.current.api.exportMultipleSheetsAsExcel({
  //       data: spreadsheets,
  //       fileName: `124-vacations-${format(new Date(), 'yyyy-MM-dd')}.xlsx`,
  //     });
  //     toast.success("Export successfully!");
  //   }
  //   else{
  //     Toast.error("Sorry, selet the data!");
  //   }
  // }, []);

  // const rowSelection = React.useMemo(() => {
  //   return {
  //     mode: "multiRow",
  //   };
  // }, []);

  // const onRowDoubleClicked = (event) => {
  //   handleOpenEditDialog(event.data);
  // };

  return (
    <div className='flex flex-col w-full h-full'>
      {/* <div className='flex flex-wrap justify-end mb-4 space-x-2'>
        <button onClick={onBtExport} className="p-2 text-sm font-bold border-2 border-blue-400 text-blue-800 hover:bg-blue-300 rounded-md">
          Export to Excel
        </button>
        <div className='flex'><button onClick={handleClickOpen} variant="contained" className='flex p-2 rounded-md bg-blue-600 text-white hover:bg-blue-800' ><AddIcon />Add</button></div>
      </div> */}
      {/* <div className="ag-theme-alpine" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}> */}
      <div style={{ width: "100%", height: "30vh" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowSelection={rowSelection as RowSelectionOptions}
          gridOptions={gridOption} />
      </div>
    </div>
  );
}