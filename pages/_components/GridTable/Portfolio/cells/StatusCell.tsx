// components/cells/StatusCell.tsx
import { FC } from 'react';
import clsx from 'clsx';

const StatusCell: FC<any> = ({ value }) => {
  const baseStyle = 'px-2 py-1 rounded-full text-sm font-medium border';
  const statusColor =
    value === 'Distributing'
      ? 'text-[#6EC1E4] border-green'
      : value === 'Fundraising' 
      ? 'text-pink border-pink'
      : 'text-gray border-gray';

  return (
    <div className='flex h-full items-center'>
        <span className={clsx(baseStyle, statusColor)}>{value}</span>
    </div>
  );
};

export default StatusCell;
