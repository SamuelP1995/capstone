import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import axios from "axios";


const PatientHistory = ({history}) => {
    const {callNotes, transport, date, time } = history;


    return (
      <div>
        <TextField
          label="Call Notes"
          variant="outlined"
          value={callNotes}
          fullWidth
          multiline
          rows={2}
          disabled
        />
        <TextField
          label="Transport"
          variant="outlined"
          value={transport}
          fullWidth
          disabled
        />
        <TextField
          label="Date"
          variant="outlined"
          value={date}
          fullWidth
          disabled
        />
        <TextField
          label="Time"
          variant="outlined"
          value={time}
          fullWidth
          disabled
        />
      </div>
    );
  };
    

export default PatientHistory;