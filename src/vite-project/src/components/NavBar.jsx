import React from 'react';
import { AppBar, Toolbar, Typography, Button, Icon } from '@mui/material';
import { Link } from 'react-router-dom'; 



function Navbar() {
  return (
    <AppBar position="static" color ="success">
      <Toolbar >
        <Typography variant="h6" component="div"  sx={{ flexGrow: 1 }}>
          EMS Ambulance Company
        </Typography>
        <Button color="inherit" >
        {/* component={Link} to="/logout"> */}
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
