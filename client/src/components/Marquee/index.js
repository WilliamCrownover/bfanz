// MARQUEE COMPONENT INDEX.JS 
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './assets/Marquee.css';

export default function Marquee() {
    return (
        <Grid sx={{mb: 5}}>
            <Box sx={{minHeight: 500, alignItems: 'center', justifyContent: 'center', padding: 3}} className = 'cellBackground'>
                <img src="./assets/filmCellWelcome.jpg" alt='Film Cell Border' style={{maxWidth:"100%", height:"auto"}}/>
            </Box>
        </Grid>
    );
}
