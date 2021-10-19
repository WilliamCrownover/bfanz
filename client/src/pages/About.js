import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import HeroBox from '../components/HeroBox';
import Typography from '@mui/material/Typography';

const About = () => {

    return (
        <Container>
            <Grid item xs={12}>
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
                        To provide a fun and safe space for Cult Classic and B-Movie enthusiasts to share and rate their favorite films
                        while providing an opportunity to discover new movie experiences.
                    </Typography>
                </Grid>
                <Grid sx={{ border: 1, mt: 2, padding: 2 }} item xs={12}>
                    <Typography variant="h4">
                        About the Developers
                    </Typography>
                    <Typography variant="body1">
                        Michelle Oakley: Cult movie lover who wants to learn more about software development and project management.

                        Sheri Elgin: Movie lover and IT Administrator interested in learning more about web development and automation.

                        Adrian Cronin: Full Stack Web Developer and movie neophyte.

                        William Crownover: Full-Stack Web Developer and Digital Production Artist focused on user experience and data visualizations.

                        Joseph Pruitt: Math nerd turned developer. I love learning, puzzles and efficiency. Sometimes I code okay.




                    </Typography>
                </Grid>
                <Grid sx={{ border: 1, mt: 2, padding: 2 }} item xs={12}>
                    <Typography variant="h4">
                        Legal Statement
                    </Typography>
                    <Typography variant="body1">
                        All images and description belong to Open Movie Database.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default About;