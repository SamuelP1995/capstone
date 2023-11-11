import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

function CallNotesPage() {
    const [callData, setCallData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        reason: '',
        age: '',
        gender: '',
        city:'',
        state:'',
        zipcode:'',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
            // Fetch data from your database or API
                const response = await fetch('your_api_endpoint_here');
                const data = await response.json();

                setCallData(data);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom>
                Call Notes
            </Typography>
      <form>
        <TextField
          label="First Name"
          variant="outlined"
          value={callData.firstName}
          disabled
        />
        <TextField
          label="Last Name"
          variant="outlined"
          value={callData.lastName}
          disabled
        />
        <TextField
          label="Age"
          variant="outlined"
          value={callData.age}
          disabled
        />
        <TextField
          label="Address"
          variant="outlined"
          value={callData.address}
          disabled
        />
        <TextField
          label="City"
          variant="outlined"
          value={callData.city}
          disabled
        />
        <TextField
          label="State"
          variant="outlined"
          value={callData.state}
          disabled
        />
        <TextField
          label="Zipcode"
          variant="outlined"
          value={callData.zipcode}
          disabled
        />
        <TextField
          label="Gender"
          variant="outlined"
          value={callData.gender}
          disabled
        />
        <TextField
          label="Reason for Calling"
          variant="outlined"
          fullWidth
          value={callData.reason}
          disabled
        />
        <Button
          type="Get Call"
          variant="contained"
          color="success"
          onClick={(e) => e.preventDefault()}
        >
          Get Call
        </Button>
        <Button
          type="directions"
          variant="contained"
          color="success"
          onClick={(e) => e.preventDefault()}
        >
          Directions
        </Button>
      </form>
    </Container>
  );
}

export default CallNotesPage;
