import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function SeenToggle() {
    return (
        <ToggleButtonGroup
            value='placeholder value'
            exclusive
            onChange='placeholder function'
        >
            <ToggleButton value="placeholder value">
                <RemoveRedEyeIcon />
            </ToggleButton>
            <ToggleButton value="placeholder value">
                <VisibilityOffIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    )
};