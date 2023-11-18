import React from 'react';
import { TextField, Grid } from '@mui/material';


const PatientHistory = ({history}) => {
    const {callNotes, transport, date, time } = history;


    return (
        <Grid container spacing={2} style={{ marginBottom: '20px' }}>
        <Grid item xs={12} md={4}>
        <TextField
          label="Call Notes"
          variant="outlined"
          value={callNotes}
          fullWidth
          multiline
          rows={2}
        />
        </Grid>
        <Grid item xs={12} md={4}>
        <TextField
          label="Transport"
          variant="outlined"
          value={transport}
          fullWidth
        />
        </Grid>
        <Grid item xs={12} md={4}>
        <TextField
          label="Date"
          variant="outlined"
          value={date}
          fullWidth
        />
        </Grid>
        <Grid item xs={12} md={4}>
        <TextField
          label="Time"
          variant="outlined"
          value={time}
          fullWidth
        />
        </Grid>
        </Grid>
    );
  };
    

export default PatientHistory;