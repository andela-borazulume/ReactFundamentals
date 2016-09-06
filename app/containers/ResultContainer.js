var React = require('React');
var Result = require('../components/Result');
var githubHelpers = require('../utils/githubHelpers');

var ResultContainer = React.createClass({
  getInitialState: function() {
    return ({
      isLoading: true,
      scores: []
    })
  },

  componentDidMount: function() {
    // console.log("=======>", this.props.location.state.playerInfo);
    githubHelpers.battle(this.props.location.state.playerInfo)
    .then(function(scores) {
      this.setState({
        isLoading: false,
        scores: scores
      })
    }.bind(this));
  },

  render: function() {
    return (
      <Result
        isLoading={this.state.isLoading}
        playerInfo={this.props.location.state.playerInfo}
        scores={this.state.scores} />
    )
  }
});

module.exports = ResultContainer;
