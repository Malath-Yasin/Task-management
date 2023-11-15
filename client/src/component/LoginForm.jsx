// LoginForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { loginUser } from '../redux/tasks/authSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate=useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
    console.log(formData);
    navigate('/');
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
