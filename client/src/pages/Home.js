import HookQuestions from '../components/HookQuestions';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import HeroBox from '../components/HeroBox/index';
import Marquee from '../components/Marquee';
import Box from '@mui/material/Box';

const Home = () => {

    return (
        <Container>
        <Grid container sx={{ width: '100vw' }}>
            <Grid item xs={12} sx={{ width: '100%' }}>
                <Box
                    component='img'
                    src='/assets/hero.jpg'
                    sx={{
                        width: {
                            xs: '100%',
                            sm: '72%',
                            md: '85%',
                            xl: '90%'
                        }
                    }}
                />
            </Grid>
            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Marquee display={{ md: "none" }} />
            </Grid>
            <Grid item xs={12} >
                <HookQuestions />
            </Grid>
        </Grid>
        </Container>
    );
};

export default Home;