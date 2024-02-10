import React, { useState } from 'react';
import axios from 'axios';
import { success, error } from "@pnotify/core";
import { defaults} from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import apiUrl from '../apiConfig';


defaults.delay = 3000;

const GetUserForm = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [message, setMessage] = useState('');

  const handleGetUser = () => {
    axios.get(`${apiUrl}/get_user/${username}`)
      .then(response => {
        setUserData(response.data);
        setMessage('');
        if(response.data.error){
          error('User not found');  
        } else{
        success('User data retrieved successfully');}
      })
      .catch(error => {
        setUserData(null);
        setMessage(error.response.data.error);
        error('Failed to retrieve user data');
      });
  };

  return (
    <div className='form'>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <button onClick={handleGetUser}>Get User</button>
      {userData && (
        <div>
          <p className='response__text'>ID: {userData.id}</p>
          <p className='response__text'>Username: {userData.username}</p>
          <p className='response__text'>Password: {userData.password}</p>
        </div>
      )}
      {message && <p className='response__text'>{message}</p>}
    </div>
  );
};

export default GetUserForm;
