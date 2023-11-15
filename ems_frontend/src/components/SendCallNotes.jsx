import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

import axios from "axios";


function SendCallNotes() {


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

export default SendCallNotes;
