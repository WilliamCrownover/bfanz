import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import './assets/Marquee.css';

// {/* <img src='/assets/marq1.jpg' alt="Silent Film Title Card" /> */}

export default function Marquee() {
    return (
        <Container>
        <Grid sx={{mb: 5}}>
            <Box sx={{minHeight: 500, alignItems: 'center', justifyContent: 'center', padding: 3}} class = 'cellBackground'>
                <img src="./assets/filmCellWelcome.jpg" alt='Film Cell Border'/>
            </Box>
        </Grid>
        </Container>
    );
}
