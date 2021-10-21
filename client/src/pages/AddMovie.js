import { fetchMovie } from '../utils/helpers';
import { useQuery } from '@apollo/client';
import Grid from '@mui/material/Grid';
import AddMovieDetails from '../components/AddMovieDetails';
import { useParams } from 'react-router';
import { GET_MOVIE_BY_ID } from '../utils/queries';
import { percent, total } from '../utils/helpers';
import { Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

const AddMovie = () => {

    const [titleSearch, setTitleSearch] = useState('');
    const [searchData, setSearchData] = useState({});

    const handleInputChange = (e) => {
        const { value } = e.target;
        return setTitleSearch(value);
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        // THIS IS WHERE THE 3RD PARTY DATA COMES FROM!
        setSearchData(await fetchMovie(titleSearch));
        // console.log(await fetchMovie(titleSearch));
        console.log(searchData, 'handleSearchSubmit');
        setTitleSearch('');
    }

    const movieData = {
        title: 'Inception',
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
        director: "Christopher Nolan",
        writer: "Christopher Nolan",
        year: "2010",
        actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
        poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg'
    };

    // const movieData = null;
    console.log(movieData, " movie data");

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
                            Search for a Movie
                        </Typography>
                    </Grid>
                )}
            </Grid>
        </Container>
    );
};

export default AddMovie;