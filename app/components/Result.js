var React = require('react');
var PropTypes = React.PropTypes;

function puke(object) {
  return (
    <pre>{JSON.stringify(object, null, ' ')} </pre>
  );
}

function Result(props) {
  return(
    <div>
      Hello: {puke(props)}
    </div>
  );
}

Result.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playerInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}
module.exports = Result;
