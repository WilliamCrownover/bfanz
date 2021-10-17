import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import AddForm from './AddForm';

const AddMovie = () => {
    return (

        <Container sx={{ my: 3 }} maxWidth="md">
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

                {/* The form should be disabled until a check is completed */}
                <Grid item xs={12}>
                    <AddForm />
                </Grid>
            </Grid>
        </Container>

    );
};

export default AddMovie;