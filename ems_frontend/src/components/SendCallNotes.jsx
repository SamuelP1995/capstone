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
      fetchData();
    }, []);

    const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8080/histories/5');
          const data = response.data;
    
          setSendData(data);
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    };

    const handleFinishCall = async () => {

      try {
        const response = await axios.push('http://localhost:8080/histories/5', sendData);

        setSendData({
            callNotes: '',
            transport: '',
            date: '',
            time: '',
        });
    
        console.log('Data Saved: ', response.data)
      } catch (error) {
        console.log('Error : ', error);
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
          onChange={(e) => setSendData({ ...sendData, callNotes: e.target.value })}
        />
        <TextField
          label="Transport"
          variant="outlined"
          value={sendData.transport}
          onChange={(e) => setSendData({ ...sendData, transport: e.target.value })}
        />
        <TextField
          label="Date"
          variant="outlined"
          value={sendData.date}
          onChange={(e) => setSendData({ ...sendData, date: e.target.value })}
        />
        <TextField
          label="Time"
          variant="outlined"
          value={sendData.time}
          onChange={(e) => setSendData({ ...sendData, time: e.target.value })}
        />
        <br></br>
        <Button
          type="Clear From Call"
          variant="contained"
          color="success"
          onClick={handleFinishCall}
        >
          Clear From Call
        </Button>

        </form>

        </Container>

    );
}

export default SendCallNotes;
