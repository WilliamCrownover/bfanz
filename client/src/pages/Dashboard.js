import Grid from '@mui/material/Grid';
import DashCard from '../components/DashCard';

const Dashboard = () => {

    return (
        <Grid container >
            <Grid item xs={12} md={4} lg={3}>
                <DashCard />
            </Grid>
        </Grid>
    );
};

export default Dashboard;