var axios = require('axios');

function getUserInfo(username) {
  var id = 'cfe06f977ec78604dc3d';
  var secret = '73e6725bcbdeaa9a26e89ef0f49643ff04ac9947';
  var param = '?client_id=' + id + '&client_secret=' + secret;

  return axios.get('https://api.github.com/users/' + username + param);
}

var helpers = {
  getPlayersInfo: function(players) {
    //make github API call here
    return axios.all(players.map(function(username) {
      return getUserInfo(username);
    })).then(function(info) {
      return info.map(function(user) {
          return user.data;
      });
    }).catch(function(err) {
      console.warn("Error in getPlayersInfo");
    });
  }
};

module.exports = helpers;
