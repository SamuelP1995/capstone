import React from "react"
import { CssBaseline, Container, Typography } from '@mui/material';
import DirectionsPage from "../../components/Directions";
import MapContainer from "../../components/mapContainer";
import CallNotesPage from "../../components/CallNotes";


export default function MainPage() { 
    return (
        <div className="Main">
            <h1>Main Page</h1>
            <CssBaseline />
            <Container maxWidth="lg">
                <Typography variant="h4" gutterBottom>
                    *Your Main Page Content*
                    Call Notes Page 
                    Chat App to Side
                    Maps Underneth 
                </Typography>
            </Container>
            <CallNotesPage />
            <MapContainer />
            <DirectionsPage />
            
        </div>
    )
}





