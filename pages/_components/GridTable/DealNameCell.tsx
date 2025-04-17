import React from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import { IDealGridRowData } from '../../../interface/DealGridRowData';


const DealNameCell: React.FC<ICellRendererParams<IDealGridRowData>> = ({ data }) => {
  if (!data) return null;

  return (
    <div className="flex items-center gap-2 h-full">
      <img src={data.logo} alt={data.name} className="w-6 h-6 rounded-full" />
      <span className="text-sm font-medium">{data.name}</span>
    </div>
  );
};

export default DealNameCell;