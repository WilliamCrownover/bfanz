import Grid from '@mui/material/Grid';
import DashCard from '../components/DashCard';
import AddMovieButton from '../components/AddMovieButton';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const Dashboard = () => {
    return (
        <Container>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12} sx={{mt: 5}}>
                    <Box maxWidth="md" >
                        <TextField fullWidth id="find-movies" label="Find Movies" variant="outlined" />
                    </Box>
                </Grid>
                <Grid item>
                    <AddMovieButton />
                </Grid>
                {/* Testing larger collections */}
                {Array.from(Array(8)).map((_, index) => (
                    <Grid item>
                        <DashCard />
                    </Grid>
                ))}
                {/* <Grid item>
                    <DashCard />
                </Grid> */}
            </Grid>
        </Container>
    );
};

export default Dashboard;