import React, { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import './UserProfile.css';

export default function UserProfile({ user, setUser }) {
  const [credentials, setCredentials] = useState({
    name: user.name,
    email: user.email
  });

  function handleChange(e, field) {
    setCredentials({ ...credentials, [field]: e.target.value });
  }

  async function handleUpdate() {
    try {
      const updatedUser = await usersService.updateProfile(credentials);
      setUser(updatedUser);
    } catch (error) {
      console.error('Failed to update user', error);
    }
  }

  return (
  <>
    <h2 className='profiletitle'>{credentials.name}'s Profile Information</h2>
      <div className="profilepage">
      <div>
        <label>Name: {credentials.name}</label>
        {/* <input
          type="text"
          value={credentials.name}
          onChange={(e) => handleChange(e, 'name')}
        /> */}
      </div>
      <div>
        <label>Email: {credentials.email}</label>
        {/* <p>{credentials.email}</p> */}
      </div>
      {/* <button className="saveuserchange" onClick={handleUpdate}>Save Changes</button> */}
    </div>
  </>
  );
}