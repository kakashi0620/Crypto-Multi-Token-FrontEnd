// components/PortfolioTable.tsx
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ClientSideRowModelModule, CsvExportModule, AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { ColDef } from 'ag-grid-community';
import { FC, useState } from 'react';

import DealCell from './cells/DealCell';
import StatusCell from './cells/StatusCell';
import TokensReceivedCell from './cells/TokensReceivedCell';
import DualValueCell from './cells/DualValueCell';


ModuleRegistry.registerModules([ClientSideRowModelModule, CsvExportModule, AllCommunityModule]);

export interface IPortfolioRowData {
    deal: { logo: string; name: string };
    status: string;
    allocation: { invest: string; pay: string };
    tokensReceived: { percent: number; received: string; receiving: string };
    valueLocked: { free: string; locked: string };
    nextUnlock: { date: string; amount: string };
}

interface PortfolioTableProps {
    rowData: IPortfolioRowData[];
}

const PortfolioTable: FC<PortfolioTableProps> = ({ rowData }) => {
    const columnDefs: ColDef[] = [
        {
            headerName: 'Deal',
            field: 'deal',
            flex: 1,
            cellRenderer: DealCell,
        },
        {
            headerName: 'Status',
            field: 'status',
            flex: 1,
            filter: 'agTextColumnFilter',
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

    const [defaultColDef, setDefaultColDef] = useState({
        resizable: true,
    });

    return (
        <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}
            defaultColDef={defaultColDef}
        />
    );
};

export default PortfolioTable;