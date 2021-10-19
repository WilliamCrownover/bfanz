import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';

import AddForm from './AddForm';

const AddMovie = () => {
    const [checked, setChecked] = React.useState(false);

    const handleCheck = () => {
        setChecked(!checked)
    }

    return (
        <>
            {/* if checked === true removed the overlay */}
            {checked ? (
                //  minWidth is to prevent buttons from being hidden
                <Container sx={{ my: 3, minWidth: 450 }} maxWidth="md">
                    <Grid
                        container
                        direction='row'
                        justifyContent='center'
                        alignItems='center'
                        spacing={{ xs: 2, md: 3 }}
                    >
                        <Grid item xs={9} sx={{ zIndex: 10 }}>
                            <TextField
                                fullWidth
                                id="check-movies"
                                label="Enter Title"
                                variant="outlined" />
                        </Grid>
                        <Grid item xs={3} sx={{ zIndex: 10 }}>
                            <Button size="large" variant='outlined' onClick={handleCheck}> Check </Button>
                        </Grid>

                        <Grid item xs={12}>
                            <AddForm />
                        </Grid>
                    </Grid>
                </Container>
            ) : (
                // if checked === false hide the form behind an overlay
                <Container sx={{ my: 3, minWidth: 450 }} maxWidth="md">
                    <Grid
                        container
                        direction='row'
                        justifyContent='center'
                        alignItems='center'
                        spacing={{ xs: 2, md: 3 }}
                    >
                        <Grid item xs={9} sx={{ zIndex: 10 }}>
                            <TextField
                                fullWidth
                                id="check-movies"
                                label="Enter Title"
                                variant="outlined" />
                        </Grid>
                        <Grid item xs={3} sx={{ zIndex: 10 }}>
                            <Button size="large" variant='outlined' onClick={handleCheck}> Check </Button>
                        </Grid>

                        <Grid item xs={12}>
                            <Box sx={{ postion: 'relative' }}>
                                <AddForm />
                                <Backdrop
                                    open={true}
                                    sx={{
                                        color: '#fff',
                                        zIndex: 1
                                    }}
                                >
                                    <Typography>
                                        Please Search for a Movie first
                                    </Typography>
                                </Backdrop>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            )}
        </>
    );
};

export default AddMovie;