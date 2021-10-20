import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import LikedToggle from '../../pages/AddMovie/LikedToggle';
import SeenToggle from '../../pages/AddMovie/SeenToggle';

export default function DetailsPage(props) {

    return (
        <>
            <Grid item xs={12}>
                <Typography align="center" variant="h3">
                    {props.title}
                </Typography>
            </Grid>
            <Divider sx={{ m: 3 }} />
            <Grid item md={7} sx={{ mx: 'auto' }}>
                <Typography align="center" variant="body1">
                    {props.description}
                </Typography>
            </Grid>
            <Divider sx={{ m: 3 }} />
            <Grid item xs={12}>
                <Grid
                    container
                    direction="row"
                    justifyContent='center'
                    alignItems="center"
                    columnSpacing={3}
                >
                    {/* left column */}
                    <Grid item xs={12} md={6}>
                        <Paper elevation={12} sx={{ p: 1 }}>
                            <Grid
                                container
                                direction="column"
                                alignItems="stretch"
                            >
                                <Grid item xs={6}>
                                    <Typography variant="body2" align='center'>
                                        Seen It {props.seenPercent}%
                                    </Typography>
                                </Grid>

                                <Divider sx={{ m: 1 }} />

                                <Grid item xs={6}>
                                    <Typography variant="body2" align='center'>
                                        {props.lovedItCount} out of {props.ratingTotal} Fanz Loved It!
                                    </Typography>
                                </Grid>

                                <Divider sx={{ m: 1 }} />

                                <Grid item xs={6} >
                                    <Stack direction="row" spacing={2} sx={{justifyContent: 'center'}}>
                                        <SeenToggle />
                                        <Divider orientation="vertical" flexItem />
                                        <LikedToggle />
                                    </Stack>
                                </Grid>

                            </Grid>
                        </Paper>
                    </Grid>

                    {/* right column */}
                    <Grid item xs={12} md={6}>
                        <Paper elevation={12} sx={{ p: 1 }}>
                        </Paper>
                    </Grid>

                </Grid>
            </Grid>
        </>
    )
};