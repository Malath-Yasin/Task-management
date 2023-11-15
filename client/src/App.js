import logo from './logo.svg';
import './App.css';
import React from 'react';
import TaskList from './component/TaskList';
import TaskForm from './component/TaskForm';
import Header from './component/Header';
import {BrowserRouter, Route , Routes } from 'react-router-dom';
import Home from './component/Home';

import SignUpForm from './component/SignupForm';
import LoginForm from './component/LoginForm';
import SignupForm from './component/SignupForm';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignupForm/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/addTask' element={<TaskForm/>}/>
          <Route path='/Task' element={<TaskList />}/>

    </Routes>

    </BrowserRouter> 

  </div>
  );
}

export default App;
