import React, { useState, useEffect } from 'react';
import { Box, Card, Typography, TextField, Button, CardMedia, CardContent, CardActions, CardHeader } from '@mui/material';
import axios from "axios";


function SendCallNotes({ patientId }) {
    // const { patientId } = patientId;
    const [sendData, setSendData] = useState({
        patientId: patientId,
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
            const response = await axios.get('http://localhost:8081/histories');
            const data = response.data;
            setSendData(data);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    const handleFinishCall = async () => {
        try {
            const response = await axios.post('http://localhost:8081/histories', sendData);

            setSendData({
                patientId: '',
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
      <Box sx={{ variant: 'outlined', bgcolor: 'success.main' }} >
        <Card sx={{ }}> 
          <CardHeader variant='h4'  title='Call Notes' subheader='Current Patient' />
          <CardMedia>

          </CardMedia>
          <CardContent>
            <TextField label="Call Notes" variant="outlined" fullWidth multiline rows={2} value={sendData.callNotes}
            onChange={(e) => setSendData({ ...sendData, callNotes: e.target.value })} />
            <TextField label="Transport" variant="outlined" value={sendData.transport}
            onChange={(e) => setSendData({ ...sendData, transport: e.target.value })} />
            <TextField label="Date" variant="outlined" value={sendData.date}
            onChange={(e) => setSendData({ ...sendData, date: e.target.value })} />
            <TextField label="Time" variant="outlined" value={sendData.time}
            onChange={(e) => setSendData({ ...sendData, time: e.target.value })} />
          </CardContent>
          <CardActions>
            <Button type="button" variant="contained" color="success" onClick={handleFinishCall} > Clear From Call </Button>
          </CardActions>
        </Card>
      </Box>
        
    );
}

export default SendCallNotes;














// <Container maxWidth="lg">
//             <Typography variant="h4" gutterBottom>
//                 Call Notes
//             </Typography>

//         <form>

//         <TextField
//           label="Call Notes"
//           variant="outlined"
//           fullWidth
//           multiline
//           rows={2}
//           value={sendData.callNotes}
//           onChange={(e) => setSendData({ ...sendData, callNotes: e.target.value })}
//         />
//         <TextField
//           label="Transport"
//           variant="outlined"
//           value={sendData.transport}
//           onChange={(e) => setSendData({ ...sendData, transport: e.target.value })}
//         />
//         <TextField
//           label="Date"
//           variant="outlined"
//           value={sendData.date}
//           onChange={(e) => setSendData({ ...sendData, date: e.target.value })}
//         />
//         <TextField
//           label="Time"
//           variant="outlined"
//           value={sendData.time}
//           onChange={(e) => setSendData({ ...sendData, time: e.target.value })}
//         />
//         <TextField
//           label="Patient Id"
//           variant="outlined"
//           value={patientId}
//           disabled
//         />
//         <br></br>
//         <Button
//           type="button"
//           variant="contained"
//           color="success"
//           onClick={handleFinishCall}
//         >
//           Clear From Call
//         </Button>

//         </form>

//         </Container>