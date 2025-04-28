// components/cells/DealCell.tsx
import { FC } from 'react';

const DealCell: FC<any> = ({ value }) => {
  return (
    <div className="flex items-center gap-2">
      <img src={value.logo} alt="logo" className="w-16 h-16 rounded-full" />
      <span>{value.name}</span>
    </div>
  );
};

export default DealCell;
