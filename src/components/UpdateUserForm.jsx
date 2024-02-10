import React, { useState } from 'react';
import axios from 'axios';
import { success, error } from "@pnotify/core";
import { defaults} from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import apiUrl from '../apiConfig';


defaults.delay = 3000;

const UpdateUserForm = () => {
  const [username, setUsername] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdateUser = () => {
    axios.put(`${apiUrl}/update_user/${username}`, { new_username: newUsername, new_password: newPassword })
      .then(response => {
        setMessage(response.data.message);
        if(response.data.error){
          error('User not found');  
        } else{
        success('User data updated successfully');}
      })
      .catch(error => {
        setMessage(error.response.data.error);
        error('Failed to update user data');
      });
  };

  return (
    <div className='form'>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="text" placeholder="New Username" value={newUsername} onChange={e => setNewUsername(e.target.value)} />
      <input type="password" placeholder="New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
      <button onClick={handleUpdateUser}>Update User</button>
    </div>
  );
};

export default UpdateUserForm;
