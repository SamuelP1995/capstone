import { Logout } from "@mui/icons-material";
import React, { useState} from "react";


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Implement login logic here
      console.log('Email:', email);
      console.log('Password:', password);
      // Implement login logic here
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
  