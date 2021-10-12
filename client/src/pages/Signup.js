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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
	const [addUser] = useMutation( ADD_USER );

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
			Auth.login(data.signup.token);

		} catch ( err ) {
			console.error( err );
		}
	};

	const theme = createTheme();

	return (
		<Grid container >
			<Grid sx={{ border: 1 }} item xs={12}>
				<Typography variant="h1">
					HERO BAR AREA
				</Typography>
			</Grid>
			<ThemeProvider theme={theme}>
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
									<Link href="/login" variant="body2">
										{"Already have an account? Login"}
									</Link>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Container>
			</ThemeProvider>
		</Grid>
	);
};

export default Signup;