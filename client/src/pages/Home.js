import HookQuestions from '../components/HookQuestions';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import HeroBox from '../components/HeroBox/index';
import Marquee from '../components/Marquee';

const Home = () => {

    return (
        <Grid container >
            <Grid item xs={12}>
                <HeroBox />
            </Grid>
            <Grid item xs={12}>
                <Marquee />
            </Grid>
            <Grid item xs={12} >
                <HookQuestions />
            </Grid>
        </Grid>
    );
};

export default Home;