import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { useRouter } from "next/router";

const DealOverview = ({ isOpen, onConfirm, onClose }) => {

  const [amountUSD, setAmountUSD] = useState(0)
  const [amountBNB, setAmountBNB] = useState(0)
  const [amountToken, setAmountToken] = useState(0)

  useEffect(() => {
    setAmountBNB(amountUSD)
    setAmountToken(amountUSD)
  }, [amountUSD])

  const router = useRouter();
  const onBuyNow = (e) => {
    router.push("/dealdetail")
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} onConfirm={onConfirm} title="Buy">
      <div className="flex flex-col gap-y-6 p-1 md:p-2 text-black">
        <div className="flex flex-col gap-y-1">
          <p>Enter amount in USD</p>
          <input
            id="amountUSD"
            name="amountUSD"
            type="text"
            autoComplete="amountUSD"
            required
            className="block bg-white w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
            placeholder="Enter Amount"
            value={amountUSD}
            onChange={(e) => {
              setAmountUSD(Number(e.target.value));
            }}
          />
        </div>

        <div className="flex flex-col gap-y-1">
          <p>Amount of <span className="text-green">BNB</span> you pay</p>
          <input
            id="amountBNB"
            name="amountBNB"
            type="text"
            autoComplete="amountBNB"
            required
            className="block bg-white w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
            placeholder="0"
            readOnly
            value={amountBNB}
            onChange={(e) => {
              setAmountBNB(Number(e.target.value));
            }}
          />
        </div>

        <div className="flex flex-col gap-y-1">
          <p>Amount of <span className="text-green">Xxx</span> you receive</p>
          <input
            id="amountToken"
            name="amountToken"
            type="text"
            autoComplete="amountToken"
            required
            className="block bg-white w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
            placeholder="0"
            readOnly
            value={amountToken}
            onChange={(e) => {
              setAmountToken(Number(e.target.value));
            }}
          />
        </div>

        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-green px-3 p-1 text-md font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
          onClick={(e) => onBuyNow(e)}
        >
          Buy Now
        </button>
      </div>

    </Modal>
  );
};

export default DealOverview;