import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Search from './pages/Search';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
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
          <Route path="/" component={Search} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
