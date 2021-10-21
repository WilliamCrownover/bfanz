import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useQuery } from '@apollo/client';
import { GET_RANDOM_HOOK_QUESTIONS } from '../../utils/queries';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function HookQuestions() {
  
  const { loading, data } = useQuery(GET_RANDOM_HOOK_QUESTIONS,{
    variables: {
      numberOfMovies: 3
    }
  });

  const hookQuestionArray = data?.getRandomMovies || []
  
  return (
    <Container>
      <Box sx={{ flexGrow: 1 , border: '3px solid #121212', borderRadius: '20px', padding: 5}}>
        <Grid container spacing={1} justifyContent="space-evenly">
          {hookQuestionArray.map(movie => (
            <Grid item xs="auto">
              <Item>{loading ? "loading" : movie.hookQuestions[0].questionText}</Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
