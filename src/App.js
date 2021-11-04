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
          <Box display="flex" justifyContent="center">
            <Typography variant="h4" sx={{ fontWeight: 'bold' }} onClick={() => setTracks([])}>
              
              Regress It | Music
            </Typography>
          </Box>
          <Paper sx={{ my: 1 }} elevation={2}>
            <TextField
              fullWidth margin="none"
              placeholder="Search Songs by Title or Artist"
              onChange={handleChange}
            />
          </Paper>
          {!tracks.length ? (
            <Paper elevation={2} sx={{ p: 2, my: 2 }}>
              <Typography variant="h6">
                Welcome to Regress it
              </Typography>
              <Typography variant="body1">
                To look at songs audio features just type a query into the seach bar!
              </Typography>
            </Paper>
          ) : <></>}
        </Box>
        <Grid container spacing={2}>
          {tracks ? tracks.map((o, i) => {
            return (
              <Grid item xs={12} key={o.id}>
                <Track track={o} />
              </Grid>
            )
          }) : (<></>)}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 5, alignItems: 'center' }}>
          <Box
            sx={{ height: '30px', m: 1 }}
            component="img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png"
          />
          <Typography variant="overline">
            Powered by the Spotify API
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default App;
