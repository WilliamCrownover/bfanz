import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import HeroBox from '../components/HeroBox';
import Typography from '@mui/material/Typography';

const About = () => {

    return (
        <Container>
            			<Grid  item xs={12}>
				<Grid item xs={12} sx={{ overflow: 'hidden' }}>
                    <HeroBox />
                </Grid>
			</Grid>
        <Grid container rowSpacing={4
        }>
            <Grid sx={{ border: 1, mt: 5, padding: 2 }} item xs={12}>
                <Typography variant="h4">
                    Purpose
                </Typography>
                <Typography variant="body1">
                    Our purpose statement
                </Typography>
            </Grid>
            <Grid sx={{ border: 1, mt: 2, padding: 2 }} item xs={12}>
                <Typography variant="h4">
                    About the Developers
                </Typography>
                <Typography variant="body1">
                    About the developers text and stuff
                </Typography>
            </Grid>
            <Grid sx={{ border: 1, mt: 2, padding: 2 }} item xs={12}>
                <Typography variant="h4">
                    Legal Statement
                </Typography>
                <Typography variant="body1">
                    Legal stuff our lawyers told us to put
                </Typography>
            </Grid>
        </Grid>
        </Container>
    );
};

export default About;