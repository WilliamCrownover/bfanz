import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import SearchBar from '../components/SearchBar';
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
                    <SearchBar label="Check Movies" />
                </Grid>
                <Grid item xs={3}>
                    <Button size="large" variant='outlined'> Check </Button>
                </Grid>
                <Grid item xs={12}>
                    <SearchBar label="Title" />
                </Grid>
                <Grid item xs={12}>
                    <SearchBar label="Hook Questions" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AddMovie;