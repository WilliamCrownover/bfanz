import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Auth from '../../utils/auth';


export default function AddMovieDetails(props) {
    const [hookText, setHookText] = useState('');

    const handleInputChange = (e) => {
        const { value } = e.target;
        return setHookText(value);
    };

    const handleMovieSubmit = async (e) => {
        e.preventDefault();


        // mutation to take all the info and create a movie in the database


    }

    // split the actors string into an array
    let actorArr = props.actors.split(',');
    actorArr = actorArr.map(actor => {
        return actor.trim();
    })

    const hookQuestionButton = (
        <>
            {Auth.loggedIn() ? (
                <>
                    <Typography variant="h6">Add a Hook to add this movie to our collection</Typography>
                    <Divider sx={{ m: 1 }} />
                    <Stack direction='row' spacing={1}>
                        <TextField
                            fullWidth
                            required
                            multiline
                            maxRows={3}
                            id="addHook"
                            label="Enter Hook"
                            variant="filled"
                            value={hookText}
                            onChange={handleInputChange}
                        />
                        <Button variant='outlined' onClick={handleMovieSubmit}> Add Movie</Button>
                    </Stack>
                </>
            ) : (
                <Stack direction='row' spacing={1}>
                    <TextField
                        disabled
                        fullWidth
                        multiline
                        maxRows={3}
                        id="addHook"
                        label="Login to Add Movies"
                        variant="filled"
                    />
                    <Button disabled variant='outlined'> Add </Button>
                </Stack>
            )}
        </>
    );

    return (
        <>
            <Grid container direction='row'>
                <Grid item md={6} xs={12} sx={{ mx: 'auto', p: 3 }}>
                    <Typography align="center" variant="h3">
                        {props.title}
                    </Typography>
                    <Typography align="center" variant="subtitle1">
                        {props.year}
                    </Typography>

                    <Divider sx={{ m: 3 }} />

                    <Typography align="center" variant="body1">
                        {props.description}
                    </Typography>

                    <Divider sx={{ m: 3 }} />

                    <Paper elevation={12} sx={{ p: 2 }}>
                        <Stack direction='row' spacing={3}>
                            <Typography variant="h6">
                                Directed by:
                            </Typography>
                            <Typography variant="body1">
                                {props.director}
                            </Typography>
                        </Stack>

                        <Stack direction='row' spacing={3}>
                            <Typography variant="h6">
                                Written by:
                            </Typography>
                            <Typography variant="body1">
                                {props.writer}
                            </Typography>
                        </Stack>

                        <Stack direction='row' spacing={3}>
                            <Typography variant="h6">
                                Featuring:
                            </Typography>
                            <Stack direction='column'>
                                {actorArr.map((actor) => (
                                    <Typography variant="body1">
                                        {actor}
                                    </Typography>
                                ))}
                            </Stack>
                        </Stack>
                    </Paper>

                    <Divider sx={{ m: 3 }} />

                    <Paper elevation={12} sx={{ p: 3 }}>
                        {hookQuestionButton}
                    </Paper>

                </Grid>

                <Grid item md={6} xs={12} sx={{ mx: 'auto', p: 3 }}>
                    <Box component='img' src={props.poster} alt='movie poster' />
                </Grid>
            </Grid>
        </>
    )
};