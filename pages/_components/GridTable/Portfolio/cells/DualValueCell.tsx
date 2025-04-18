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
                                <strong>{'$' + Number(value[key]).toLocaleString()}</strong>
                            </p>
                            :
                            <p key={key} className='text-gray'>
                                {'$' + Number(value[key]).toLocaleString()}
                            </p>
                    }
                </>

            ))}
        </div>
    );
};

export default DualValueCell;
