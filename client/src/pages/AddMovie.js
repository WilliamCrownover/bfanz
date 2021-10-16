import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddMovie = () => {
    return (

        <Container>
            <Grid
                container
                direction='row'
                justifyContent='center'
                alignItems='center'
                spacing={{ xs: 2, md: 3 }}
            >
                <Grid item xs={9}>
                    <TextField fullWidth id="check-movies" label="Check Movies" variant="outlined" />
                </Grid>
                <Grid item xs={3}>
                    <Button size="large" variant='outlined'> Check </Button>
                </Grid>
            </Grid>
            <Grid container spacing={{ xs: 2, md: 3 }}>
                <Grid item xs={12}>
                    <TextField fullWidth id="title" label="Movie Title" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth id="hook-questions" label="Add Hook Question" variant="outlined" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AddMovie;