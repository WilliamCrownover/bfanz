import { useQuery } from '@apollo/client';
import Grid from '@mui/material/Grid';
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

	const movieData = data?.getMovieById || null;

	return (
		<Container sx={{ mt: 3 }}>
			<Grid
				container
				direction='row'
				justifyContent='center'
				alignItems='center'
				spacing={{ xs: 2, md: 3 }}
			>
				{!movieData ? (
					<Grid item>
						<Typography variant="h5" component="div">
							There's no movie with that ID here. Please view our collection to choose one.
						</Typography>
					</Grid>
				) : (
					<>
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
										hookQuestions={movieData.hookQuestions}
										seenPercent={percent(movieData.seenItCount, movieData.notSeenItCount)}
										seenItCount={movieData.seenItCount}
										lovedItCount={movieData.lovedItCount}
										ratingTotal={total(movieData.lovedItCount, movieData.hatedItCount)}
										description={movieData.description}
										director={movieData.director}
										year={movieData.year}
										writer={movieData.writer}
										actors={movieData.actors}
										poster={movieData.poster}
									/>
								</Grid>
							</>
						)}
					</>
				)}
			</Grid>
		</Container>
	);
};

export default MovieDetails;