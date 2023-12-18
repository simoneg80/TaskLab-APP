import React, { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function UserProfile({ user, setUser }) {
  const [credentials, setCredentials] = useState({
    name: '',
    email: ''
  });

  function handleChange(e, field) {
    setCredentials({ ...credentials, [field]: e.target.value });
  }

  return (
    <div>
      <h2>Profile</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={user.name}
          onChange={(e) => handleChange(e, 'name')}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={user.email}
          onChange={(e) => handleChange(e, 'email')}
        />
      </div>
    </div>
  );
}