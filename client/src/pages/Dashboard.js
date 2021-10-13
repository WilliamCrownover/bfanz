import Grid from '@mui/material/Grid';
import DashCard from '../components/DashCard';
import AddMovieButton from '../components/AddMovieButton';
import Container from '@mui/material/Container';

const Dashboard = () => {

    return (
        <Container>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item>
                    <AddMovieButton />
                </Grid>
                <Grid item>
                    <DashCard />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dashboard;