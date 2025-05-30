import * as React from 'react';

import axios from 'axios';
import { PROXY_URL } from "../../../docs/data";
import AllDealsTableGrid from './AllDealsTableGrid';
import AllDealsAddDialog from './AllDealsAddDialog';
import { useUser } from '../../../hooks/userContext';

const default_dialogInfo = {
  open: false,
  action: 'add',
  info: null,
};

export default function AllDealsListCard(props) {

  const [dlginfo, setDlgData] = React.useState(default_dialogInfo);
  const [data, setData] = React.useState([]);
  const [users] = React.useState([]);
  
  const {user} = useUser();
  const isadmin = user?.isAdmin;

  React.useEffect(() => {
    axios.post(`${PROXY_URL}/api/vac/getAllDealss`, {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token_info")}`,
        },
      })
      .then(res => {
        console.log("res.data.vacs", res.data);
        setData(res.data.vac);
      })
      .catch(err => console.log(err));

  }, [isadmin, dlginfo])

  const handleClickOpen = (isadmin) => {
    setDlgData({ info: null, open: true, action: 'add'});//, admin: isadmin == true ? true : false });
  };

  // const handleClose = (info) => {
  //   setDlgData({ info: null, open: false });
  // };

  const handleOpenEditDialog = (info) => {
    setDlgData({ open: true, info: info, action: 'edit' });
  };

  // const updateAllDealsTable = () => {
  //   setDlgData({ info: null, open: false, remove: true });
  // };

  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col break-words w-full bg-white shadow-2xl rounded-lg overflow-hidden'>
        <div className='rounded-b px-6 py-4'>
          <AllDealsTableGrid data={data} handleClickOpen={handleClickOpen} isadmin={isadmin} handleOpenEditDialog={(info) => handleOpenEditDialog(info)} />
          {/* <AllDealsAddDialog info={dlginfo} handleClose={(info) => handleClose(info)} /> */}
          <AllDealsAddDialog info={dlginfo} />
        </div>
      </div>
    </div>
  );
}