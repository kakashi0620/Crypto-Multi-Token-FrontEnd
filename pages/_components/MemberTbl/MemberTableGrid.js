import * as React from 'react';
import axios from 'axios';
import moment from 'moment';
import { format } from 'date-fns';
import AddIcon from '@mui/icons-material/Add';
import { PROXY_URL } from '../../docs/data';
import Swal from 'sweetalert2';
import TableCellRender from '../TableCellRender';
import { AgGridReact } from 'ag-grid-react';
import Toast from '../Toast';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css'

import {
  ClientSideRowModelModule,
  CsvExportModule,
  ModuleRegistry,
  NumberFilterModule,
  RowSelectionModule,
  TextFilterModule,
  ValidationModule,
} from "ag-grid-community";

import {
  ColumnMenuModule,
  ContextMenuModule,
  ExcelExportModule,
  AllEnterpriseModule,
  LicenseManager
} from "ag-grid-enterprise";

// Register all enterprise features
ModuleRegistry.registerModules([
  TextFilterModule,
  NumberFilterModule,
  RowSelectionModule,
  ClientSideRowModelModule,
  CsvExportModule,
  ExcelExportModule,
  ColumnMenuModule,
  ContextMenuModule,
  ValidationModule,
  AllEnterpriseModule /* Development Only */,
]);

LicenseManager.setLicenseKey('your License Key');

export default function MemberTableGird(props) {

  const gridRef = React.useRef();
  const { data, handleOpenEditDialog, isadmin, handleClickOpen } = props;

  const handleRemoveMember = (info) => {
    Swal.fire({
      title: 'Warnning!',
      text: 'Are you sure to remove this data?',
      type: 'confirm',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post(PROXY_URL + '/api/vac/delete', { _id: info._id },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token_info")}`,
            },
          }
        ).then(res => {
          if (res.data.success === true) {
            Toast.success(res.data.message);
            window.location.reload();
          }
        })
          .catch(err => console.log(err));
      } else if (result.isDismissed) {
      }
    });
  }

  const [rowData, setRowData] = React.useState([]);
  const [columnDefs, setColumnDefs] = React.useState([]);

  React.useEffect(() => {
    if (data) {
      let newdata = data.map((item) => {
        return ({ ...item, startdate: moment(item.startdate).format('YYYY-MM-DD'), enddate: moment(item.enddate).format('YYYY-MM-DD') });
      })
      setRowData(newdata);
    }

    setColumnDefs([
      { field: 'memeberId', headerName: 'S/N', flex: 1 },
      { field: 'status', headerName: 'Status', flex: 1 },
      { field: 'userId.userName', headerName: 'Username', flex: 1 },
      { field: 'userId.emailAddress', headerName: 'Email', flex: 1 },
      { field: 'userId.telegramId', headerName: 'Telegram', flex: 1 },
      { field: 'userId.twitterId', headerName: 'Twitter', flex: 1 },
      { field: 'userId.discordId', headerName: 'Discord', flex: 1 },
      { field: 'joinedon', headerName: 'Joined on', flex: 1 },
      { field: 'totaldeals', headerName: 'Total Deals', flex: 1 },
      { field: 'totalinvestment', headerName: 'Total Investment', flex: 1 },
      { field: 'totalreferral', headerName: 'Total Referral', flex: 1 },
      {
        field: 'action', headerName: 'Action', flex: 1, sortable: false, filter: false, cellRenderer: TableCellRender,
        cellRendererParams: {
          onEditClick: handleOpenEditDialog,
          onRemoveClick: handleRemoveMember // Pass additional data here
        }
      },
    ]);

  }, [data, isadmin, handleOpenEditDialog]);

  const onBtExport = React.useCallback(() => {
    const spreadsheets = [];
    let nodesToExport = [];
    gridRef.current.api.forEachNode((node, index) => {
      nodesToExport.push(node);
      if (index % 100 === 99) {
        gridRef.current.api.setNodesSelected({
          nodes: nodesToExport,
          newValue: true,
        });
        spreadsheets.push(
          gridRef.current.api.getSheetDataForExcel({
            onlySelected: true,
          }),
        );
        gridRef.current.api.deselectAll();
        nodesToExport = [];
      }
    });

    // check if the last page was exported
    if (gridRef.current.api.getSelectedNodes().length) {
      spreadsheets.push(
        gridRef.current.api.getSheetDataForExcel({
          onlySelected: true,
        }),
      );
      gridRef.current.api.deselectAll();

      gridRef.current.api.exportMultipleSheetsAsExcel({
        data: spreadsheets,
        fileName: `124-vacations-${format(new Date(), 'yyyy-MM-dd')}.xlsx`,
      });
      Toast.success("Export successfully!");
    }
    else{
      Toast.error("Sorry, selet the data!");
    }
  }, []);

  const rowSelection = React.useMemo(() => {
    return {
      mode: "multiRow",
    };
  }, []);

  const onRowDoubleClicked = (event) => {
    handleOpenEditDialog(event.data);
  };

  return (
    <div className='flex flex-col w-full h-full px-6 pt-4'>
      {/* <div className='flex flex-wrap justify-end mb-4 space-x-2'>
        <button onClick={onBtExport} className="p-2 text-sm font-bold border-2 border-blue-400 text-blue-800 hover:bg-blue-300 rounded-md">
          Export to Excel
        </button>
        <div className='flex'><button onClick={handleClickOpen} variant="contained" className='flex p-2 rounded-md bg-blue-600 text-white hover:bg-blue-800' ><AddIcon />Add</button></div>
      </div> */}
      <div className="ag-theme-alpine" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          ref={gridRef}
          rowSelection={rowSelection}
          // onRowDoubleClicked={onRowDoubleClicked}
          pagination={true}
          defaultColDef={{
            sortable: true,
            filter: true,
            resizable: true,
          }}
          domLayout='autoHeight'
        />
      </div>
    </div>
  );
}