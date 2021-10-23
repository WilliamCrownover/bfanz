// ADD MOVIE BUTTON COMPONENT INDEX.JS 
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Link as RouterLink } from 'react-router-dom';

export default function BasicCard() {
    return (
        <RouterLink to="/AddMovie" style={{ textDecoration: 'none' }}>
            <Card sx={{ minWidth: 270 }}>
                <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography variant="h5" component="div">
                        Add New Movie
                    </Typography>
                </CardContent>
                <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Fab aria-label="add" sx={{ backgroundColor: '#f5c300' }}>
                        <AddIcon />
                    </Fab>
                </CardContent>
            </Card>
        </RouterLink >
    );
}
