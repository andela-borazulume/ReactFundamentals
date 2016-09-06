var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  //Make the routes available in this component
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  //Initializing by setting state as empty string
  getInitialState: function() {
    return {
      username: ''
    };
  },

//Gets the text from the input
  handleUpdateUser: function(e) {
    this.setState({
      username: e.target.value
    });
  },

//Continue button
  handleSubmitUser: function(e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });

//does it mean that query is already inside props
    if(this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      });
    } else {
      this.context.router.push('/playerTwo/' + this.state.username);
    }
  },

  render: function() {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username} />
    );
  }
});

module.exports = PromptContainer;
