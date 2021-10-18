import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const About = () => {

    return (
        <Grid sx={{mt: 3}} container rowSpacing={4
        }>
            <Grid sx={{ border: 1 }} item xs={12}>
                <Typography variant="h4">
                    Purpose
                </Typography>
                <Typography variant="body1">
                    Our purpose statement
                </Typography>
            </Grid>
            <Grid sx={{ border: 1 }} item xs={12}>
                <Typography variant="h4">
                    About the Developers
                </Typography>
                <Typography variant="body1">
                    About the developers text and stuff
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