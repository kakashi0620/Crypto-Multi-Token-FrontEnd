import React from 'react';
import { ICellRendererParams } from 'ag-grid-community';
// import { IDealGridRowData } from '../../../interface/DealGridRowData';


const DealNameCell: React.FC<any> = ({ data }) => {
  if (!data) return null;

  return (
    <div className="flex items-center gap-2">
      <img src={data.logo} alt={data.name} className="w-16 h-16 rounded-full object-cover object-center" />
      <span className="text-sm font-medium">{data.name}</span>
    </div>
  );
};

export default DealNameCell;