import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import CardActionArea from '@mui/material/CardActionArea';




export default function BasicCard() {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardActionArea href="#AddMovie">
                <CardContent>
                    <Typography variant="h5" component="div">
                        Add New Movie
                    </Typography>
                </CardContent>
                <CardContent>
                    <AddIcon />
                </CardContent>
            </CardActionArea>
        </Card>
    );
}