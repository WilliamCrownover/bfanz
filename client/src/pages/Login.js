import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
	const [loginUser] = useMutation( LOGIN );

	const [showAlert, setShowAlert] = useState( null );

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);

		try {
			const { data } = await loginUser( {
				variables: {
					username: formData.get('username'),
					password: formData.get('password')
				}
			});

			if ( !data ) {
				throw new Error( 'something went wrong!' );
			}

			console.log(data);
			
			if ( data.login.success === true ) {
				Auth.login(data.login.token);
				return;
			}

			setShowAlert(data.login.message);

			setTimeout(() => {
				setShowAlert(null);
			}, 2000);

		} catch ( err ) {
			console.error( err );
		}
	};

	return (
		<Grid sx={{mt: 3}} container >
			<Grid sx={{ border: 1 }} item xs={12}>
				<Typography variant="h1">
					HERO BAR AREA
				</Typography>
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
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Login
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
							Login
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<RouterLink to="/signup" variant="body2">
									{"Don't have an account? Sign Up"}
								</RouterLink>
							</Grid>
							<Grid container sx={{mt: 1 }}>
								<Grid item>
									<p>{showAlert}</p>
								</Grid>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</Grid>
	);
};

export default Login;