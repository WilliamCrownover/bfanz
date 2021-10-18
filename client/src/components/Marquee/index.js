import Grid from '@mui/material/Grid';
// import Container from '@mui/material/Container';
// import Paper from '@mui/material/Paper'; 
import Box from '@mui/material/Box';
import './assets/Marquee.css';

{/* <img src='/assets/marq1.jpg' alt="Silent Film Title Card" /> */}

export default function Marquee() {
    return (
        <Grid >
            <Box sx={{height: 420}} class = 'cellBackground'>
                <img src="assets/filmCell.jpg"/>
                <Box class = 'filmBackground' >
                <img src='/assets/titleCard.jpg' alt="Silent Film Title Card" />
                </Box>
            </Box>
        </Grid>
    );
}
