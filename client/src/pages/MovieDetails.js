import { useQuery } from '@apollo/client';
import Grid from '@mui/material/Grid';
import DashCard from '../components/DashCard';
import { useParams } from 'react-router';
import { GET_MOVIE_BY_ID } from '../utils/queries';
import { percent, total } from '../utils/helpers';
import { Container, Typography } from '@mui/material';

const MovieDetails = () => {
	const { movieId } = useParams();

	const { loading, data } = useQuery(GET_MOVIE_BY_ID, {
		variables: {
			id: movieId
		}
	});

	const movieData = data?.getMovieById || {}

	return (
        <Container sx={{mt: 3}}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
				{loading ? (
						<Grid item>
							<Typography variant="h5" component="div">
								LOADING...
							</Typography>
						</Grid>
					) : (
						<>
							<Grid item key={movieData._id}>
								<DashCard
									_id={movieData._id}
									title={movieData.title}
									hookQuestion={movieData.hookQuestions[0].questionText}
									seenPercent={percent(movieData.seenItCount, movieData.notSeenItCount)}
									lovedItCount={movieData.lovedItCount}
									ratingTotal={total(movieData.lovedItCount, movieData.hatedItCount)}
								/>
							</Grid>
						</>
					)}
			</Grid>
		</Container>
	);
};

export default MovieDetails;