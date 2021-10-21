import ToggleButton from '@mui/material/ToggleButton';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Auth from '../../utils/auth';

export default function SeenToggle() {
    return (
        <>
            {Auth.loggedIn() ? (

                <ToggleButton value="placeholder value">
                    <RemoveRedEyeIcon />
                </ToggleButton>

            ) : (
                <ToggleButton disabled value="placeholder value">
                    <RemoveRedEyeIcon />
                </ToggleButton>
            )}
        </>
    )
};