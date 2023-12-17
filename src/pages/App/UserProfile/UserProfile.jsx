import React, { useState } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  const [tasks, setTasks] = useState([
    { id: '', title: '', completed: '' }
  ]);

  const handleEditUser = (field, value) => {
    setUser({
      ...user,
      [field]: value,
    });
  };

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={user.name}
          onChange={(e) => handleEditUser('name', e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={user.email}
          onChange={(e) => handleEditUser('email', e.target.value)}
        />
      </div>
      <h3>Tasks</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} readOnly />
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
