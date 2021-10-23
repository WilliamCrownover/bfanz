// RESPONSIVE DRAWER COMPONENT INDEX.JS 
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import LocalMoviesSharpIcon from '@mui/icons-material/LocalMoviesSharp';
import TheaterComedySharpIcon from '@mui/icons-material/TheaterComedySharp';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import './ResponsiveDrawer.css';
import { useQuery } from '@apollo/client';
import { GET_RANDOM_HOOK_QUESTIONS } from '../../utils/queries';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from '../../pages/Home';
import About from '../../pages/About';
import Dashboard from '../../pages/Dashboard';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
import AddMovie from '../../pages/AddMovie';

import Auth from '../../utils/auth';
import MovieDetails from '../../pages/MovieDetails';
import { client } from '../../App';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const randomHook = useQuery(GET_RANDOM_HOOK_QUESTIONS, {
		variables: {
			numberOfMovies: 1
		}
	});

  const getNewSurprise = async () => {
        await client.refetchQueries({
            include: [GET_RANDOM_HOOK_QUESTIONS]
        });
  }
 	const movieData = randomHook.data?.getRandomMovies || {}

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const buttonSet1 = [
    {
      text: 'Home',
      link: '/',
      icon: <HomeSharpIcon />
    },
    {
      text: 'View Collection',
      link: '/collection',
      icon: <LocalMoviesSharpIcon />
    },
    {
      text: 'Surprise',
      link: `/movieDetails/${movieData[0]?._id}`,
      icon: <TheaterComedySharpIcon />
    },
    {
      text: 'About',
      link: '/about',
      icon: <InfoSharpIcon />
    }
  ];

  const drawer = (
    <div>

      <Toolbar />
      <Divider />
      <List sx={{ mt: 6 }}>
        {buttonSet1.map((navButton, index) => (
          <Link to={navButton.link} key={navButton.text} style={{ textDecoration: 'none' }} onClick={getNewSurprise}>
            <ListItem button >
              <ListItemIcon>
                {navButton.icon}
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText sx={{ typography: 'body2', fontSize: '1.4rem' }} primary={navButton.text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />

      {Auth.loggedIn() ? (
        <>
          <Link to='/' key='Logout' onClick={Auth.logout} style={{ textDecoration: 'none' }}>
            <ListItem button >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='Logout' />
            </ListItem>
          </Link>
        </>
      ) : (
        <>
          <Link to='/login' key='Login/Sign Up' style={{ textDecoration: 'none' }}>
            <ListItem button >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='Login/Sign Up' />
            </ListItem>
          </Link>
        </>
      )}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ display: { sm: 'none' } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>

      <Router>

        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              fontSize: 32,
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ flexGrow: 1, p: 0, mt: { xs: "50px", sm: "0" } }}>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/collection' component={Dashboard} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/AddMovie' component={AddMovie} />
            <Route exact path='/movieDetails/:movieId' component={MovieDetails} />
            <Route path='/' component={Home} />
          </Switch>

        </Box>
      </Router>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
