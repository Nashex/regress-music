import React, { useEffect, useState } from 'react'
import { Grid, Container, TextField, Typography, Paper, Box } from '@mui/material';
import Track from './../components/Track';
import SpotifyWebApi from './../utils/SpotifyWebApi'
import { useHistory } from 'react-router';
import { parse } from "query-string";

let spotify = new SpotifyWebApi(process.env.REACT_APP_CLIENT_ID, process.env.REACT_APP_CLIENT_SECRET);

const styles = {
  welcome: {
    p: 2,
    my: 2
  }
}

export default function Search(props) {
  const [tracks, setTracks] = useState([]);
  const [search, setSearch] = useState("");
  const history = useHistory();

  useEffect(() => {
    const params = parse(props.location.search);
    if (params.q && params.q.trim().length) {
      setSearch(params.q);
    }
  }, [props.location.search]);

  useEffect(() => {
    if (search.trim().length) {
      spotify.getSearchResults(search).then(async (res) => {
        const trackRes = res.tracks.items
        await new Promise(res => setTimeout(res, 150));
        spotify.getAudioAnalysis(res.tracks.items.map(o => o.id)).then((res) => {
          if (res.audio_features) {
            res.audio_features.forEach((o, i) => trackRes[i].audio_features = o);
          }
        }).then(() => {
          setTracks(trackRes);
        });

      });
      history.push({
        pathname: '/search',
        search: `q=${search}`
      });
    } else {
      setTracks([]);
      history.push({
        pathname: '/',
      });
    }
  }, [history, search])

  const handleChange = async (event) => {
    setSearch(event.target.value);
  }

  return (
    <Container >
      <Box my={2} elevation={5}>
        <Paper my={1} elevation={2}>
          <TextField
            fullWidth
            placeholder="Search Songs by Title or Artist"
            onChange={handleChange}
          />
        </Paper>
        {!tracks.length ? (
          <Paper elevation={2} sx={styles.welcome}>
            <Typography variant="h6">
              Welcome to Regress it
            </Typography>
            <Typography variant="body1">
              To look at a song's audio features just type a query into the search bar!
            </Typography>
          </Paper>
        ) : <></>}
      </Box>
      <Grid container spacing={2}>
        {tracks ? tracks.map(o => {
          return (
            <Grid item xs={12} key={o.id}>
              <Track track={o} />
            </Grid>
          )
        }) : (<></>)}
      </Grid>
    </Container>
  )
}
