import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import CardActionArea from '@mui/material/CardActionArea';
import { BrowserRouter as Link } from 'react-router-dom';

export default function BasicCard() {
    return (
        <Link to="/AddMovie">
            <Card sx={{ minWidth: 275 }}>
                <CardActionArea>
                    <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography variant="h5" component="div">
                            Add New Movie
                        </Typography>
                    </CardContent>
                    <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
                        <AddIcon />
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}
