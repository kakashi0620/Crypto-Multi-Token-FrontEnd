import React, { useEffect } from 'react';

const Modal = ({ isOpen, title, onClose, children }) => {

    const isOpenState = isOpen;

    useEffect(() => {
        console.log("isOpened");
    }, [isOpenState]);

    if (!isOpen) return null;

    const onClickState = (e) => {
        e.stopPropagation();
    };

    return (
        <div className='fixed inset-0 z-[9999] flex w-screen bg-black bg-opacity-80 justify-center items-center'>
            <div onClick={e => onClickState(e)} className=' bg-white bg-opacity-0 z-30 rounded-lg shadow-lg p-6 max-w-md w-full relative'>
                <button onClick={onClose} className='absolute top-2 right-3 text-gray-500 hover:text-gray-900 hover:outline-none active:outline-none focus:outline-none'>
                    &#x2715;
                </button>

                <h1 className='absolute top-2 left-5 text-1xl'>
                    {title || 'Title'}
                </h1>

                <div className='flex mt-6'>
                    {children}
                </div>

            </div>
        </div>
    )
};


export default Modal;