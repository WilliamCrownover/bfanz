import Grid from '@mui/material/Grid';
import DashCard from '../components/DashCard';
import AddMovieButton from '../components/AddMovieButton';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useQuery } from '@apollo/client';
import { GET_MOVIES } from '../utils/queries';
import { Typography } from '@mui/material';
import { percent, total } from '../utils/helpers';
import { useState } from "react"


const Dashboard = () => {
    const { loading, data } = useQuery( GET_MOVIES );
    const allMovies = data?.getMovies || [];

    const getMyMovie = (event) => {
        event.preventDefault();
        const newMovieList = originalList.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()));
        setMovieList(newMovieList);
    }

    const [movieList, setMovieList] = useState(allMovies);
    const [originalList, setOriginalList] = useState(allMovies);
    const [search, setSearch] = useState("");

    return (
        <Container sx={{mt: 3, mb: 3}}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12} sx={{mt: 5}}>
                    <Stack component="form"  direction='row' spacing={1} >
                        <TextField fullWidth id="find-movies" label="Find Movies" onChange={( event ) => setSearch(event.target.value)} value={search} variant="outlined" />
                        <Button onClick={getMyMovie} variant='outlined' > Search </Button>
                    </Stack>
                </Grid>
                <Grid item>
                    <AddMovieButton />
                </Grid>
                {loading ? (
                    <Grid item>
                        <Typography variant="h5" component="div">
                            LOADING...
                        </Typography>
                    </Grid>
                ) : (
                    <>
                        {movieList.map((movie) => (
                            <Grid item key={movie._id}>
                                <DashCard 
                                    _id={movie._id}
                                    title={movie.title}
                                    hookQuestion={movie.hookQuestions[0].questionText}
                                    seenPercent={percent(movie.seenItCount, movie.notSeenItCount)}
                                    seenItCount={movie.seenItCount}
                                    lovedItCount={movie.lovedItCount}
                                    ratingTotal={total(movie.lovedItCount, movie.hatedItCount)}
                                    poster={movie.poster}
                                />
                            </Grid>
                        ))}
                    </>
                )}
            </Grid>
        </Container>
    );
};

export default Dashboard;