import Grid from '@mui/material/Grid';
import DashCard from '../components/DashCard';
import AddMovieButton from '../components/AddMovieButton';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useQuery } from '@apollo/client';
import { GET_MOVIES } from '../utils/queries';
import { Typography } from '@mui/material';
import { percent, total } from '../utils/helpers';

const Dashboard = () => {
    const { loading, data } = useQuery( GET_MOVIES );

    const allMovies = data?.getMovies || [];

    return (
        <Container sx={{mt: 3, mb: 3}}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12} sx={{mt: 5}}>
                    <Box maxWidth="md" >
                        <TextField fullWidth id="find-movies" label="Find Movies" variant="outlined" />
                    </Box>
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
                        {allMovies.map((movie) => (
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