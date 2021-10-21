// DETAILS PAGE COMPONENT INDEX.JS 
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
// import LikedToggle from '../../pages/AddMovie/LikedToggle';
import SeenToggle from '../../pages/AddMovie/SeenToggle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Auth from '../../utils/auth';


export default function DetailsPage(props) {

    let actorArr = props.actors.split(',');
    actorArr = actorArr.map(actor => {
        return actor.trim();
    })

    const hookQuestionButton = (
        <>
            {Auth.loggedIn() ? (
                <Stack direction='row' spacing={1}>
                    <TextField
                        fullWidth
                        multiline
                        maxRows={3}
                        id="addHook"
                        label="Add Hook"
                        variant="filled"
                    />
                    <Button variant='outlined'> Add </Button>
                </Stack>
            ) : (
                <Stack direction='row' spacing={1}>
                    <TextField
                        disabled
                        fullWidth
                        multiline
                        maxRows={3}
                        id="addHook"
                        label="Add Hook"
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

                    <Paper elevation={0} sx={{ml: 2}}>
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
                                    Seen It {props.seenPercent}%
                                </Typography>
                            </Grid>

                            <Divider sx={{ m: 1 }} />

                            <Grid item xs={6}>
                                <Typography variant="body2" align='center' color='#D97409' fontSize='1.1rem'>
                                    {props.lovedItCount} out of {props.ratingTotal} Fanz Loved It!
                                </Typography>
                            </Grid>

                            <Divider sx={{ m: 1 }} /> */

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