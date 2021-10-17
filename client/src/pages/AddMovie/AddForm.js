import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import RatingCard from './RatingCard'
import AddCrewCard from './AddCrewCard'

export default function addForm() {
    return (
        <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={{ xs: 2, md: 3 }}
        >
            <Grid item xs={12}>
                <TextField fullWidth id="title" label="Movie Title" variant="standard" />
                {/* <TextField disabled fullWidth id="title" label="Movie Title" variant="standard" /> */}
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth id="hook-questions" label="Hook" variant="standard" />
                {/* <TextField disabled fullWidth id="hook-questions" label="Hook" variant="standard" /> */}
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth id="description" label="Description" variant="filled" />
                {/* <TextField disabled fullWidth id="description" label="Description" variant="filled" /> */}
            </Grid>

            {/* Lower Grid Area */}
            <Grid item xs={12}>
                <Container>
                    <Grid
                        container
                        direction="row"
                        justifyContent='center'
                        alignItems="stretch"
                        rowSpacing={1}
                    >
                        {/* RatingCard*/}
                        <Grid item xs={12} md={6} sx={{ color: 'black' }}>
                            <RatingCard />
                        </Grid>

                        {/* CrewCard*/}
                        <Grid item xs={12} md={6}>
                            <AddCrewCard />
                        </Grid>

                    </Grid>
                </Container>
            </Grid>
            <Grid item>
                <Button size="large" variant='outlined'> Add Movie</Button>
                {/* <Button disabled size="large" variant='outlined'> Add </Button> */}
            </Grid>
        </Grid>
    );
};