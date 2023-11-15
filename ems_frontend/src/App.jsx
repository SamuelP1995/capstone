
import './App.css'

import React, { useState } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';

import CallNotesPage from './components/CallNotes';
// import MapContainer from './components/mapContainer'
// import DirectionsPage from './components/Directions'
import Login from './components/Login';
import Navbar from './components/NavBar';
import SendCallNotes from './components/SendCallNotes';

function App() {

  const [token, setToken] = useState(true);
  
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/main">
          <CallNotesPage />
        </Route>
        <Route path="/preferences">
          <Preferences />
        </Route>
      </Routes>
    </BrowserRouter> */}
      <Navbar />
      <CallNotesPage />
      <SendCallNotes />
      {/* <MapContainer /> */}
      {/* <DirectionsPage />  */}
    </>
  )
}

export default App










