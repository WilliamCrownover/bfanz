import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import heroImage from './assets/hero.jpg'

const About = () => {

    return (
        <Container>
            <Grid item xs={12} sx={{display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box
                    component="img"
                    src={heroImage}
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
                    <Typography variant="h4" sx={{ mt: 4}}>
                        So what is a hook question?
                    </Typography>
                    <Typography variant="body1" sx={{fontSize: '1.2rem'}}>
                    A hook question is something you can add to the movies you loved, or hated, to get other movie lovers interested. Get them on the hook!
                    </Typography>
                </Grid>
                <Grid sx={{ mt: 1, padding: 2}} item xs={12}>
                    <Typography variant="h4">
                        About the Developers
                    </Typography>
                        <Typography sx={{pb:1, fontSize: '1.2rem'}}><Box component='span' color='#703ADD' fontWeight="600">Michelle Oakley:</Box > Cult movie lover who wants to learn more about software development and project management.</Typography>

                        <Typography sx={{pb:1, fontSize: '1.2rem'}}><Box component='span' color='#703ADD' fontWeight="600">Sheri Elgin: </Box >Movie lover and IT Administrator interested in learning more about web development and automation.</Typography>

                        <Typography sx={{pb:1, fontSize: '1.2rem'}}><Box component='span' color='#703ADD' fontWeight="600">Adrian Cronin: </Box >Full Stack Web Developer and movie neophyte. MUI king. </Typography>

                        <Typography sx={{pb:1, fontSize: '1.2rem'}}><Box component='span' color='#703ADD' fontWeight="600">William Crownover: </Box >Full-Stack Web Developer and Digital Production Artist focused on user experience and data visualizations.</Typography>

                        <Typography sx={{pb:1, fontSize: '1.2rem'}}><Box component='span' color='#703ADD' fontWeight="600">Joseph Pruitt: </Box >Math nerd turned developer. I love learning, puzzles and efficiency. Sometimes I code okay.</Typography>
                </Grid>
                <Grid sx={{ mt: 3, padding: 2 }} item xs={12}>
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