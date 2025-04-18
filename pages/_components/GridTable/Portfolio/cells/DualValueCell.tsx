// components/cells/DualValueCell.tsx
import { FC } from 'react';

const DualValueCell: FC<any> = ({ value }) => {
    const keys = Object.keys(value);
    return (
        <div className="text-sm">
            {keys.map((key, index) => (
                <>
                    {
                        index === 0 ?
                            <p key={key}>
                                <strong>{value[key]}</strong>
                            </p> :
                            <p key={key} className='text-gray'>
                                {value[key]}
                            </p>
                    }
                </>

            ))}
        </div>
    );
};

export default DualValueCell;
