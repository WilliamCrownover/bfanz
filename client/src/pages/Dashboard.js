import Grid from '@mui/material/Grid';
import DashCard from '../components/DashCard';
import AddMovieButton from '../components/AddMovieButton';

const Dashboard = () => {

    return (

        <Grid container spacing={4}>
            <Grid item xs={12} md={4} lg={3}>
                <AddMovieButton />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
                <DashCard />
            </Grid>
        </Grid>
    );
};

export default Dashboard;