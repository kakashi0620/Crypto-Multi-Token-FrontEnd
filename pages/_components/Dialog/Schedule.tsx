import axios from 'axios'
import toast from "react-hot-toast";
import React, { useEffect, useState } from "react";
import { format, parseISO } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import Modal from "./Modal";
import { getBackend } from "../../utils";


type Step = {
  id: string;
  type: string;
  date: string;
  percent: number;
};

const Schedule = ({ dealname, isOpen, onConfirm, onClose }) => {

  const [newIDs, setNewIDs] = useState<string[]>([]);
  const [steps, setSteps] = useState<Step[]>([]);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [batchCount, setBatchCount] = useState(0);

  useEffect(() => {
    setNewIDs([])
    setBatchCount(0)
    
    if (isOpen) {
      axios.get(`${getBackend()}/api/distributions/getbydeal/${dealname}`)
        .then((res) => {
          console.log('getbydeal =>', res.data)
          setBatchCount(res.data.length)

          if (res.data.length > 0) {
            setSteps(res.data.map((d: any) => ({ ...d, id: uuidv4() })));
            res.data.map((d: any) => { console.log(d.date)})
            setIsFirstLoad(false);
          } else {
            const newID = uuidv4()
            console.log('new dateddddddddddddd', format(new Date(), 'yyyy-MM-dd'))
            setSteps([{
              id: newID,
              type: 'TGE',
              date: format(new Date(), 'yyyy-MM-dd'),
              percent: 11,
            }]);
            setNewIDs([newID]);
            setIsFirstLoad(true);
          }
        });
    }
  }, [isOpen]);

  const handleAdd = () => {
    const newID = uuidv4()
    setSteps(prev => [
      ...prev,
      {
        id: newID,
        type: 'Batch' + (batchCount + newIDs.length),
        date: format(new Date(), 'yyyy-MM-dd'),
        percent: 7.4,
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
          dealname: dealname,
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
      <div className="text-xl font-semibold text-black">{`Vesting schedule for ${dealname}`}</div>
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
              readOnly
              className="input-text-bright"
            />

            {/* Date */}
            <input
              type="date"
              value={step.date}
              onChange={(e) => handleChange(step.id, 'date', e.target.value)}
              className="input-text-bright"
            />

            {/* Percent */}
            <input
              type="number"
              step={0.1}
              value={step.percent}
              onChange={(e) => handleChange(step.id, 'percent', parseFloat(e.target.value))}
              className="input-text-bright"
            />

            {/* Tick mark */}
            {!isFirstLoad && index === 0 && (
              <p>
                ✔️
              </p>
            )}
            {/* Delete button for added batches */}
            {!isFirstLoad && index !== 0 && (
              <button onClick={() => handleDelete(step.id)} className="text-red-500 hover:text-red-700">
                ❌
              </button>
            )}
          </div>
        ))}

        {!isFirstLoad && (
          <div className="flex w-full justify-end">
            <button
              onClick={handleAdd}
              className="text-blue-600 hover:underline text-lg mt-2"
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