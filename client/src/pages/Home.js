import HookQuestions from '../components/HookQuestions';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import HeroBox from '../components/HeroBox/index';
import Marquee from '../components/Marquee';

const Home = () => {

    return (
        <Container>
            <Grid container >
                <Grid item xs={12} sx={{ overflow: 'hidden' }}>
                    <HeroBox />
                </Grid>
                <Grid item xs={12}>
                    <Marquee />
                </Grid>
                <Grid item xs={12} >
                    <HookQuestions />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;