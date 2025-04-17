import React from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import { IDealGridRowData } from '../../../interface/DealGridRowData';

const DealProgressCell: React.FC<ICellRendererParams<IDealGridRowData>> = ({ data }) => {
  if (!data) return null;

  return (
    <div className='flex h-full items-center'>
      <div className="w-full bg-gray rounded-full h-2.5">
        <div
          className="bg-green h-2.5 rounded-full"
          style={{ width: `${data.progress}%` }}
        />
      </div>
    </div>
  );
};

export default DealProgressCell;