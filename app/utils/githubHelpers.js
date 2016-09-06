var axios = require('axios');
var id = 'cfe06f977ec78604dc3d';
var secret = '73e6725bcbdeaa9a26e89ef0f49643ff04ac9947';
var param = '?client_id=' + id + '&client_secret=' + secret;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param);
}

function getRepos(username) {
  return axios.get('https://api.github.com/users/' + username +'/repos'+ param + '&per_page=100');
}

function getTotlaStars(repos) {
  return repos.data.reduce(function(prev, curr) {
    return prev + curr.stargazers_count;
  }, 0);
}

function getPlayersData(player) {
  return getRepos(player.login)
    .then(getTotlaStars)
    .then(function(totalStars) {
      return {
        followers: player.followers,
        totalStars: totalStars
      };
    });

}

function calculateScores(players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ];
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
  },

  battle: function(players) {
    var playerOneData = getPlayersData(players[0]);
    var playerTwoData = getPlayersData(players[1]);

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function(err) {
        console.warn("Error in the battle function", err);
      });
  }
};

module.exports = helpers;
