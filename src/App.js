import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './App.css'
import Search from './pages/Search';
import Header from './components/Header';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: '#a3176b',
    }
  }
})


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Search />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
