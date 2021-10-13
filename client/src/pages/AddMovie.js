import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const AddMovie = () => {
    return (

        <Container>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item>
                    THIS WILL BE THE ADD MOVIE FORM
                </Grid>
            </Grid>
        </Container>
    );
};

export default AddMovie;