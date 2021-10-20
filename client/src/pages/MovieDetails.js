import { useQuery } from '@apollo/client';
import Grid from '@mui/material/Grid';
import DashCard from '../components/DashCard';
import DetailsPage from '../components/DetailsPage';
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

	const movieData = data?.getMovieById || {};

	console.log(movieData);

	return (
		<Container sx={{ mt: 3 }}>
			<Grid
				container
				direction='row'
				justifyContent='center'
				alignItems='center'
				spacing={{ xs: 2, md: 3 }}>
				{loading ? (
					<Grid item>
						<Typography variant="h5" component="div">
							LOADING...
						</Typography>
					</Grid>
				) : (
					<>
						<Grid xs={12} item key={movieData._id}>
							<DetailsPage
								_id={movieData._id}
								title={movieData.title}
								hookQuestion={movieData.hookQuestions[0].questionText}
								seenPercent={percent(movieData.seenItCount, movieData.notSeenItCount)}
								lovedItCount={movieData.lovedItCount}
								ratingTotal={total(movieData.lovedItCount, movieData.hatedItCount)}
								description={movieData.description}
							/>
						</Grid>
					</>
				)}
			</Grid>
		</Container>
	);
};

export default MovieDetails;