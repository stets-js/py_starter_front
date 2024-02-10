import React, { useState } from 'react';
import axios from 'axios';
import { success, error } from "@pnotify/core";
import { defaults} from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import apiUrl from '../apiConfig';


defaults.delay = 3000;

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const handleGetUsers = () => {
    axios.get(`${apiUrl}/get_all_users`)
      .then(response => {
        setUsers(response.data);
        setError(null);
        success("Fetched all users")
      })
      .catch(error => {
        setError(error.response.data.error);
        setUsers([]);
      });
  };

  return (
    <div className='form'>
      <button onClick={handleGetUsers}>Get Users</button>
      {error && <p>{error}</p>}
      <ul className='users_list'>
        {users.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllUsers;
