import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import MoodIcon from '@mui/icons-material/Mood';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';

export default function LikedToggle() {
    return (
        <ToggleButtonGroup
            value='placeholder value'
            exclusive
            onChange='placeholder function'
        >
            <ToggleButton value="Liked it">
                <MoodIcon />
            </ToggleButton>
            <ToggleButton value="Neutral about it">
                <SentimentNeutralIcon />
            </ToggleButton>
            <ToggleButton value="Did not like it">
                <MoodBadIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    )
};