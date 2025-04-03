import * as React from 'react';

import axios from 'axios';
import { PROXY_URL } from "../../docs/data";
import MemberTableGrid from './MemberTableGrid';
import MemberAddDialog from './MemberAddDialog';

const default_dialogInfo = {
  open: false,
  action: 'add',
  info: null,
};

export default function MemberListCard(props) {

  const [dlginfo, setDlgData] = React.useState(default_dialogInfo);
  const [data, setData] = React.useState([]);
  const [users] = React.useState([]);
  const isadmin = JSON.parse(localStorage.getItem("user"))?.role === "admin";
  // const id = JSON.parse(localStorage.getItem("user"))?._id;

  React.useEffect(() => {
    axios.post(`${PROXY_URL}/api/vac/getMembers`, {},
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
    setDlgData({ info: null, open: true, action: 'add', admin: isadmin == true ? true : false });
  };

  const handleClose = (info) => {
    setDlgData({ info: null, open: false });
  };

  const handleOpenEditDialog = (info) => {
    setDlgData({ open: true, info: info, action: 'edit' });
  };

  const updateMemberTable = () => {
    setDlgData({ info: null, open: false, remove: true });
  };

  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col break-words w-full bg-white shadow-2xl rounded-lg overflow-hidden'>
        <div className='rounded-b px-6 py-4'>
          <MemberTableGrid data={data} handleClickOpen={handleClickOpen} isadmin={isadmin} handleOpenEditDialog={(info) => handleOpenEditDialog(info)} />
          <MemberAddDialog info={dlginfo} handleClose={(info) => handleClose(info)} />
        </div>
      </div>
    </div>
  );
}