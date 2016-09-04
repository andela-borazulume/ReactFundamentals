var React = require('react');

var Main = React.createClass({
  render: function() {
    return (
      <div> Hello Main!!</div>
      {this.props.children}
    )
  }
});

module.exports = Main;
