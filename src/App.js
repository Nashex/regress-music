import React, { useState } from 'react'
import { Grid, Container, TextField, Toolbar, Typography, AppBar, Paper } from '@mui/material';
import SpotifyWebApi from './utils/SpotifyWebApi';
import Track from './components/Track';
import './App.css'
import { Box } from '@mui/system';


const spotify = new SpotifyWebApi(process.env.REACT_APP_CLIENT_ID, process.env.REACT_APP_CLIENT_SECRET);

function App() {
  const [tracks, setTracks] = useState([]);

  const handleChange = async (event) => {
    const { value } = event.target
    if (value) {
      spotify.getSearchResults(value).then((res) => {
        const trackRes = res.tracks.items
        spotify.getAudioAnalysis(res.tracks.items.map(o => o.id)).then((res) => {
          res.audio_features.forEach((o, i) => trackRes[i].audio_features = o);
        }).then(() => {
          setTracks(trackRes);
        });

      })
    } else {
      setTracks([]);
    }
  }

  return (
    <>
      <Container >
        <Box sx={{ marginTop: 2 }} elevation={5}>
          <Typography variant="h5" sx={{fontWeight: 'bold'}}>
            Regress It | Music
          </Typography>
          <Paper sx={{my:1}} elevation={2}>
            <TextField
              fullWidth margin="none"
              placeholder="Search Spotify Songs"
              onChange={handleChange}
            />
          </Paper>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} key={0}>

          </Grid>
          {tracks ? tracks.map((o, i) => {
            return (
              <Grid item xs={12} key={o.id}>
                <Track track={o} />
              </Grid>
            )
          }) : <></>}
        </Grid>
      </Container>
    </>
  );
}

export default App;
