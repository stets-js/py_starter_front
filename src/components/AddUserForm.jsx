import React, { useState } from 'react';
import axios from 'axios';
import { success, error } from "@pnotify/core";
import { defaults} from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import apiUrl from '../apiConfig';


defaults.delay = 3000;

const AddUserForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleAddUser = () => {
    axios.post(`${apiUrl}/add_user`, { username, password })
      .then(response => {
        setMessage(response.data.message);
        if(response.data.error){
          error('User already exists');  
        } else{
        success('User added successfully');}
      })
      .catch(error => {
        setMessage(error.response.data.error);
        error({
          text: error.response.data.error,
        });
        throw error;
      });
  };

  return (
    <div className='form'>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default AddUserForm;
