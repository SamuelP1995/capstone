import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import axios from "axios";


function CallNotesPage() {
    const [callData, setCallData] = useState({
        emsId: '',
        id: '',
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


    const fetchRandomPatientId = async () => {
      try {
        const response = await axios.get('http://localhost:8081/patients');
        const patients = response.data.data;
        console.log('patients response.data: ', patients);
        const randomNum = Math.floor(Math.random() * patients.length);
        const randomPatientId = patients[randomNum].id;

        return randomPatientId;
      } catch (error) {
        console.log('Error fetching patient ids: ', error);
      } 
    }

    const fetchData = async () => {
      const randomPatientId = await fetchRandomPatientId();
      console.log('Random Patient Id: ', randomPatientId);
      if (randomPatientId) {
        try {
          const response = await axios.get(`http://localhost:8081/patients/${randomPatientId}`);
          console.log("Response.data: ", response.data);
          const data = response.data; 
  
          setCallData(data);
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      }
    };


    const handleGetCall = async (e) => {
      e.preventDefault();

      try {
        await fetchData();
        // const response = await axios.get('http://localhost:8081/patients/2');
        // const data = response.data;
        // console.log('Entire data: ', data);
        // const { emsId, id, firstName, lastName, age, gender,  address, city, state, zipcode, phone, reason } = data;

        // console.log('Ems Id: ', data.emsId);
        // console.log('Patient Id: ', data.id);
        // console.log('First Name: ', data.firstName);
        // console.log('Last Name: ', data.lastName);
        // console.log('Age: ', data.age);
        // console.log('Address: ', data.address);
        // console.log('City: ', data.city);
        // console.log('State: ', data.state);
        // console.log('Zipcode: ', data.zipcode);
        // console.log('Phone: ', data.phone);
        // console.log('Reason for Calling: ', data.reason);


        // console.log('Extracted data:', { emsId, id, firstName, lastName, age, gender, address, city, state, zipcode, phone, reason });

        // setCallData(data);

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
          style={{ fontWeight: 'bold' }}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          value={callData.lastName}
          style={{ fontWeight: 'bold' }}
        />
        <TextField
          label="Age"
          variant="outlined"
          value={callData.age}
          style={{ fontWeight: 'bold' }}
        />
        <br></br>
        <TextField
          label="Gender"
          variant="outlined"
          value={callData.gender}
          style={{ fontWeight: 'bold' }}
        />
        <TextField
          label="Address"
          variant="outlined"
          value={callData.address}
          style={{ fontWeight: 'bold' }}
        />
        <TextField
          label="City"
          variant="outlined"
          value={callData.city}
          style={{ fontWeight: 'bold' }}
        />
        <br></br>
        <TextField
          label="State"
          variant="outlined"
          value={callData.state}
          style={{ fontWeight: 'bold' }}
        />
        <TextField
          label="Zipcode"
          variant="outlined"
          value={callData.zipcode}
          style={{ fontWeight: 'bold' }}
        />
        <TextField
          label="Phone"
          variant="outlined"
          value={callData.phone}
          style={{ fontWeight: 'bold' }}
        />
        <TextField
          label="Reason for Calling"
          variant="outlined"
          fullWidth
          value={callData.reason}
          style={{ fontWeight: 'bold' }}
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
