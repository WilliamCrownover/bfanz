import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Auth from '../../utils/auth';

export default function SeenToggle() {
    return (
        <>
            {Auth.loggedIn() ? (
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
            ) : (
                <ToggleButtonGroup
                    value='placeholder value'
                    disabled
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
            )}
        </>
    )
};