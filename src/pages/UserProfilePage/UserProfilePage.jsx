import React, { useState, useEffect } from 'react';
import * as usersService from '../../utilities/users-service';

export default function UserProfile({ user, setUser }) {
  const [credentials, setCredentials] = useState({
    name: '',
    email: ''
  });

  // Load user data when component mounts
  useEffect(() => {
    setCredentials(user);
  }, [user]);

  function handleChange(e, field) {
    setCredentials({ ...credentials, [field]: e.target.value });
  }

  async function handleUpdate() {
    try {
      const updatedUser = await usersService.update(credentials);
      setUser(updatedUser);
    } catch (error) {
      console.error('Failed to update user', error);
    }
  }

  async function handleDelete() {
    try {
      await usersService.delete();
      setUser(null); // Clear user data after deletion
    } catch (error) {
      console.error('Failed to delete user', error);
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
      <button onClick={handleUpdate}>Update Profile</button>
      <button onClick={handleDelete}>Delete Profile</button>
    </div>
  );
}