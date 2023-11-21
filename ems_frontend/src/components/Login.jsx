
import React, { useState} from "react";
import { TextField, Button, Box, Card, CardActions, CardContent, CardMedia } from "@mui/material";
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

    const card = (
      <Card sx={{ maxWidth: 600 }}>
        <CardMedia
        sx={{ height: 150, width: 300 }}
        image="https://dkedecals.com/cdn/shop/products/Green_Star_of_life_Helmet_Decal_grande.jpg?v=1549135315"
        title="Ambulance Logo"
        />
        <CardContent>
          <h2>Login</h2>
          <TextField variant="outlined" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br></br>
          <br></br>
          <TextField variant="outlined" label= "Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br></br>
        </CardContent>
        <CardActions>
          <Button variant="contained" type="button" color="success" size="large" m="50px" onClick={handleLogin}>Login</Button>
          <Button variant="contained" type="button" color="success" size="large" p="50px" onClick={handleLogin}>New User</Button>
        </CardActions>
      </Card>
    );


    return (
      <Box sx={{ minWidth: 275, variant: 'outlined', color: 'success' }} >
        <Card variant='outlined' color='success' >{ card }</Card>
      </Box>
    );
}
  



{/* <form>
          <TextField variant="outlined" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br></br>
          <br></br>
          <TextField variant="outlined" label= "Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br></br>
          <br></br>
          <Button variant="contained" type="button" color="success" size="large" m="20px" onClick={handleLogin}>Login</Button>
          <Button variant="contained" type="button" color="success" size="large" p="20px" onClick={handleLogin}>New User</Button>

        </form> */}