import HookQuestions from '../components/HookQuestions';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import HeroBox from '../components/HeroBox/index';

const Home = () => {

    return (
        <Grid sx={{ mt: 3 }} container >
            <Grid item xs={12}>
                <HeroBox />
            </Grid>
            <Grid item xs={12}>
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