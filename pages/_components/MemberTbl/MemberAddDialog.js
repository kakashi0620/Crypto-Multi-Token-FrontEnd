import * as React from 'react';
import axios from 'axios';

import { PROXY_URL } from '../../docs/data';
import Toast from '../Toast';
import Modal from '../basic/Modal';
import ModalItem from '../basic/ModalItem';

const default_formdata = {
  sn: null,
  status: '',
  userid: '',
  username: '',
  email: '',
  telegram: '',
  twitter: '',
  discord: '',
  joinedon: '',
  totaldeals: '',
  totalinvestment: '',
  totalreferral: '',
}

export default function MemberAddDialog(props) {
  const isadmin = JSON.parse(localStorage.getItem("user"))?.role === "admin";

  const { info, handleClose, users } = props;

  const [formdata, setFormData] = React.useState(default_formdata);
  //const navigate = useNavigate();
  React.useEffect(() => {
    if (info.info !== null) {
      if (info.info.userid) {
        setFormData({ ...info.info, userid: info.info.userid._id, username: info.info.userid.username });
      } else {
        setFormData(info.info);
      }
    } else {
      setFormData(default_formdata);
    }

  }, [info]);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("formdata---------------------------------", formdata);
    if (info.action === 'add') {
      axios.post(PROXY_URL + '/api/Member/', formdata,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token_info")}`,
          },
        }
      )
        .then(res => {
          if (res.data.success === true) {
            Toast.success(res.data.message);
            handleClose(null);
          }
        })
        .catch(err => console.log(err));
    } else {
      axios.post(`${PROXY_URL}/api/Member/update`, formdata,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token_info")}`,
          },
        }
      )
        .then(res => {
          if (res.data.success === true) {
            Toast.success(res.data.message);
            handleClose(res.data.retdata);
          }
        })
        .catch(err => console.log(err));
    }
  }

  const handleChangeStartDate = (value) => {
    console.log("handleChangeStartDate---------------------", value);
    setFormData({ ...formdata, startdate: value });
  };

  const handleChangeEndDate = (value) => {
    console.log("handleChangeEndDate---------------------", value);
    setFormData({ ...formdata, enddate: value });
  };

  const handleChange = (event) => {
    event.preventDefault();
    setFormData({ ...formdata, [event.target.id]: event.target.value });
  };

  const handleChangerb = (event) => {
    event.preventDefault();
    setFormData({ ...formdata, [event.target.id]: event.target.value });
  };

  const handleChangeUser = (event) => {
    event.preventDefault();
    setFormData({ ...formdata, userid: null });
    for (let i = 0; i < users.length; i++) {
      if (users[i]._id === event.target.value) {
        setFormData({ ...formdata, userid: users[i]._id });
      }
    }
  }

  function canBeSubmitted() {
    return formdata.user !== '' && formdata.destination !== '';
  }
  return (
    <Modal isOpen={info.open} onClose={handleClose} title={info.action === 'add' ? "Add Memberation" : "Edit Memberation"} >

      <form method="POST" onSubmit={handleSubmit} class="w-full flex flex-wrap justify-start">
        <ModalItem>
          <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">UserName</label>
          <div>
            <input type="text" disabled={!isadmin} onChange={handleChange} value={formdata.userId?.name} id="username" className="flex w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-none placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder='UserName' />
          </div>
        </ModalItem>

        <ModalItem>
          <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">StartDate</label>
          <div>
          </div>
        </ModalItem>

        <ModalItem>
          <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">EndDate</label>
          <div>
          </div>
        </ModalItem>

        <ModalItem>
          <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">Destination</label>
          <div>
            <input type="text" onChange={handleChange} value={formdata.destination} id="destination" className="flex w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-none placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder='Destination' />
          </div>
        </ModalItem>

        <div className="flex w-full justify-end px-2 mt-2">
          <button type='submit' autoFocus onClick={handleSubmit} className='text-blue-600 text-sm mt-2 border-2 border-blue-500  hover:bg-blue-300 md:mx-2 rounded-lg py-2 px-4 block'>Save</button>
        </div>

      </form>
    </Modal>
  )
}