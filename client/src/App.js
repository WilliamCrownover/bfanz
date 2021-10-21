import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import logo from './logo.svg';
import './App.css';
import ResponsiveDrawer from './components/ResponsiveDrawer';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// *** OVERRIDE THEME *** ///
const theme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#f5c300',
      secondary: '#eceff1',
      disabled: '#ffffff'
    },
    primary: {
      main: '#f5c300'
    },
    secondary: {
      main: '#f5c300'
    },
    action: {
      active: '#eceff1',
      selected: '#eceff1',
      focus: '#eceff1'
    }, 
    background: {
      paper: '#000000',
      default: '#000000'
    },
   },
  typography: {
    fontFamily: 'Khand',
    button: {
      fontFamily: 'Khand',
    },
    body1: {
      fontFamily: 'Khand'
    },
    body2: {
      fontFamily: 'Khand'
    }
  },
});

function App() {
  return (
    <ApolloProvider client={client} >
      <ThemeProvider theme={theme}>
        <ResponsiveDrawer>
          <div className="App">

              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>

          </div>
        </ResponsiveDrawer>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
