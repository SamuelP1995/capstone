
import React, { useState} from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";

export default function Login({setToken}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async() => {
      console.log('Email:', email);
      console.log('Password:', password);

      try {
        const response = await axios.post('http://localhost:8081/login', {
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
        const response = await axios.post('http://localhost:8081/create', {
          
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
          <TextField variant="outlined" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br></br>
          <br></br>
          <TextField variant="outlined" label= "Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {/* <div>
            <label>Email:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div> */}
          {/* <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div> */}
          <br></br>
          <br></br>
          <Button variant="contained" type="button" onClick={handleLogin}>Login</Button>
          <Button variant="contained" type="button" onClick={handleLogin}>New User</Button>

        </form>
      </div>
    );
}
  