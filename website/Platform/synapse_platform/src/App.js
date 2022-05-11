import React from 'react';

import { Counter } from './features/counter/Counter';
import './App.css';

import LoginPage from './pages/login';
import HomePage from './pages/home';

import { useSelector, useDispatch } from 'react-redux';
import {
  userData,
  setUserId
} from './features/counter/counterSlice';


function App() {

  const count = useSelector(userData); // Accediamo al nick dell'utente

  const dispatch = useDispatch();   
  
  if (count == '') {
    return <LoginPage />
  }
  else return <HomePage/>


}

export default App;
