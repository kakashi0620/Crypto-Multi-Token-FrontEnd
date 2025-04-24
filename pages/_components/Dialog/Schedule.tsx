import axios from 'axios'
import toast from "react-hot-toast";
import React, { useEffect, useState } from "react";
import { format, parseISO } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import Modal from "./Modal";
import { getBackend } from "../../utils";
import { useDeal } from '../../../hooks/dealContext';


type Step = {
  id: string;
  type: string;
  date: string;
  percent: number;
};

const Schedule = ({ isOpen, onConfirm, onClose }) => {

  const { deal } = useDeal();
  const [newIDs, setNewIDs] = useState<string[]>([]);
  const [steps, setSteps] = useState<Step[]>([]);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [batchCount, setBatchCount] = useState(0);
  const [lastDate, setLastDate] = useState("");
  const [totalPercent, setTotalPercent] = useState(0);

  useEffect(() => {
    setNewIDs([])
    setBatchCount(0)

    if (isOpen) {
      axios.get(`${getBackend()}/api/distributions/getbydeal/${deal?.name}`)
        .then((res) => {
          setBatchCount(res.data.length)

          if (res.data.length > 0) {
            setSteps(res.data.map((d: any) => ({ ...d, id: uuidv4() })));
            setTotalPercent(res.data.reduce((sum, schedule) => sum + schedule.percent, 0))
            setIsFirstLoad(false);
            setLastDate(res.data[res.data.length - 1].date)
          } else {
            const newID = uuidv4()
            setSteps([{
              id: newID,
              type: 'TGE',
              date: format(new Date(), 'yyyy-MM-dd'),
              percent: Number(deal?.vesttge),
            }]);
            setTotalPercent(Number(deal?.vesttge))
            setNewIDs([newID]);
            setIsFirstLoad(true);
          }
        });
    }
  }, [, isOpen]);

  const handleAdd = () => {
    let nextDate = new Date(lastDate)
    nextDate.setMonth(nextDate.getMonth() + Number(batchCount === 1 ? deal?.vestcliff : 1))

    const vestingPercent = ((100 - Number(deal?.vesttge)) / Number(deal?.vestgap)).toFixed(1)
    const newID = uuidv4()
    setSteps(prev => [
      ...prev,
      {
        id: newID,
        type: 'Batch' + (batchCount + newIDs.length),
        date: format(nextDate, 'yyyy-MM-dd'),
        percent: Math.min((100 - totalPercent), Number(vestingPercent)),
      },
    ]);
    setNewIDs(prev => [...prev, newID]);
  };

  const handleDelete = (id: string) => {
    setSteps(prev => prev.filter(step => step.id !== id));
    setNewIDs(prev => prev.filter(step => step !== id));
  };

  const handleChange = (id: string, field: keyof Step, value: string | number) => {
    setSteps(prev =>
      prev.map(step => step.id === id ? { ...step, [field]: value } : step)
    );
  };

  const handleSave = async () => {
    newIDs.map(async (id) => {
      const step = steps.find(s => s.id === id);
      if (step) {
        axios.post(`${getBackend()}/api/distributions/add`,
          {
            dealname: deal?.name,
            type: step.type,
            date: step.date,
            percent: step.percent
          })
          .then(res => {
            toast.success("Vesting schedule successfully added! 🎉");
          })
      }

    })
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} onConfirm={onConfirm} title="Buy">
      {/* Title */}
      <div className="text-xl font-semibold text-black">{`Vesting schedule for ${deal?.name}`}</div>
      <hr className="border-gray border-t-2 my-4" />

      {
        batchCount === 0 ?
          <div className='flex flex-col w-full pb-4 justify-center text-black'>
            <p className='flex w-full justify-center'>Set up a vesting schedule to ensure your investors are propery informed.</p>
            <p className='flex w-full justify-center'>Start by setting TGE date and percentage to be distributed.</p>
          </div>
          :
          <></>
      }

      {/* Schedule Block */}
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col sm:flex-row w-full h-full items-center justify-center gap-y-4 sm:gap-x-4">
            {/* Type */}
            <input
              value={step.type}
              disabled={true}
              className="input-text-bright"
            />

            {/* Date */}
            <input
              type="date"
              value={step.date}
              disabled={index < batchCount}
              onChange={(e) => handleChange(step.id, 'date', e.target.value)}
              className="input-text-bright"
            />

            {/* Percent */}
            <div className='flex w-full gap-x-2'>
              <input
                type="number"
                step={0.1}
                value={step.percent}
                disabled={index < batchCount}
                onChange={(e) => handleChange(step.id, 'percent', parseFloat(e.target.value))}
                className="input-text-bright"
              />
              <label className='text-black flex h-full items-center'>%</label>
            </div>

            {/* Tick mark & delete button*/}
            {
              index < batchCount ?
                <p>
                  ✔️
                </p> :
                index !== 0 && (<button onClick={() => handleDelete(step.id)} className="text-red-500 hover:text-red-700">
                  ❌
                </button>)
            }
          </div>
        ))}

        {!isFirstLoad && (
          <div className="flex w-full justify-end">
            <button
              onClick={handleAdd}
              className="text-blue-600 hover:underline text-md mt-2"
            >
              + Add batches
            </button>
          </div>
        )}
      </div>
      <hr />

      <hr className="border-gray border-t-2 my-4" />

      {/* Save Button */}
      <div className="flex w-full justify-end">
        <button
          onClick={handleSave}
          className="bg-green text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save vesting schedule
        </button>
      </div>

    </Modal>
  );
};

export default Schedule;