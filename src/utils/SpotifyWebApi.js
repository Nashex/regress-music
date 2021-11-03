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
  }
  // your application requests authorization
  

  getSearchResults(query) {
    return new Promise((res, rej) => {
      request.post(this.authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
  
          // use the access token to access the Spotify Web API
          var token = body.access_token;
          var options = {
            url: `https://api.spotify.com/v1/search?q=${query}&type=track`,
            headers: {
              'Authorization': 'Bearer ' + token
            },
            json: true
          };
          request.get(options, function (error, response, body) {
            res(body);
          });
        } else {
          rej(error);
        }
      });
    })
  }
}

export default SpotifyWebApi;