import axios from 'axios'
import React from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import { IDealGridRowData } from '../../../../interface/DealGridRowData';
import { getBackend } from '../../../utils';


const DealActionCell: React.FC<ICellRendererParams<IDealGridRowData>> = ({ data }) => {
  if (!data) return null;

  const handleExport = async () => {
    // 1. Prepare custom data to export
    const rowForExport: any[] = []
    
    const dealname = data.name;
    const investors = await axios.get(`${getBackend()}/api/invests/list/${dealname}`)
    const promises = investors.data.map(async (invest: any, index: any) => {
      const username = invest.investor;
      
      const user = await axios.post(`${getBackend()}/api/users/getuserbyname/`, {userName: username});
      const userid = user.data.userId;
      console.log('tokenprice', userid)
      const deal = await axios.post(`${getBackend()}/api/deals/getdeal/`, {name: dealname});
      const tokenprice = deal.data.tokenprice;
      console.log('tokenprice', tokenprice)

      rowForExport.push({
        'S/N': index + 1,
        'User name': username,
        'User ID': userid,
        'Invest amount': invest.amount,
        'Token price': tokenprice,
        'Received Token': invest.amount / tokenprice,
        'Receiving Wallet': user.data.loginWallet,
        'Chain': 'BSC'
      })
    })

    await Promise.all(promises);

    // 2. Convert to Excel
    const { utils, write } = await import('xlsx');
    const worksheet = utils.json_to_sheet(rowForExport);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'Deal');

    const excelBuffer = write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });

    // 3. Trigger File Save Dialog
    if ('showSaveFilePicker' in window) {
      try {
        const handle = await (window as any).showSaveFilePicker({
          suggestedName: `${data.name}-summary.xlsx`,
          types: [
            {
              description: 'Excel Files',
              accept: {
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
              },
            },
          ],
        });

        console.log('1111');
        const writable = await handle.createWritable();
        await writable.write(blob);
        await writable.close();
      } catch (err) {
        console.log('User cancelled or error:', err);
      }
    }
  };

  return (
    <div className="flex gap-2 items-center h-full">
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 text-xs rounded">
        Edit
      </button>
      <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 text-xs rounded">
        Detail
      </button>
      <button className="bg-black hover:bg-black text-white px-2 py-1 text-xs rounded" onClick={handleExport}>
        Export
      </button>
    </div>
  );
};

export default DealActionCell;