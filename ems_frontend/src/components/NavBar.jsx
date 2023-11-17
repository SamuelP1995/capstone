import React from 'react';
import { AppBar, Toolbar, Typography, Button, Icon } from '@mui/material';
import { Link } from 'react-router-dom'; 
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';


function Navbar() {

  const handleLogoutPage = async() => {
    try {
      const response = await axios.get('http://localhost:8080/logout', {

      });

    } catch (error) {
      console.log('Login failed:', error);
    }
  }


  return (
    <AppBar position="static" color ="success">
      <Toolbar >
          <LocalHospitalIcon fontSize='large'/>
        <Typography variant="h6" component="div"  sx={{ flexGrow: 1 }}>
          EMS Ambulance Company
        </Typography>
        <Button color="inherit" onClick={handleLogoutPage} > Logout </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
