
import './App.css'

import React, { useState } from 'react';


import Login from './components/Login';
import Navbar from './components/NavBar';
import CallNotesPage from './components/CallNotes';
import SendCallNotes from './components/SendCallNotes';

function App() {

  const [token, setToken] = useState(true);
  
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <>
      <Navbar />
      <CallNotesPage />
      <SendCallNotes />
    </>
  )
}

export default App










