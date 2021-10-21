// import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useState } from 'react';

import AddForm from './AddForm';
import { fetchMovie } from '../../utils/helpers';

const AddMovie = () => {
    // Removed setChecked function as it was unused.
    const [checked, ] = useState(false);
    const [titleSearch, setTitleSearch] = useState('');

    // const handleCheck = () => {
    //     setChecked(!checked)
    // };

    const handleInputChange = (e) => {
        const { value } = e.target;

        return setTitleSearch(value);
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();

        // THIS IS WHERE THE 3RD PARTY DATA COMES FROM!
        console.log(await fetchMovie(titleSearch));

        // setTitleSearch('');
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
                                variant="outlined"
                                value={titleSearch}
                                onChange={handleInputChange} 
                            />
                        </Grid>
                        <Grid item xs={3} sx={{ zIndex: 10 }}>
                            <Button size="large" variant='outlined' onClick={handleSearchSubmit}> Check </Button>
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
                                variant="outlined"
                                value={titleSearch}
                                onChange={handleInputChange} 
                            />
                        </Grid>
                        <Grid item xs={3} sx={{ zIndex: 10 }}>
                            <Button size="large" variant='outlined' onClick={handleSearchSubmit}> Check </Button>
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
                                    <Paper elevation={6} sx={{p:2}} >
                                        <Typography variant="h5" align="center">
                                            Please Search for a Movie first
                                        </Typography>
                                    </Paper>
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