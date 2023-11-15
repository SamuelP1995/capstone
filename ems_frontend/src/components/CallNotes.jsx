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

    const [sendData, setSendData] = useState({
      callNotes: '',
      transport: '',
      date: '',
      time: '',
    });

    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('http://localhost:8080/patients/2');
              const data = await response.json();

              setCallData(data);
          } catch (error) {
              console.log('Error fetching data:', error);
          }
      };
      fetchData();
    }, []);

    const handleGetCall = async () => {

      try {
        const response = await axios.get('http://localhost:8080/patients/2', {
          firstName, lastName, age, address, city, state, zipcode, phone, reason
        });
        const data = await response.json();

        setCallData(data);

        console.log("Respnse.data: ", response);

        console.log('First Name: ', firstName);
        console.log('Last Name: ', lastName);
        console.log('Age: ', age);
        console.log('Address: ', address);
        console.log('City: ', city);
        console.log('State: ', state);
        console.log('Zipcode: ', zipcode);
        console.log('Phone: ', phone);
        console.log('Reason for Calling: ', reason);

      } catch (error) {
        console.log('Error: ', error);
      }
    }

    const handleFinishCall = async () => {

      try {
        const response = await axios.push('http://localhost:8080/histories/2', {

        });

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

      <form>
        <br></br>
        <Typography variant="h4" gutterBottom>
          Call Notes
        </Typography>

        <TextField
          label="Call Notes"
          variant="outlined"
          fullWidth
          value={sendData.callNotes}
        />
        <TextField
          label="Transport"
          variant="outlined"
          value={sendData.transport}
        />
        <TextField
          label="Date"
          variant="outlined"
          value={sendData.date}
        />
        <TextField
          label="Time"
          variant="outlined"
          value={sendData.time}
        />
        <br></br>
        <Button
          type="directions"
          variant="contained"
          color="success"
          onClick={(e) => e.preventDefault()}
        >
          Clear From Call
        </Button>

      </form>


    </Container>


    

  );
}

export default CallNotesPage;
