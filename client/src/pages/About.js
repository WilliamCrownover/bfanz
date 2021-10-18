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
                    To provide a space for Cult Classic and B-Movie enthusiast
                    to share and rate their favorite films.
                </Typography>
            </Grid>
            <Grid sx={{ border: 1 }} item xs={12}>
                <Typography variant="h4">
                    About the Developers
                </Typography>
                <Typography variant="body1">
                    Michelle Antoinette Oakley: Cult movie lover who wants to learn more about software development and project management.

                    Sheri Elgin: Movie lover and IT Administrator interested in learning more about web development and automation.




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