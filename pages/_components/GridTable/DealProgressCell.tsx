import React from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import { IDealGridRowData } from '../../../interface/DealGridRowData';

const DealProgressCell: React.FC<ICellRendererParams<IDealGridRowData>> = ({ data }) => {
  if (!data) return null;

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-green-500 h-2.5 rounded-full"
        style={{ width: `${data.progress}%` }}
      />
    </div>
  );
};

export default DealProgressCell;