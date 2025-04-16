import React from "react";
import Modal from "./Modal";
import { useDeal } from "../../../hooks/dealContext";

const Buy = ({ investAmount, isOpen, onConfirm, onClose }) => {

  const {deal} = useDeal()

  return (
    <Modal isOpen={isOpen} onClose={onClose} onConfirm={onConfirm} title="Buy">
      <div className="flex flex-col gap-y-6 p-1 text-black">
        <div className="flex flex-col gap-y-1">
          <p>Invest amount</p>
          <input
            id="amountUSD"
            name="amountUSD"
            type="text"
            autoComplete="amountUSD"
            disabled
            className="block bg-white w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
            placeholder="Enter Amount"
            value={investAmount}
          />
        </div>

        <div className="flex flex-col gap-y-1">
          <p>Pay amount</p>
          <input
            id="amountBNB"
            name="amountBNB"
            type="text"
            autoComplete="amountBNB"
            disabled
            className="block bg-white w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
            placeholder="0"
            value={investAmount * (100 + Number(deal?.fee)) / 100}
          />
        </div>

        <div className="flex flex-col gap-y-1">
          <p>Amount of <span className="text-green">{deal?.name}</span></p>
          <input
            id="amountToken"
            name="amountToken"
            type="text"
            autoComplete="amountToken"
            disabled
            className="block bg-white w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
            placeholder="0"
            value={investAmount / Number(deal?.tokenprice)}
          />
        </div>

        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-green px-3 p-1 text-md font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
          onClick={() => onConfirm()}
        >
          Purchase
        </button>
      </div>

    </Modal>
  );
};

export default Buy;