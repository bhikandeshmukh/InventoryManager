import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../data/users.json';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setUser(user);
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
      {error && <p className="text-danger mt-2">{error}</p>}
    </div>
  );
};

export default Login;