import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const About = () => {

    return (
        <Grid container rowSpacing={4
        }>
            <Grid sx={{ border: 1 }} item xs={12}>
                <Typography variant="h4">
                    Purpose
                </Typography>
                <Typography variant="body1">
                    To provide a fun and safe space for Cult Classic and B-Movie enthusiast
                    to share and rate their favorite films.
                </Typography>
            </Grid>
            <Grid sx={{ border: 1 }} item xs={12}>
                <Typography variant="h4">
                    About the Developers
                </Typography>
                <Typography variant="body1">
                    Michelle Oakley: Cult movie lover who wants to learn more about software development and project management.

                    Sheri Elgin: Movie lover and IT Administrator interested in learning more about web development and automation.

                    Adrian Cronin: Full Stack Web Developer and movie neophyte.

                    William Crownover: Full-Stack Web Developer and Digital Production Artist focused on user experience and data visualizations.




                </Typography>
            </Grid>
            <Grid sx={{ border: 1 }} item xs={12}>
                <Typography variant="h4">
                    Legal Statement
                </Typography>
                <Typography variant="body1">
                    Legal stuff our lawyers told us to put
                </Typography>
            </Grid>
        </Grid>
    );
};

export default About;