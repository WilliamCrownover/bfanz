import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function HookQuestions() {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 , border: '3px solid #121212', borderRadius: '20px', padding: 5}}>
        <Grid container spacing={1} justifyContent="space-evenly">
          {Array.from(Array(8)).map((_, index) => (
            <Grid item xs="auto">
              <Item>variable width conteasdfa  kjirj zljdj sdfasdfasdfnt</Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
