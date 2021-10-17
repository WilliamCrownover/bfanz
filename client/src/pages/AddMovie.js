import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import MoodIcon from '@mui/icons-material/Mood';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const AddMovie = () => {
    return (

        <Container sx={{ my: 3 }} maxWidth="md">
            <Grid
                container
                direction='row'
                justifyContent='center'
                alignItems='center'
                spacing={{ xs: 2, md: 3 }}
            >
                <Grid item xs={9}>
                    <TextField fullWidth id="check-movies" label="Enter Title" variant="outlined" />
                </Grid>
                <Grid item xs={3}>
                    <Button size="large" variant='outlined'> Check </Button>
                </Grid>

                {/* everything below here should be disabled until a check has been completed */}
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

                <Grid item xs={12}>
                    {/* Lower Grid Area */}
                    <Container>
                        <Grid
                            container
                            direction="row"
                            justifyContent='center'
                            alignItems="stretch"
                            rowSpacing={1}
                        >
                            {/* Left column*/}
                            <Grid item xs={12} md={6} sx={{ color: 'black' }}>
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
                            </Grid>

                            {/* Rigth column Directors/Actors box*/}
                            <Grid item xs={12} md={6}>
                                <Container>
                                    <Card sx={{ minWidth: 275, minHeight: 200 }}>
                                        <CardHeader title='Add Director(s) and Actor(s)' />
                                        <CardContent >
                                            <TextField fullWidth id="add-crew" label="Enter Name" variant="outlined" sx={{ py: 1 }} />
                                            <FormControl fullWidth>
                                                <InputLabel id="add-crew-role-label">Select Role</InputLabel>
                                                <Select
                                                    labelId="add-crew-role-label"
                                                    id="add-crew-role"
                                                    value={'role'}
                                                    label="Role"
                                                    onChange={'setRole function'}
                                                >
                                                    <MenuItem value={'Director'}>Director</MenuItem>
                                                    <MenuItem value={'Actor'}>Actor</MenuItem>
                                                </Select>
                                                <Button sx={{ mt: 1 }} size="large" variant='outlined'> Add </Button>
                                            </FormControl>
                                            <Typography sx={{ my: 2 }}>
                                                Crew List:
                                            </Typography>
                                            <List>
                                                {/* Function to generate full list */}
                                                <ListItem>
                                                    <ListItemText
                                                        primary="Crew Name"
                                                        secondary='Role'
                                                    />
                                                </ListItem>
                                            </List>
                                        </CardContent>
                                    </Card>
                                </Container>
                            </Grid>

                        </Grid>
                    </Container>
                </Grid>
                <Grid item>
                    <Button size="large" variant='outlined'> Add </Button>
                    {/* <Button disabled size="large" variant='outlined'> Add </Button> */}
                </Grid>
            </Grid>
        </Container>

    );
};

export default AddMovie;