import React, { useEffect, useState } from "react";
import Modal from "./Modal";


const Schedule = ({ curSymbol, nextSymbol, date, amount, isOpen, onConfirm, onClose }) => {

  const onSave = () => {
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} onConfirm={onConfirm} title="Buy">
      <div className="flex flex-col gap-y-6 p-1 md:p-2 text-black">
        <p className="py-5 text-xl font-bold">
          Vesting schedule for {curSymbol}
        </p>

        <div className="flex flex-col gap-y-6 justify-center">
          <div className="flex flex-col ">
            <p>Set up a vesting schedule to ensure your investors are property informed.</p>
            <p>Start by setting {nextSymbol} date and percentage to be distributed.</p>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-x-3">
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="block bg-white w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
              value={nextSymbol}
            />
            <input
              id="date"
              name="date"
              type="text"
              autoComplete="date"
              required
              className="block bg-white w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
              value={date}
            />
            <input
              id="amount"
              name="amount"
              type="text"
              autoComplete="amount"
              required
              className="block bg-white w-full rounded-md border-0 p-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
              readOnly
              value={amount}
            />
          </div>
        </div>

        <button
          type="submit"
          className="flex justify-right rounded-md bg-green px-3 p-1 text-md font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
          onClick={() => onSave()}
        >
          Save vesting schedule
        </button>
      </div>

    </Modal>
  );
};

export default Schedule;