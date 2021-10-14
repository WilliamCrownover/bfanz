import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';


export default function BasicCard() {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Title
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    subtitle
                </Typography>
                <Typography variant="body2">
                    Hook Question
                </Typography>
            </CardContent>
            <CardContent>
                <Stack direction="row" justifyContent="center" spacing={1}>
                    <Paper sx={{ p: 2 }}  elevation={3} >
                        <Typography variant="body2">
                            Rating 1
                        </Typography>
                    </Paper>
                    <Paper sx={{ p: 2 }} elevation={3} >
                        <Typography variant="body2">
                            Rating 2
                        </Typography>
                    </Paper>
                </Stack>
            </CardContent>
        </Card>
    );
}
