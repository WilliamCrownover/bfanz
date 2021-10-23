import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import heroImage from './assets/hero.jpg'

import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
	const [addUser] = useMutation( ADD_USER );

	const [showAlert, setShowAlert] = useState( null );

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);

		try {
			const { data } = await addUser( {
				variables: {
					username: formData.get('username'),
					password: formData.get('password')
				}
			});

			if ( !data ) {
				throw new Error( 'something went wrong!' );
			}

			console.log(data);

			if ( data.signup.success === true ) {
				Auth.login(data.signup.token);
				return;
			}

			setShowAlert(data.signup.message);

			setTimeout(() => {
				setShowAlert(null);
			}, 2000);

		} catch ( err ) {
			console.error( err );
		}
	};

	return (
	<Container>
		<Grid container >
		<Grid item xs={12} sx={{display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box
                    component="img"
                    src={heroImage}
                    sx={{
                        maxWidth: '100%',
                        height: "auto",
                    }}
                />
            </Grid>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Signup
					</Typography>
					<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
						<TextField
							margin="normal"
							required
							fullWidth
							id="username"
							label="Username"
							name="username"
							autoComplete="username"
							autoFocus
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Signup
						</Button>
						<Grid container>
							<Grid item>
								<RouterLink to="/login" variant="body2">
									{"Already have an account? Login"}
								</RouterLink>
							</Grid>
						</Grid>
						<Grid container sx={{mt: 1 }}>
							<Grid item>
								<p>{showAlert}</p>
							</Grid>
						</Grid>

					</Box>
				</Box>
			</Container>
		</Grid>
	</Container>
	);
};

export default Signup;