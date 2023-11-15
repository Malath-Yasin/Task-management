// SignupForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from '../redux/tasks/authSlice';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const navigate=useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData)
  };

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(signupUser(formData));
    navigate('/login');
  };

  return (
    <form onSubmit={handleSignup}>
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
