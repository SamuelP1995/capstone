import React from 'react';
import { TextField } from '@mui/material';


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
        />
        <TextField
          label="Transport"
          variant="outlined"
          value={transport}
          fullWidth
        />
        <TextField
          label="Date"
          variant="outlined"
          value={date}
          fullWidth
        />
        <TextField
          label="Time"
          variant="outlined"
          value={time}
          fullWidth
        />
      </div>
    );
  };
    

export default PatientHistory;