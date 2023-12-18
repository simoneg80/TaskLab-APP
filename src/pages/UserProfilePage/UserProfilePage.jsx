import React, { useState } from 'react';

export default function UserProfile({ user, setUser }) {
  const [credentials, setCredentials] = useState({
    name: user.name,
    email: user.email
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
    </div>
  );
}