import React from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import { IDealGridRowData } from '../../../interface/DealGridRowData';

const DealActionCell: React.FC<ICellRendererParams<IDealGridRowData>> = ({ data }) => {
  if (!data) return null;

  return (
    <div className="flex gap-2 items-center h-full">
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 text-xs rounded">
        Edit
      </button>
      <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 text-xs rounded">
        Detail
      </button>
      <button className="bg-black hover:bg-black text-white px-2 py-1 text-xs rounded">
        Export
      </button>
    </div>
  );
};

export default DealActionCell;