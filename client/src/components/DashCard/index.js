// DASH CARD COMPONENT INDEX.JS 
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import CardActionArea from '@mui/material/CardActionArea';
import { Link as RouterLink } from 'react-router-dom';

export default function BasicCard(props) {
    return (
        <RouterLink to={`/movieDetails/${props._id}`} style={{ textDecoration: 'none' }}>
            <Card sx={{ minWidth: 275, maxWidth: 275, height: '100%' }}>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{fontSize: '1.6rem', color: '#703ADD'}}>
                            {props.title}
                        </Typography>
                        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            subtitle
                        </Typography> */}
                        <Typography variant="body2">
                            {props.hookQuestion}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <img src={props.poster} alt="The movie poster" style={{width: '100%'}}/>
                    </CardContent>
                    <CardContent>
                        <Stack direction="row" justifyContent="center" spacing={1}>
                            <Paper sx={{ p: 2 }}  elevation={3} >
                                <Typography variant="body2">
                                    Seen It
                                </Typography>
                                <Typography variant="body2">
                                    {props.seenPercent}%
                                </Typography>
                            </Paper>
                            <Paper sx={{ p: 2 }} elevation={3} >
                                <Typography variant="body2">
                                    {props.lovedItCount} out of {props.ratingTotal}
                                </Typography>
                                <Typography variant="body2">
                                    Fanz
                                </Typography>
                                <Typography variant="body2">
                                    Loved It!
                                </Typography>
                            </Paper>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>
        </RouterLink>
    );
}
