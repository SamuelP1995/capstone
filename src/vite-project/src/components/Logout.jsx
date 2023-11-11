import React from 'react';
import { Button, Container, Typography } from '@mui/material';




export default function LogoutForm() {
  const handleLogout = () => {

    // Implement your logout logic here
    // Redirect the user to the login page or another page.
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Logout Page
      </Typography>
      <Typography paragraph>
        Are you sure you want to log out?
      </Typography>
      <Button variant="contained" color="primary" onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
}

