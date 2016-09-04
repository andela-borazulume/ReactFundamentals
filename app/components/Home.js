var React = require('react');
var ReactRouter = require('react-router');
var changeBackgroundColor = require('../styles').changeBackgroundColor;
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function() {
    return (
      <div className='jumbotron col-sm-12 text-center' style={changeBackgroundColor}>
        <h1>Github Battle</h1>
        <p className='lead'> Just messing around</p>
    
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-success'>Let us go</button>
        </Link>
      </div>
    );
  }
});

module.exports = Home;
