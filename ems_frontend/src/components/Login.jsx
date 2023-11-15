
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
      // on backend, use given email to lookup User (inside login controller on backend)
      // if User with email exists, then compare given password to password for User in DB
      // if passwords match, return true,

      // otherwise, return false

      // on frontend, call setToken() with result from above
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
        </form>
      </div>
    );
}
  