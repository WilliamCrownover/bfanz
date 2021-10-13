import Grid from '@mui/material/Grid';
import DashCard from '../components/DashCard';
import AddMovieButton from '../components/AddMovieButton';
import Container from '@mui/material/Container';
import SearchBar from '../components/SearchBar/SearchBar';
import Box from '@mui/material/Box';

const Dashboard = () => {
    // sx={{ display: 'flex', justifyContent: 'flex-start' }}
    return (
        <Container>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12}>
                    <Box maxWidth="md" >
                        <SearchBar />
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