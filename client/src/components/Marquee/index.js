// MARQUEE COMPONENT INDEX.JS 
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './assets/Marquee.css';
import filmImage from './assets/filmCellWelcome.jpg'

export default function Marquee() {
    return (
        <Grid sx={{mb: 5}}>
            <Box sx={{alignItems: 'center', justifyContent: 'center', padding: 3}} className = 'cellBackground'>
                <img src={filmImage} alt='Film Cell Border' style={{maxWidth:"100%", height:"auto"}}/>
            </Box>
        </Grid>
    );
}
