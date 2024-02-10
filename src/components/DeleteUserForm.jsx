import React, { useState } from 'react';
import axios from 'axios';
import { success, error } from "@pnotify/core";
import { defaults} from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import apiUrl from '../apiConfig';


defaults.delay = 3000;

const DeleteUserForm = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleDeleteUser = () => {
    axios.delete(`${apiUrl}/delete_user/${username}`)
      .then(response => {
        setMessage(response.data.message);
        if(response.data.error){
          error('User not found');  
        } else{
        success('User deleted successfully');}
      })
      .catch(error => {
        setMessage(error.response.data.error);
        error('Failed to delete user');
      });
  };

  return (
    <div className='form'>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <button onClick={handleDeleteUser}>Delete User</button>
    </div>
  );
};

export default DeleteUserForm;
