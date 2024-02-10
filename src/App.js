import React, { useState } from 'react';
import AddUserForm from './components/AddUserForm';
import GetUserForm from './components/GetUserForm';
import UpdateUserForm from './components/UpdateUserForm';
import DeleteUserForm from './components/DeleteUserForm';
import AllUsers from './components/AllUsers';


const App = () => {
  const [activeTab, setActiveTab] = useState('add');

  return (
    <div>
      <nav>
        <ul className='navigation__list'>
          <li className={activeTab === 'add' ? 'active' : ''} onClick={() => setActiveTab('add')}>
            Add User
          </li>
          <li className={activeTab === 'get' ? 'active' : ''} onClick={() => setActiveTab('get')}>
            Get User
          </li>
          <li className={activeTab === 'update' ? 'active' : ''} onClick={() => setActiveTab('update')}>
            Update User
          </li>
          <li className={activeTab === 'delete' ? 'active' : ''} onClick={() => setActiveTab('delete')}>
            Delete User
          </li>
          <li className={activeTab === 'all' ? 'active' : ''} onClick={() => setActiveTab('all')}>
            All Users
          </li>
        </ul>
      </nav>

      <div>
        {activeTab === 'add' && <AddUserForm />}
        {activeTab === 'get' && <GetUserForm />}
        {activeTab === 'update' && <UpdateUserForm />}
        {activeTab === 'delete' && <DeleteUserForm />}
        {activeTab === 'all' && <AllUsers />}
      </div>
    </div>
  );
};

export default App;
