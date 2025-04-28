import React from "react";
import Modal from "./Modal";


const Distribute = ({ isOpen, onClose, onConfirm, network, wallet, token, amount }) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose} onConfirm={onConfirm} title="Buy">
      <div className='text-black'>
        {/* Title */}
        <div className="text-4xl font-semibold flex w-full justify-between">
          <p>Total amount</p>
          <p>{`${amount} $${token}`}</p>
        </div>

        <hr className="border-gray border-t-2 my-4" />

        <div className="text-lg flex w-full justify-between gap-x-5">
          <p>Network</p>
          <p>{network}</p>
        </div>
        <div className="text-lg flex w-full justify-between gap-x-5">
          <p>Token</p>
          <p>{token}</p>
        </div>
        <div className="text-lg flex w-full justify-between gap-x-5">
          <p>From wallet</p>
          <p>{wallet}</p>
        </div>

        <hr className="border-gray border-t-2 my-4" />

        {/* Pay Button */}
        <button
          onClick={onConfirm}
          className="w-full bg-green text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Pay
        </button>
      </div>
    </Modal>
  );
};

export default Distribute;