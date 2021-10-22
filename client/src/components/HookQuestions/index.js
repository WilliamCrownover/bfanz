// HOOK QUESTIONS COMPONENT INDEX.JS 
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
  ...theme.typography.body2 = {
    fontSize: '1rem',
    '@media (min-width:600px)': {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.4rem',
    },
  },
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));

export default function HookQuestions() {
  
  const { loading, data } = useQuery(GET_HOOK_QUESTIONS);

  const hookQuestionArray = data?.getMovies || []

  const randomHookQuestionArray = randomizeArray(hookQuestionArray);

  const getRandomQuestion = (movie) => {
    const randomQuestion = getRandomValueFromArray(movie.hookQuestions)
    return randomQuestion.questionText
  }
  
const colorSet = ['#F5C300', '#D97409', '#703ADD', '#ECEFF1'];

  return (
    <Container>
      <Box sx={{ flexGrow: 1 , border: '3px solid #121212', borderRadius: '20px', maxWidth: '100%', height: 'auto', padding: 5, mb: 5}}>
        <Grid container spacing={1} justifyContent="space-evenly">
          {  randomHookQuestionArray.map(movie => {
               let index = Math.floor(Math.random() * colorSet.length);
            return (
            <Grid item xs="auto" sx={{mb: 1, whiteSpace: 'nowrap', overflow: 'hidden', borderLeft: '1em solid transparent', borderRight: '1em solid transparent', textOverflow: 'ellipsis'}} key={movie._id}>
              <RouterLink to={`/movieDetails/${movie._id}`} style={{ textDecoration: 'none' }}>
                <Item sx={{elevation:0, backgroundImage: 'none', color: colorSet[index]}}>{loading ? "loading" : getRandomQuestion(movie)}</Item>
              </RouterLink>
            </Grid>
            )
          })
        }
        </Grid>
      </Box>
    </Container>
  );
}
