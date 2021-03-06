import HookQuestions from "../components/HookQuestions";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Marquee from "../components/Marquee";
import Box from "@mui/material/Box";
import heroImage from "./assets/hero.jpg";

const Home = () => {

    return (
        <Container>
        <Grid container >
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
            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Marquee />
            </Grid>
            <Grid item xs={12} sx={{ mb: 5 }} >
                <HookQuestions  />
            </Grid>
        </Grid>
        </Container>
    );
};

export default Home;