import Grid from '@mui/material/Grid';
import AddMovieDetails from '../components/AddMovieDetails';
import { Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_OMDB_MOVIES } from '../utils/queries';

const AddMovie = () => {
    const [notFoundText, setNotFoundText] = useState('Search for a movie to add');
    const [titleSearch, setTitleSearch] = useState('');
    const [movieData, setMovieData] = useState(null);

    const [fetchMovie, { data }] = useLazyQuery(GET_OMDB_MOVIES, {
        variables: { searchString: titleSearch },
    })

    const handleInputChange = (e) => {
        const { value } = e.target;
        return setTitleSearch(value);
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        fetchMovie({
            variables: { searchString: titleSearch },
            onCompleted: () => {
                // if (searchResponse.response === 'True') {
                //     setMovieData(searchResponse);
                // } else {
                //     setNotFoundText('No Results found, please try again');
                //     setMovieData(null);
                // }
                console.log('query completed');
            }
        });

        // const searchResponse = data;

        setTitleSearch('');
    }

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
                    <>
                        <Grid xs={12} item key={movieData._id}>
                            <AddMovieDetails
                                imdbID={movieData.imdbID}
                                title={movieData.title}
                                hookQuestions={movieData.hookQuestions}
                                description={movieData.description}
                                director={movieData.director}
                                year={movieData.year}
                                writer={movieData.writer}
                                actors={movieData.actors}
                                poster={movieData.poster}
                            />
                        </Grid>
                    </>
                ) : (
                    <Grid item>
                        <Typography variant="h5">
                            {notFoundText}
                        </Typography>
                    </Grid>
                )}
            </Grid>
        </Container>
    );
};

export default AddMovie;