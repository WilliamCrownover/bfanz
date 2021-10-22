// DETAILS PAGE COMPONENT INDEX.JS 
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import SeenToggle from '../SeenToggle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Auth from '../../utils/auth';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ME, GET_MOVIE_BY_ID } from '../../utils/queries';
import { useState } from 'react';
import { ADD_ANOTHER_HOOKQUESTION } from '../../utils/mutations';

export default function DetailsPage(props) {
    const [ questionText, setQuestionText ] = useState('');
    const [ questionTextLength, setQuestionTextLength ] = useState(0);
    const [ submitHookQuestion ] = useMutation(ADD_ANOTHER_HOOKQUESTION, {
        refetchQueries: [
            GET_MOVIE_BY_ID
        ]
    });

    const { loading, data } = useQuery(GET_ME);
    const user = data?.me || {moviesSeen:[]};

    let seenIt = false;
    let text = "Please watch the film first";

    if(!loading) {
        for(let i = 0; i < user.moviesSeen.length; i++) {
            if(user.moviesSeen[i] === props._id) {
                seenIt = true;
                text = "Add a hook question"
            }
        };
    };

    let actorArr = props.actors.split(',');
    actorArr = actorArr.map(actor => {
        return actor.trim();
    })

    const handleInputChange = (e) => {
        const {value} = e.target;

        if(value.length <=120) {
            setQuestionText(value);
            setQuestionTextLength(value.length);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(questionText.length <= 120 && questionText.length > 0) {
            try {
                await submitHookQuestion({
                    variables: {
                        questionText: questionText,
                        movieId: props._id
                    }
                })
            } catch (err) {
                console.error(err);
            }
        } else if ( questionText.length > 120 ) {

        }

        setQuestionText('');
        setQuestionTextLength(0);
    }

    const hookQuestionButton = (
        <>
            {Auth.loggedIn() ? (
                <>
                <Stack direction='row' spacing={1}>
                    <TextField
                        fullWidth
                        multiline
                        maxRows={3}
                        id="addHook"
                        label={text}
                        variant="filled"
                        disabled={!seenIt}
                        value={questionText}
                        onChange={handleInputChange}
                    />
                    <Button 
                        variant='outlined'
                        disabled={!seenIt}
                        value={questionText}
                        onClick={handleSubmit}
                    > Add </Button>
                </Stack>
                {seenIt && <p>{questionTextLength}/120</p>}
                </>
            ) : (
                <Stack direction='row' spacing={1}>
                    <TextField
                        disabled
                        fullWidth
                        multiline
                        maxRows={3}
                        id="addHook"
                        label="Login to add a hook question"
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

                    <Divider sx={{ m: 2 }} />

                    <Typography align="center" variant="body1">
                        {props.description}
                    </Typography>

                    <Divider sx={{ m: 2 }} />

                    <Paper elevation={0} sx={{ ml: 2 }}>
                        <Stack direction='row' alignItems='flex-start' justifyContent='flex-start' spacing={2}>
                            <Grid item md={3} xs={12}>
                                <Typography variant="h6">
                                    Directed by:
                                </Typography>
                            </Grid>
                            <Grid item md={9} xs={12} lineHeight='1.6'>
                                <Typography variant="body1">
                                    {props.director}
                                </Typography>
                            </Grid>
                        </Stack>

                        <Stack direction='row' alignItems='flex-start' justifyContent='flex-start' spacing={2}>
                            <Grid item md={3} xs={12}>
                                <Typography variant="h6">
                                    Written by:
                                </Typography>
                            </Grid>
                            <Grid item md={9} xs={12} lineHeight='1.6'>
                                <Typography variant="body1">
                                    {props.writer}
                                </Typography>
                            </Grid>
                        </Stack>

                        <Stack direction='row' alignItems='flex-start' justifyContent='flex-start' spacing={2}>
                            <Grid item md={3} xs={12}>
                                <Typography variant="h6">
                                    Featuring:
                                </Typography>
                            </Grid>
                            <Grid item md={9} xs={12} lineHeight='1.6'>
                                <Stack direction='column'>
                                    {actorArr.map((actor) => (
                                        <Typography key={actor} variant="body1">
                                            {actor}
                                        </Typography>
                                    ))}
                                </Stack>
                            </Grid>
                        </Stack>
                    </Paper>

                    <Divider sx={{ m: 3 }} />

                    <Paper elevation={12} sx={{ p: 1 }}>
                        <Grid
                            container
                            direction="column"
                            alignItems="stretch"
                        >
                            <Grid item xs={6}>
                                <Typography variant="body2" align='center' color='#D97409' fontSize='1.1rem'>
                                    Seen It : {props.seenItCount} Fanz
                                </Typography>
                            </Grid>

                            <Divider sx={{ m: 1 }} />

                            {/* <Grid item xs={6}>
                                <Typography variant="body2" align='center' color='#D97409' fontSize='1.1rem'>
                                    {props.lovedItCount} out of {props.ratingTotal} Fanz Loved It!
                                </Typography>
                            </Grid>

                            <Divider sx={{ m: 1 }} /> */}

                            <Grid item xs={6} >
                                <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <SeenToggle
                                        _id={props._id}
                                    />
                                    {/* <LikedToggle/> */}
                                </Stack>
                            </Grid>

                        </Grid>
                    </Paper>

                    <Divider sx={{ m: 3 }} />

                    <Paper elevation={12} sx={{ p: 3 }}>
                        {hookQuestionButton}

                        <Divider sx={{ m: 3 }} />

                        <Typography variant="h6">
                            Hooks:
                        </Typography>
                        {props.hookQuestions.map((hook) => (
                            <Typography key={hook._id} variant="body1" sx={{ my: 2 }}>
                                {hook.questionText}
                            </Typography>
                        ))}
                    </Paper>

                </Grid>

                <Grid item md={6} xs={12} sx={{ mx: 'auto', p: 3 }}>
                    <Box component='img' src={props.poster} alt='movie poster' />
                </Grid>
            </Grid>
        </>
    )
};