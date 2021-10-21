import ToggleButton from '@mui/material/ToggleButton';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Auth from '../../utils/auth';
// import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_SEEN_MOVIE, REMOVE_SEEN_MOVIE, UPDATE_SEENIT } from '../../utils/mutations';
import { GET_ME } from '../../utils/queries';

export default function SeenToggle(props) {
    const { loading, data } = useQuery(GET_ME);
    const user = data?.me || {moviesSeen:[]};
    // For testing purposes
    // console.log("~ user", user);

    let seenIt = false;
    let disable = false;
    let text = "Have you seen it?"

    setTimeout(() => {
        disable = true;
    }, 2000);

    if(!loading) {
        for(let i = 0; i < user.moviesSeen.length; i++) {
            if(user.moviesSeen[i] === props._id) {
                seenIt = true;
                text = "Another film off the list!"
            }
        };
    };

    // const [seenIt, setSeenIt] = useState(false);

    const [updateSeenItCount] = useMutation(UPDATE_SEENIT);
    const [addMovieToUser] = useMutation(ADD_SEEN_MOVIE);
    const [removeMovieFromUser] = useMutation(REMOVE_SEEN_MOVIE);

    const handleToggle = async (e) => {
        e.preventDefault();

        disable = !disable;

        if(!seenIt) {
            try {
                await updateSeenItCount({
                    variables: {
                        id: props._id,
                        count: 1
                    }
                });

                // For testing purposes
                // console.log("count", data.updateSeenItCount.seenItCount);

                await addMovieToUser({
                    variables: {
                        movieId: props._id
                    }
                })

            } catch (err) {
                console.error(err);
            }
        } else {
            try {
                await updateSeenItCount({
                    variables: {
                        id: props._id,
                        count: -1
                    }
                });

                // For testing purposes
                // console.log("count", data.updateSeenItCount.seenItCount);

                await removeMovieFromUser({
                    variables: {
                        movieId: props._id
                    }
                })

            } catch (err) {
                console.error(err);
            }
        }

        seenIt = !seenIt;
        disable = !disable;
    };

    return (
        <>
            {Auth.loggedIn() && !loading? (

                <>
                    <p style={{display: 'inline'}}>{text}</p>
                    <ToggleButton 
                        value="placeholder value" 
                        selected={seenIt}
                        onClick={handleToggle}
                        disabled={disable}
                    >
                        <RemoveRedEyeIcon />
                    </ToggleButton>
                </>

            ) : (
                <>
                    <p style={{display: 'inline'}}>Login to mark as "Seen It"</p>
                    <ToggleButton disabled value="placeholder value">
                        <RemoveRedEyeIcon />
                    </ToggleButton>
                </>
            )}
        </>
    )
};