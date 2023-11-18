
import './App.css'

import React, { useState } from 'react';

import Login from './components/Login';
import Navbar from './components/NavBar';
import CallNotesPage from './components/CallNotes';


function App() {
  const [token, setToken] = useState();
  
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <>
      <Navbar />
      <CallNotesPage />
    </>
  )
}

export default App










