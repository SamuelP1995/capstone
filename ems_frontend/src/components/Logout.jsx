import React from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';



// look at how setToken was passed to the login component
// pass setTokent to this form
// call setToken(false) when handleLogout is called

export default function LogoutForm() {
  const handleLogout = () => {

    // Implement your logout logic here
    // Redirect the user to the login page or another page
    setToken(!token);
  };

  return (
    <Card>
      <CardHeader title='Logout' />
      <CardMedia />
      <CardContent>
        <Typography title='Logout as User' />
       </CardContent>
      <CardActions>
      <Button variant="contained" color="primary" onClick={handleLogout}> Logout </Button>
      </CardActions>
    </Card>
  );
}







{/* <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Logout Page
      </Typography>
      <Typography paragraph>
        Are you sure you want to log out?
      </Typography>
      <Button variant="contained" color="primary" onClick={handleLogout}>
        Logout
      </Button>
    </Container> */}

