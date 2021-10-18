import Grid from '@mui/material/Grid';
// import Container from '@mui/material/Container';
// import Paper from '@mui/material/Paper'; 
import Box from '@mui/material/Box';
import './assets/Marquee.css';

{/* <img src='/assets/marq1.jpg' alt="Silent Film Title Card" /> */}

export default function Marquee() {
    return (
        <Grid sx={{mb: 5}}>
            <Box sx={{minHeight: 800, alignItems: 'center', padding: 3, border: '1px solid red'}} class = 'cellBackground'>
                <img src="assets/filmCell.jpg" alt='Film Cell Border'/>
            </Box>
            {/* nesting didn't work */}
            {/* <Box class = 'filmBackground' >
                <img src='/assets/titleCard.jpg' alt="Silent Film Title Card" />
            </Box> */}
        </Grid>
    );
}
