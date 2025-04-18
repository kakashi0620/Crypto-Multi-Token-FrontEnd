// components/cells/DualValueCell.tsx
import { FC } from 'react';

const DualValueCell: FC<any> = ({ value }) => {
  const keys = Object.keys(value);
  return (
    <div className="text-sm">
      {keys.map((key) => (
        <p key={key}>
          <strong>{value[key]}</strong> {key}
        </p>
      ))}
    </div>
  );
};

export default DualValueCell;
