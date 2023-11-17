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

    const fetchHistoryData = async (patientId) => {
      try{
        const response = await axios.get(`http://localhost:8081/histories/${patientId}`)
        const history = response.data.data;
        console.log('history response.data: ', history);
        
      } catch(error) {
        console.log('Error fetching Patient History: ', error);
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
          console.log('Error fetching data: ', error);
        }
      }
    };


    const handleGetCall = async (e) => {
      e.preventDefault();

      try {
        await fetchData();
      } catch (error) {
        console.log('Error: ', error);
      }
    }  

    const handleGetPatientHistory = async (e) => {
      e.preventDefault();

      try {
        const randomPatientId = await fetchRandomPatientId();
        console.log('Random patient Id: ', randomPatientId);
        if (randomPatientId) {
          await fetchHistoryData(randomPatientId);
        }
      } catch (error) {
        console.log('Error fetching Patient History Data: ', error);
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
        <Button
          type="button"
          variant="contained"
          color="success"
          onClick={handleGetPatientHistory}
        >
          Get Patient History
        </Button>
        <br></br>
        <br></br>

      </form>

      </Container>

    );

}

export default CallNotesPage;
