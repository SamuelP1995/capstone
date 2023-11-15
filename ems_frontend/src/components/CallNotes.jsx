import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

import axios from "axios";

function CallNotesPage() {
    const [callData, setCallData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        address: '',
        city:'',
        state:'',
        zipcode:'',
        phone: '',
        reason: '',
    });

    useEffect(() => {
      fetchData();     
    }, []);

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/patients/2');
        const data = response.data; 
  
        setCallData(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    const handleGetCall = async () => {

      try {
        const response = await axios.get('http://localhost:8080/patients/2');
        const data = response.data;

        setCallData(data);

        console.log("Data: ", data);

        console.log('First Name: ', data.firstName);
        console.log('Last Name: ', data.lastName);
        console.log('Age: ', data.age);
        console.log('Address: ', data.address);
        console.log('City: ', data.city);
        console.log('State: ', data.state);
        console.log('Zipcode: ', data.zipcode);
        console.log('Phone: ', data.phone);
        console.log('Reason for Calling: ', data.reason);

      } catch (error) {
        console.log('Error: ', error);
      }
    }  

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
          label="Gender"
          variant="outlined"
          value={callData.gender}
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
          label="Phone"
          variant="outlined"
          value={callData.phone}
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
          onClick= {handleGetCall}
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
        <br></br>
        <br></br>

      </form>

      </Container>

    );

}

export default CallNotesPage;
