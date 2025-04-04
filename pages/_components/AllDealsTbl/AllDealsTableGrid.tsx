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

export default function AllDealsTableGird(props) {

  const gridRef = React.useRef();
  const { data, handleOpenEditDialog, isadmin, handleClickOpen } = props;

  // const handleRemoveAllDeals = (info) => {
  //   // Swal.fire({
  //   //   title: 'Warnning!',
  //   //   text: 'Are you sure to remove this data?',
  //   //   type: 'confirm',
  //   //   showCancelButton: true,
  //   //   confirmButtonColor: '#3085d6',
  //   //   cancelButtonColor: '#d33',
  //   //   confirmButtonText: 'OK',
  //   //   cancelButtonText: 'Cancel',
  //   // }).then((result) => {
  //     // if (result.isConfirmed)
  //     {
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
  //   //   } else if (result.isDismissed) {
  //     }
  //   // });
  // }

  const [rowData, setRowData] = useState<any[]>([]);

  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    { field: "Draft", filter: 'agTextColumnFilter' },
    { field: "Upcoming", filter: true },
    { field: "Fundraising", filter: true },
    { field: "Closed", filter: true },
    { field: "Distributing", filter: true },
    { field: "Completed", filter: true },
    { field: "Refunded", filter: true },
    { field: "Achived", filter: true }
  ]);

  useEffect(() => {
    // fetch("https://www.ag-grid.com/example-assets/olympic-winners.json") // Fetch data from server
    //   .then((result) => result.json()) // Convert to JSON
    //   .then((rowData) => setRowData(rowData)); // Update state of `rowData`
    setRowData(
      [
        {
          "Draft": "Laika Ai, KOL, $0.00469 11 % TGE, 2M Cliff, 12M vesting",
          "Upcoming": "2,346,597",
          "Fundraising": "35,467",
          "Closed": "1,324,687",
          "Distributing": "23,345",
          "Completed": "82,632",
          "Refunded": "23",
          "Achived": "214"
        },
        {
          "Draft": "Navi, S, $0.061 15 % TGE, 1.5M Cliff, 8M vesting",
          "Upcoming": "2,332,431",
          "Fundraising": "98,762",
          "Closed": "564,975",
          "Distributing": "7,897",
          "Completed": "1,657",
          "Refunded": "25",
          "Achived": "378"
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

  // React.useEffect(() => {
  //   if (data) {
  //     let newdata = data.map((item) => {
  //       return ({ ...item, startdate: moment(item.startdate).format('YYYY-MM-DD'), enddate: moment(item.enddate).format('YYYY-MM-DD') });
  //     })
  //     setRowData(newdata);
  //   }

  //   setColumnDefs([
  //     { field: 'draft' as string, headerName: 'Draft' as string, sortable: true, filter: true },
  //     // { field: 'upcoming', headerName: 'Upcoming', sortable: true, filter: true  },
  //     // { field: 'fundraising', headerName: 'Fundraising', sortable: true, filter: true  },
  //     // { field: 'closed', headerName: 'Closed', sortable: true, filter: true  },
  //     // { field: 'distributing', headerName: 'Distributing', sortable: true, filter: true  },
  //     // { field: 'completed', headerName: 'Completed', sortable: true, filter: true  },
  //     // { field: 'refunded', headerName: 'Refunded', sortable: true, filter: true  },
  //     // { field: 'archived', headerName: 'Archived', sortable: true, filter: true  },
  //     // {
  //     //   field: 'action', headerName: 'Action', sortable: false, filter: false
  //     //   // , cellRenderer: TableCellRender,
  //     //   // cellRendererParams: {
  //     //   //   onEditClick: handleOpenEditDialog,
  //     //   //   onRemoveClick: handleRemoveAllDeals // Pass additional data here
  //     //   // }
  //     // },
  //   ]);

  // }, [data, isadmin, handleOpenEditDialog]);

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
      {/* <div className="ag-theme-alpine" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          // ref={gridRef}
          // rowSelection={rowSelection}
          // // onRowDoubleClicked={onRowDoubleClicked}
          // pagination={true}
          // defaultColDef={{
          //   sortable: true,
          //   filter: true,
          //   resizable: true,
          // }}
          // domLayout='autoHeight'
        />
      </div> */}
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