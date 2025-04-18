// components/cells/TokensReceivedCell.tsx
import { FC } from 'react';

const TokensReceivedCell: FC<any> = ({ value }) => {
  const percent = value.percent;

  return (
    <div className="flex items-center gap-4">
      {/* Circle chart */}
      <div className="relative w-12 h-12">
        <svg viewBox="0 0 36 36" className="w-full h-full">
          <path
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="2"
          />
          <path
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
            strokeDasharray={`${percent}, 100`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">
          {percent}%
        </div>
      </div>

      {/* Chat Data */}
      <div className="text-sm">
        <p><strong>{value.received}</strong> received</p>
        <p><strong>{value.receiving}</strong> receiving</p>
      </div>
    </div>
  );
};

export default TokensReceivedCell;
