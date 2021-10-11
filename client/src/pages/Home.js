import HookQuestions from '../components/HookQuestions';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Home = () => {

    return (
        <Grid container >
            <Grid sx={{ border: 1 }} item xs={12}>
                <Typography variant="h1">
                    HERO BAR AREA
                </Typography>
            </Grid>
            <Grid sx={{ border: 1 }} item xs={12}>
                <Typography variant="h2">
                    Marquee Area
                </Typography>
            </Grid>
            <Grid item xs={12} >
                <HookQuestions />
            </Grid>
        </Grid>
    );
};

export default Home;