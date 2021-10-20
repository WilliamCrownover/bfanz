import HookQuestions from '../components/HookQuestions';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// import HeroBox from '../components/HeroBox/index';
import Marquee from '../components/Marquee';
import Box from '@mui/material/Box';
// import { makeStyles } from '@material-ui/core';

const Home = () => {

    return (
        <Container>
        <Grid container sx={{ width: '95vw' }}>
            <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
                <Box
                    component='img'
                    src='/assets/hero.jpg'
                    sx={{
                        width: {
                            xs: '100%',
                            sm: '72%',
                            md: '85%',
                            xl: '90%'
                        },
                        maxHeight: "400px",
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