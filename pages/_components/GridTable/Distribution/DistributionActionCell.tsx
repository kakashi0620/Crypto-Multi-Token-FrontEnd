import React from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import { IDealGridRowData } from '../../../../interface/DealGridRowData';


interface DistributionActionCellProps extends ICellRendererParams<IDealGridRowData> {
  openModal: (deal: IDealGridRowData) => void;
}

const DistributionActionCell: React.FC<DistributionActionCellProps> = ({ data, openModal }) => {

  if (!data) return null;

  const handleDistribute = async (event: React.MouseEvent<HTMLButtonElement>) => {
    // event.preventDefault();
    event.stopPropagation();  // 👈 stop the row click

    if (data) {
      openModal(data);
    }
  }

  return (
    <div className="flex gap-2 items-center h-full justify-center">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 text-xs rounded"
        disabled={data?.status === 'Awaiting TGE'}
        onClick={(event) => handleDistribute(event)}>
        Distribute
      </button>
    </div>
  );
};

export default DistributionActionCell;