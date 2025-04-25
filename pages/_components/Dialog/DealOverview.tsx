import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { useRouter } from "next/router";
import { useDeal } from "../../../hooks/dealContext";

interface DealOverviewProps {
  isOpen: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

const DealOverview: React.FC<DealOverviewProps> = ({ isOpen, onConfirm, onClose }) => {

  const {deal} = useDeal();
  const getVestingSummary = () => {
    return deal?.vesttge + "% TGE, " + deal?.vestcliff + "M Cliff, " + deal?.vestgap + "M vesting"
  }

  const [dateRemained, setDateRemained] = useState("");
  const [bOverTime, setOverTime] = useState(false);

  // Function to calculate remaining time
  const calculateRemainingTime = () => {
    if (deal) {
      const diffInMillis = new Date(deal.livedate).getTime() - new Date().getTime();

      if (diffInMillis <= 0) {
        setOverTime(true)
        setDateRemained("Time is up!");
        return;
      }
      else {
        setOverTime(false)
      }

      const days = Math.floor(diffInMillis / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffInMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffInMillis % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffInMillis % (1000 * 60)) / 1000);

      setDateRemained(`Deal will live on ${days} day ${hours}:${minutes}:${seconds}`);
    }
  };

  // Update the date every second
  useEffect(() => {
    if (deal) {
      calculateRemainingTime(); // Initial calculation
      const interval = setInterval(calculateRemainingTime, 1000); // Update every second

      return () => clearInterval(interval); // Clean up the interval on component unmount
    }
  }, [deal]);

  const router = useRouter();
  const onDetail = () => {
    if (deal?.name !== "") {
      router.push("/dealdetail")
    }
  }
  const onContribute = () => {
    if (deal?.name !== "") {
      router.push("/dealcontribute")
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} onConfirm={onConfirm} title="">
      <div className="flex flex-col gap-y-10 p-1 md:p-3 text-black">
        <div className="flex w-full justify-center">
          {dateRemained}
        </div>

        <div className="flex w-full justify-center">
          <img src={deal?.logo} alt="Logo Image" />
        </div>

        <div className="flex flex-col gap-y-2">
          <div className="grid grid-cols-[1fr_1fr_6fr]">
            <div>Deal</div>
            <div className="flex w-full justify-center">:</div>
            <div>{deal?.name}</div>
          </div>

          <div className="grid grid-cols-[1fr_1fr_6fr]">
            <div>Round</div>
            <div className="flex w-full justify-center">:</div>
            <div>{deal?.round}</div>
          </div>

          <div className="grid grid-cols-[1fr_1fr_6fr]">
            <div>Price</div>
            <div className="flex w-full justify-center">:</div>
            <div>{deal?.tokenprice}</div>
          </div>

          <div className="grid grid-cols-[1fr_1fr_6fr]">
            <div>FDV</div>
            <div className="flex w-full justify-center">:</div>
            <div>{deal?.fdv}</div>
          </div>

          <div className="grid grid-cols-[1fr_1fr_6fr]">
            <div>Vesting</div>
            <div className="flex w-full justify-center">:</div>
            <div>{getVestingSummary()}</div>
          </div>

          <div className="grid grid-cols-[1fr_1fr_6fr]">
            <div>Limit</div>
            <div className="flex w-full justify-center">:</div>
            <div>{"Min: " + deal?.investmin + " Max: " + deal?.investmax}</div>
          </div>

          <div className="grid grid-cols-[1fr_1fr_6fr] pt-3">
            <div className="col-start-3 flex flex-col gap-y-1">
              <label
                htmlFor="total"
                className="block h-full text-md text-left align-middle font-medium leading-6 text-gray-900"
              >
                $0/$10,000
              </label>
              <div className="">
                <input
                  id="total"
                  name="total"
                  type="text"
                  autoComplete="total"
                  className="block w-full bg-white rounded-md border-2 p-1 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-x-5 w-full justify-center">
          <button
            type="button"
            className="text-white bg-green hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-green dark:focus:ring-blue-800"
            onClick={() => onDetail()}
          >
            Deal Detail
          </button>
          {
            bOverTime ?
              <button
                type="button"
                className="text-white bg-green hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-green dark:focus:ring-blue-800"
                onClick={() => onContribute()}
              >
                Contribute
              </button>
              : <></>
          }

        </div>
      </div>

    </Modal>
  );
};

export default DealOverview;