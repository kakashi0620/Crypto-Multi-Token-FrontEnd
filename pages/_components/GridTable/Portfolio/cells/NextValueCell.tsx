// components/cells/NextValueCell.tsx
import { FC } from 'react';

const NextValueCell: FC<any> = ({ value }) => {
  const keys = Object.keys(value);
  return (
    <div className="text-sm">
      {keys.map((key) => (
        <p key={key}>
          <strong>{value[key]}</strong>
        </p>
      ))}
    </div>
  );
};

export default NextValueCell;
