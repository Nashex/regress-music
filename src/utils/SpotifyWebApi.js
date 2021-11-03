var request = require('request');

class SpotifyWebApi {
  constructor (client_id, client_secret) {
    this.client_id = client_id;
    this.client_secret = client_secret;
    this.authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Authorization': 'Basic ' + Buffer.from(this.client_id + ':' + this.client_secret).toString('base64')
      },
      form: {
        grant_type: 'client_credentials'
      },
      json: true
    };

    new Promise((res, rej) => {
      request.post(this.authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          res(body.access_token);
        } else {
          rej(error);
        }
      });
    }).then(res => this.token = res);
  }
  
  getAudioAnalysis(tracks) {
    return new Promise((res, rej) => {
      const options = {
        url: `https://api.spotify.com/v1/audio-features?ids=${tracks.join(',')}`,
        headers: {
          'Authorization': 'Bearer ' + this.token
        },
        json: true
      };
      request.get(options, function (error, response, body) {
        res(body);
      });
    });
  }

  getSearchResults(query) {
    return new Promise((res, rej) => {
      const options = {
        url: `https://api.spotify.com/v1/search?q=${query}&type=track&limit=5`,
        headers: {
          'Authorization': 'Bearer ' + this.token
        },
        json: true
      };
      request.get(options, function (error, response, body) {
        res(body);
      });
    })
  }
}

export default SpotifyWebApi;