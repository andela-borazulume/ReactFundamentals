var React = require('react');
var ReactDOM = require('react-dom');
// var routes = require('./config/routes');

var ANIMAL_TYPE = {
  animalName: "Bingo or Jack",
  image: "https://pixabay.com/static/uploads/photo/2016/02/19/15/46/dog-1210559_960_720.jpg",
  imageUrl: "https://pixabay.com/static/uploads/photo/2016/02/19/15/46/dog-1210559_960_720.jpg"
};

var GetImageName = React.createClass({
  render: function() {
    return <h2>{this.props.animalName}</h2>
  }
});

var GetImage = React.createClass({
  render: function() {
    return <img src={this.props.image} style={{height: 200, width: 100}} />
  }
});

var LinkMe = React.createClass({
  changeUrl: function() {
    window.location.replace(this.props.href);
  },
  render: function() {
    return <span style={{color: 'green', cursor: 'pointer'}} onClick={this.changeUrl}>{this.props.children}</span>
  }
});

var GetImageUrl = React.createClass({
  render: function() {
    return(
      <div>
        <LinkMe href={this.props.imageUrl}>{this.props.animalName}</LinkMe>
        </div>
      )
  }
});

var Testing = React.createClass({
  render: function() {
    return (
      <div>
        <GetImageName animalName={this.props.user.animalName} />
        <GetImage image={this.props.user.image} />
        <GetImageUrl imageUrl={this.props.user.imageUrl} animalName={this.props.user.animalName} />
      </div>
    );
  }
});

ReactDOM.render(<Testing user={ANIMAL_TYPE} />, document.getElementById("app") );
