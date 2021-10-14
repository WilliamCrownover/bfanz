import TextField from '@mui/material/TextField';

export default function SearchBar(props) {
    return (
        <TextField fullWidth id="outlined-basic" label={props.label} variant="outlined" />
    );
}