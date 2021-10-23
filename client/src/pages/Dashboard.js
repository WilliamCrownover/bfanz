import Grid from '@mui/material/Grid';
import DashCard from '../components/DashCard';
import AddMovieButton from '../components/AddMovieButton';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useQuery } from '@apollo/client';
import { GET_MOVIES } from '../utils/queries';
import { Typography } from '@mui/material';
import { percent, searchFailsMessage, total } from '../utils/helpers';
import { useState } from "react"


const Dashboard = () => {
    const { loading, data } = useQuery( GET_MOVIES );
    const allMovies = data?.getMovies || [];
    
    const [movieList, setMovieList] = useState(allMovies);

    const [search, setSearch] = useState("");

    if(search === "") {
        setTimeout(() => {
            setMovieList(allMovies);
        }, 10);
    }

    const getMyMovie = (event) => {
        event.preventDefault();
        const newMovieList = allMovies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()));
        setMovieList(newMovieList);
    }

    return (
        <Container sx={{mt: 3, mb: 3}}>
            <Grid container spacing={{ xs: 2, md: 3 }} >
                <Grid item xs={12} sx={{mt: 5}}>
                    <Stack maxWidth="xl" component="form"  onSubmit={getMyMovie} direction='row' spacing={1} >
                        <TextField fullWidth id="find-movies" label="Find Movies" onChange={( event ) => setSearch(event.target.value)} value={search} variant="outlined" />
                        <Button onClick={getMyMovie} variant='outlined' > Search </Button>
                    </Stack>
                </Grid>
                <Grid xs={12} md={6} lg={4} xl={3} item>
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
                            {(movieList.length === 0) &&
                                <Grid item>
                                    <Typography variant="h5" component="div">
                                        We don't have that movie. Click the Add Movie button to add it to our collection!
                                    </Typography>
                                </Grid>
                            }
                        {movieList.map((movie) => (
                            <Grid xs={12} md={6} lg={4} xl={3}  item key={movie._id}>
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