import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, CardContent, Card, CardActions } from '@mui/material';
import axios from "axios";
import PatientHistory from './PatientHistory';
import SendCallNotes from './SendCallNotes';

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

    const [patientId, setPatientId] = useState('');
    const [patientHistories, setPatientHistories] = useState([]);
    const [showHistory, setShowHistory] = useState(false);

    const toggleShowHistory = () => setShowHistory(!showHistory);


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
        const response = await axios.get(`http://localhost:8081/histories`);
        const histories = response.data.data;
        const patientHistories = histories.filter((history) => history.patientId === patientId);
        console.log('histories response.data: ', patientHistories);
        
        setPatientHistories(patientHistories);
      } catch(error) {
        console.log('Error fetching Patient History: ', error);
      }
    }


    const fetchData = async () => {
      const randomPatientId = (await fetchRandomPatientId());
      console.log('Random Patient Id: ', randomPatientId);
      if (randomPatientId) {
        try {
          const response = await axios.get(`http://localhost:8081/patients/${randomPatientId}`);
          console.log("Response.data: ", response.data);
          const data = response.data; 
  
          setCallData(data);
          setPatientId(randomPatientId);
          await fetchHistoryData(randomPatientId);
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
        console.log('Patient History of: ', {callData});
        if (callData.id) {
          // await fetchHistoryData(callData.id);

          toggleShowHistory();
        } else {
          console.log('patient id not found!');
        }
      } catch (error) {
        console.log('Error fetching Patient History Data: ', error);
      }
    }

    const card = (
      <Card sx={{ maxWidth: 1000 }}>
        <Typography variant="h4" gutterBottom> Call Notes </Typography>
        <CardContent>
          <TextField label="First Name" variant="outlined" value={callData.firstName} style={{ fontWeight: 'bold' }} />
          <TextField label="Last Name" variant="outlined" value={callData.lastName} style={{ fontWeight: 'bold' }} />
          <TextField label="Age" variant="outlined" value={callData.age} style={{ fontWeight: 'bold' }} />
          <br></br>
          <TextField label="Gender" variant="outlined" value={callData.gender} style={{ fontWeight: 'bold' }} />
          <TextField label="Address" variant="outlined" value={callData.address} style={{ fontWeight: 'bold' }} />
          <TextField label="City" variant="outlined" value={callData.city} style={{ fontWeight: 'bold' }} />
          <br></br>
          <TextField label="State" variant="outlined" value={callData.state} style={{ fontWeight: 'bold' }} />
          <TextField label="Zipcode" variant="outlined" value={callData.zipcode} style={{ fontWeight: 'bold' }} />
          <TextField label="Phone" variant="outlined" value={callData.phone} style={{ fontWeight: 'bold' }} />
          <TextField label="Reason for Calling" variant="outlined" multiline rows={2} fullWidth value={callData.reason} style={{ fontWeight: 'bold' }} />
        </CardContent>
        <CardActions>
          <Button type="Get Call" variant="contained" color="success" onClick= {handleGetCall}> 
            Get Call 
          </Button>
          <Button type="button" variant="contained" color="success" onClick={handleGetPatientHistory}>
            {showHistory ? 'Hide Patient History' : 'Show Patient History'}
          </Button>
        </CardActions>
      </Card>
    )

    return (
      <Container maxWidth="lg">
     
        <Card variant='outlined' color='success'> { card } </Card>

        {showHistory && (
          <div>
            <Typography variant="h5" gutterBottom>
              Patient History
            </Typography>

            {patientHistories.map((history) => (
              <div key={history.id}>
                <hr />
                <br></br>
                <PatientHistory history={history} />
                <br></br>
                <hr />
              </div>
            ))}
          </div>
        )}

        { showHistory }

        <SendCallNotes patientId={patientId} />
        
       </Container> 
    );

}

export default CallNotesPage;















 {/* <Typography variant="h4" gutterBottom>
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
          multiline
          rows={2}
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
          {showHistory ? 'Hide Patient History' : 'Show Patient History'}
        </Button>
        <br></br>
        <br></br>

      </form> */}