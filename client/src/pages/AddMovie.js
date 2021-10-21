import { fetchMovie } from '../utils/helpers';
import { useQuery } from '@apollo/client';
import Grid from '@mui/material/Grid';
import DetailsPage from '../components/DetailsPage';
import { useParams } from 'react-router';
import { GET_MOVIE_BY_ID } from '../utils/queries';
import { percent, total } from '../utils/helpers';
import { Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

const AddMovie = () => {
    const { movieId } = useParams();

    const { loading, data } = useQuery(GET_MOVIE_BY_ID, {
        variables: {
            id: movieId
        }
    });

    const [titleSearch, setTitleSearch] = useState('');

    const handleInputChange = (e) => {
        const { value } = e.target;
        return setTitleSearch(value);
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        // THIS IS WHERE THE 3RD PARTY DATA COMES FROM!
        console.log(await fetchMovie(titleSearch));
        setTitleSearch('');
    }

    const movieData = data?.getMovieById || {};

    return (
        <Container sx={{ my: 3 }}>
            <Grid
                container
                direction='row'
                justifyContent='center'
                alignItems='center'
                spacing={{ xs: 2, md: 3 }}
            >
                <Grid item xs={9} sx={{ zIndex: 10 }}>
                    <TextField
                        fullWidth
                        id="search-movies"
                        label="Enter Movie Title"
                        variant="outlined"
                        value={titleSearch}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={3} sx={{ zIndex: 10 }}>
                    <Button size="large" variant='outlined' onClick={handleSearchSubmit}> Search </Button>
                </Grid>
                {movieData ? (
                    <Grid xs={12} item key={movieData._id}>
                        {/* <DetailsPage
                            _id={movieData._id}
                            title={movieData.title}
                            hookQuestions={movieData.hookQuestions}
                            seenPercent={percent(movieData.seenItCount, movieData.notSeenItCount)}
                            lovedItCount={movieData.lovedItCount}
                            ratingTotal={total(movieData.lovedItCount, movieData.hatedItCount)}
                            description={movieData.description}
                            director={movieData.director}
                            year={movieData.year}
                            writer={movieData.writer}
                            actors={movieData.actors}
                            poster={movieData.poster}
                        /> */}
                    </Grid>
                ) : (
                    <Grid item>
                        <Typography variant="h5">
                            Search for a Movie
                        </Typography>
                    </Grid>
                )}
            </Grid>
        </Container>
    );
};

export default AddMovie;