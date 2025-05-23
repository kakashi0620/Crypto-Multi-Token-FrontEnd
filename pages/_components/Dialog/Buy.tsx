import axios from "axios"
import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { useDeal } from "../../../hooks/dealContext";
import { useUser } from "../../../hooks/userContext";
import { getBackend } from "../../utils";

const Buy = ({ investAmount, isOpen, onConfirm, onClose }) => {

  const {user} = useUser()
  const {deal} = useDeal()
  const [fee, setFee] = useState(0)

  useEffect(() => {
    axios.get(`${getBackend()}/api/invests/getreferralfee/${user?.userName}`)
    .then(res => {
      setFee(Number(deal?.fee) + res.data.referralfee)
    })
  })

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
            value={investAmount * (100 + fee) / 100}
          />
        </div>

        <div className="flex flex-col gap-y-1">
          <p>Amount of <span className="text-[#6EC1E4]">{deal?.name}</span></p>
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
          className="flex w-full justify-center rounded-md bg-gradient-to-r from-[#1A1A1A] to-[#242424] px-3 p-1 text-md font-semibold leading-6 text-white shadow-sm hover:from-[#242424] hover:to-[#1A1A1A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
          onClick={() => onConfirm()}
        >
          Purchase
        </button>
      </div>

    </Modal>
  );
};

export default Buy;