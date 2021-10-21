import ToggleButton from '@mui/material/ToggleButton';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Auth from '../../utils/auth';
import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_SEENIT } from '../../utils/mutations';
import { GET_ME } from '../../utils/queries';

export default function SeenToggle(props) {
    const { data } = useQuery(GET_ME); // Remember this can have a loading parameter
    const user = data?.me || {};
    console.log("~ user", user);

    const [seenIt, setSeenIt] = useState(false);

    const [updateSeenItCount] = useMutation(UPDATE_SEENIT)

    const handleToggle = async (e) => {
        e.preventDefault();

        if(!seenIt) {
            try {
                const {data} = await updateSeenItCount({
                    variables: {
                        id: props._id,
                        count: 1
                    }
                });

                console.log("count", data.updateSeenItCount.seenItCount);
            } catch (err) {
                console.error(err);
            }
        } else {
            try {
                const {data} = await updateSeenItCount({
                    variables: {
                        id: props._id,
                        count: -1
                    }
                });

                console.log("count", data.updateSeenItCount.seenItCount);
            } catch (err) {
                console.error(err);
            }
        }

        setSeenIt(!seenIt);
    };

    return (
        <>
            {Auth.loggedIn() ? (

                <ToggleButton 
                    value="placeholder value" 
                    selected={seenIt}
                    onChange={handleToggle}
                >
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