import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SeenToggle from './SeenToggle';
import LikedToggle from './LikedToggle';

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
                        {/* Rating box */}
                        <Grid item xs={6} >
                            <Container >
                                {/* top row */}
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                >

                                    {/* Seen it / Not seen it bar */}
                                    <Grid item sx={{ border: 1 }} xs={12}>
                                        Seen it / Not seen it bar
                                    </Grid>
                                    {/* Loved It / Hated it bar */}
                                    <Grid item sx={{ border: 1}} xs={12}>
                                        Loved It / Hated it bar
                                    </Grid>
                                </Grid>
                                
                                {/* Seen it / Liked it button row */}
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    sx={{}}
                                >
                                    <Grid item sx={{ border: 1 }} xs={6}>
                                        {/* Seen it toggle */}
                                        <SeenToggle />
                                    </Grid>
                                    <Grid item sx={{ border: 1, overflow: 'hidden'}} xs={6}>
                                        {/* Liked it toggle */}
                                        <LikedToggle />
                                    </Grid>
                                </Grid>
                            </Container>
                        </Grid>

                        {/* Post Image Area */}
                        {/* will probably need to limit width */}
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