import React, { useState } from 'react';
import * as usersService from '../../utilities/users-service';

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
    <div className="profilepage">
      <h2 className='profiletitle'>{credentials.name}'s Account Information</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={credentials.name}
          onChange={(e) => handleChange(e, 'name')}
        />
      </div>
      <div>
        <label>Email:</label>
        <h3>{credentials.email}</h3>
      </div>
      <button onClick={handleUpdate}>Save Changes</button>
    </div>
  );
}