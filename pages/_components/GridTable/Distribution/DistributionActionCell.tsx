import axios from "axios"
import React, { useEffect, useState } from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import { IDealGridRowData } from '../../../../interface/DealGridRowData';
import { getBackend } from "../../../utils";


interface DistributionActionCellProps extends ICellRendererParams<IDealGridRowData> {
  openModal: (deal: IDealGridRowData) => void;
}

const DistributionActionCell: React.FC<DistributionActionCellProps> = ({ data, openModal }) => {

  const [canPay, setCanPay] = useState(false)

  const checkPayable = async () => {
    if (!data)
      return false

    const payable = await axios.get(`${getBackend()}/api/payments/canpay/${data.name}`)
    setCanPay(payable.data.can);
  }

  useEffect(() => {
    checkPayable()
  }, [])

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
        className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray text-white px-2 py-1 text-xs rounded"
        // disabled={data?.status === 'Awaiting TGE'}
        disabled={!canPay}
        onClick={(event) => handleDistribute(event)}>
        Distribute
      </button>
    </div>
  );
};

export default DistributionActionCell;