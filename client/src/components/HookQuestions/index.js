import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function HookQuestions() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs="auto">
          <Item>variable width conteasdfasdfasdfasdfnt</Item>
        </Grid>
        <Grid item xs="auto">
          <Item>xs=asdfasdfasdfasdfasdfasdf</Item>
        </Grid>
        <Grid item xs="auto">
          <Item>xsasdsfasdfasdfasdfasdfasdf</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
