import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useQuery } from '@apollo/client';
import { GET_HOOK_QUESTIONS } from '../../utils/queries';
import { Link as RouterLink } from 'react-router-dom';
import { getRandomValueFromArray, randomizeArray } from '../../utils/helpers';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function HookQuestions() {
  
  const { loading, data } = useQuery(GET_HOOK_QUESTIONS);

  const hookQuestionArray = data?.getMovies || []

  const randomHookQuestionArray = randomizeArray(hookQuestionArray);

  const getRandomQuestion = (movie) => {
    const randomQuestion = getRandomValueFromArray(movie.hookQuestions)
    return randomQuestion.questionText
  }
  
  return (
    <Container>
      <Box sx={{ flexGrow: 1 , border: '3px solid #121212', borderRadius: '20px', padding: 5}}>
        <Grid container spacing={1} justifyContent="space-evenly">
          {randomHookQuestionArray.map(movie => (
            <Grid item xs="auto" key={movie._id}>
              <RouterLink to={`/movieDetails/${movie._id}`} style={{ textDecoration: 'none' }}>
                <Item>{loading ? "loading" : getRandomQuestion(movie)}</Item>
              </RouterLink>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
