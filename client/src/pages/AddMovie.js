import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import MoodIcon from '@mui/icons-material/Mood';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import Paper from '@mui/material/Paper';



const AddMovie = () => {
    return (

        <Container maxWidth="md">
            <Grid
                container
                direction='row'
                justifyContent='center'
                alignItems='center'
                spacing={{ xs: 2, md: 3 }}
            >
                <Grid item xs={9}>
                    <TextField fullWidth id="check-movies" label="Enter Title" variant="outlined" />
                </Grid>
                <Grid item xs={3}>
                    <Button size="large" variant='outlined'> Check </Button>
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth id="title" label="Movie Title" variant="standard" />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth id="hook-questions" label="Hook" variant="standard" />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth id="description" label="Description" variant="filled" />
                </Grid>

                <Grid item xs={12}>
                    {/* Lower Grid Area */}
                    <Container>
                        <Grid
                            container
                            direction="row"
                            justifyContent='center'
                            alignItems="stretch"
                        >
                            {/* Left column */}
                            <Grid item xs={12} md={6} sx={{ color: 'black', border: 1, borderColor: 'white' }}>
                                {/* <Container> */}
                                <Grid
                                    container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="stretch"
                                >
                                    {/* Top box */}
                                    <Grid item xs={6} >
                                        <Container >
                                            {/* top row */}
                                            <Grid
                                                container
                                                direction="row"
                                                justifyContent="center"
                                                alignItems="center"
                                                sx={{ bgcolor: 'red' }}
                                            >
                                                {/* top left box */}
                                                <Grid item sx={{ border: 1 }} xs={6}>
                                                    Rating 1
                                                </Grid>
                                                {/* top right box */}
                                                <Grid item sx={{ border: 1 }} xs={6}>
                                                    Rating 2
                                                </Grid>
                                            </Grid>
                                            <Grid
                                                container
                                                direction="row"
                                                justifyContent="center"
                                                alignItems="stretch"
                                                sx={{ bgcolor: 'red' }}
                                            >
                                                {/* bottom left box */}
                                                <Grid item sx={{ border: 1 }} xs={6}>
                                                    <RemoveRedEyeIcon />
                                                    <VisibilityOffIcon />
                                                </Grid>
                                                <Grid item sx={{ border: 1 }} xs={6}>
                                                    <MoodIcon />
                                                    <MoodBadIcon />
                                                </Grid>
                                            </Grid>
                                        </Container>
                                    </Grid>

                                    {/* Bottom box */}
                                    <Container>
                                        <Grid item sx={{ border: 1, mt: 3, bgcolor: 'red' }} xs={12}>
                                            Stuff
                                        </Grid>
                                    </Container>
                                </Grid>
                                {/* </Container> */}
                            </Grid>

                            {/* Rigth column */}
                            <Grid item xs={12} md={6} sx={{ color: 'black', border: 1, borderColor: 'white' }}>
                                <Container>
                                    <Paper elevation={3} sx={{ backgroundColor: 'red', height: 200 }}>
                                        Directors Actors Etc...
                                    </Paper>
                                </Container>
                            </Grid>

                        </Grid>
                    </Container>
                </Grid>
                <Grid item>
                    <Button size="large" variant='outlined'> Add </Button>
                </Grid>
            </Grid>
        </Container>

    );
};

export default AddMovie;