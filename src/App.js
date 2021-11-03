import { AppBar, Container, TextField, Toolbar, Typography } from '@mui/material';
import SpotifyWebApi from './utils/SpotifyWebApi';

const spotify = new SpotifyWebApi(process.env.REACT_APP_CLIENT_ID, process.env.REACT_APP_CLIENT_SECRET);

function App() {

  const handleChange = (event) => {
    const {value} = event.target
    if (value) {
      spotify.getSearchResults(value).then((res) => console.log(res))
    }
  }

  return (
    <>
      <Container>
        <TextField
          fullWidth margin="normal"
          placeholder="Search Spotify Songs"
          onChange={handleChange}
        />
      </Container>
    </>
  );
}

export default App;
