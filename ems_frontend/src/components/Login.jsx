
import React, { useState} from "react";

import axios from "axios";

export default function Login({setToken}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async() => {
      console.log('Email:', email);
      console.log('Password:', password);

      try {
        const response = await axios.post('http://localhost:8080/login', {
          email,
          password,
        });
        console.log(response.data);

        setToken(response.data.success);
      } catch (error) {
        console.log('Login failed:', error);
      }
    }

    const handleNewUser = async() => {

      try {
        const response = await axios.post('http://localhost:8080/create', {
          
        });
        console.log(response.data);

        setToken(response.data.success);
      } catch (error) {
        console.log('Login failed:', error);
      }
    }

  
    return (
      <div>
        <h2>Login</h2>
        <form>
          <div>
            <label>Email:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="button" onClick={handleLogin}>Login</button>
          <br></br>
          <br></br>
          <button type="button" onClick={handleLogin}>New User</button>

        </form>
      </div>
    );
}
  