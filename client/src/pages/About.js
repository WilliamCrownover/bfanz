import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";

const About = () => {

    return (
        <Container>
            <Grid item xs={12} sx={{display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box
                    component="img"
                    src="/assets/hero.jpg"
                    sx={{
                        maxWidth: '100%',
                        height: "auto",
                    }}
                />
            </Grid>
            <Grid container rowSpacing={4
            }>
                <Grid sx={{ mt: 4, padding: 2 }} item xs={12}>
                    <Typography variant="h4">
                        Purpose
                    </Typography>
                    <Typography variant="body1" sx={{fontSize: '1.2rem'}}>
                        To provide a fun and safe space for Cult Classic and B-Movie enthusiasts to share and rate their favorite films
                        while providing an opportunity to discover new movie experiences.
                    </Typography>
                </Grid>
                <Grid sx={{ mt: 2, padding: 2 }} item xs={12}>
                    <Typography variant="h4">
                        About the Developers
                    </Typography>
                    <Typography variant="body1" sx={{fontSize: '1.2rem'}}>
                        <p><b>Michelle Oakley:</b> Cult movie lover who wants to learn more about software development and project management.</p>

                        <p><b>Sheri Elgin:</b> Movie lover and IT Administrator interested in learning more about web development and automation.</p>

                        <p><b>Adrian Cronin:</b> Full Stack Web Developer and movie neophyte.</p>

                        <p><b>William Crownover:</b> Full-Stack Web Developer and Digital Production Artist focused on user experience and data visualizations.</p>

                        <p><b>Joseph Pruitt:</b> Math nerd turned developer. I love learning, puzzles and efficiency. Sometimes I code okay.</p>
                    </Typography>
                </Grid>
                <Grid sx={{ mt: 2, padding: 2 }} item xs={12}>
                    <Typography variant="h4">
                        Legal Statement
                    </Typography>
                    <Typography variant="body1" sx={{fontSize: '1.2rem'}}>
                        All images and description belong to Open Movie Database.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default About;