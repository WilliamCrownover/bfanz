import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import MoodIcon from '@mui/icons-material/Mood';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export default function RatingCard() {
    return (
        <Container>
            <Card sx={{ minWidth: 275, minHeight: 200 }}>
                <CardContent>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="stretch"
                    >
                        {/* Top box */}
                        <Grid item xs={6} >
                            <Container >
                                {/* top row */}
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    sx={{}}
                                >
                                    {/* look into percentage/rating bar */}
                                    {/* top row */}
                                    <Grid item sx={{ border: 1 }} xs={12}>
                                        Seen it / Not seen it bar
                                    </Grid>
                                    {/* 2nd row */}
                                    <Grid item sx={{ border: 1 }} xs={12}>
                                        Loved It / Hated it bar
                                    </Grid>
                                </Grid>
                                {/* Icon row */}
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    sx={{}}
                                >
                                    <Grid item sx={{ border: 1 }} xs={6}>
                                        <RemoveRedEyeIcon />
                                        <VisibilityOffIcon />
                                    </Grid>
                                    <Grid item sx={{ border: 1 }} xs={6}>
                                        <MoodIcon />
                                        <MoodBadIcon />
                                    </Grid>
                                </Grid>
                            </Container>
                        </Grid>
                        {/* Post Image Area */}
                        <Container>
                            <Grid item sx={{ border: 1, mt: 3 }} xs={12}>
                                Poster Image
                            </Grid>
                        </Container>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
};