import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function AddCrewCard() {
    return (
        <Container>
            <Card sx={{ minWidth: 275, minHeight: 200 }}>
                <CardHeader title='Director(s) and Actor(s)' />
                <CardContent >
                    <Typography sx={{ my: 2 }}>
                        Cast/Crew List:
                    </Typography>
                    <List>
                        {/* Function to generate full list */}
                        <ListItem>
                            <ListItemText
                                primary="Placeholder Name"
                                secondary='Placeholder Role'
                            />
                        </ListItem>
                    </List>
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
                        <Button sx={{ mt: 1 }} size="large" variant='outlined' color="primary"> Add Cast/Crew</Button>
                    </FormControl>

                </CardContent>
            </Card>
        </Container>
    );
};