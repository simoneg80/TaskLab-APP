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
    <div>
      <h2>Profile</h2>
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
        <input
          type="email"
          value={credentials.email}
          onChange={(e) => handleChange(e, 'email')}
        />
      </div>
      <button onClick={handleUpdate}>Save Changes</button>
    </div>
  );
}