var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      isLoading: true,
      playerInfo: []
    }
  },

  componentDidMount: function() {
    //how did it get this query
    var query = this.props.location.query;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    .then(function(players) {
      this.setState({
        isLoading: false,
        playerInfo: [players[0], players[1]]
      });
    }.bind(this));
  },

  handelInitateBattle: function() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playerInfo: this.state.playerInfo
      }
    });
  },

  render: function() {
    return (
      <ConfirmBattle
      isLoading={this.state.isLoading}
      onInitiateBattle={this.handelInitateBattle}
      playerInfo={this.state.playerInfo} />
    );
  }
});

module.exports = ConfirmBattleContainer;
