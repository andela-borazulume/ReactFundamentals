var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var styles = require('../styles');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');

function puke(object) {
  return (
    <pre>{JSON.stringify(object, null, ' ')} </pre>
  );
}

function ConfirmBattle(props) {
  return props.isLoading === true
    ? <p>LOADING!! </p>
    : <div className="jumbotron col-sm-12 text-center" style={styles.changeBackgroundColor}>
        <h1>Confirm Players</h1>
        <div className="col-sm-8 col-sm-offset-2"></div>
          <UserDetailsWrapper header="Player One">
            <UserDetails info={props.playerInfo[0]} />
          </UserDetailsWrapper>

          <UserDetailsWrapper header="Player Two">
            <UserDetails info={props.playerInfo[1]} />
          </UserDetailsWrapper>

      <div className="col-sm-8 col-sm-offset-2">
        <div className="col-sm-12" style={styles.space}>
          <button className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
            Initiate Battle
          </button>
        </div>

        <div className="col-sm-12" style={styles.space}>
          <Link to="/playerOne">
            <button className="btn btn-lg btn-danger">
              Reselect Players
            </button>
          </Link>
        </div>
      </div>
    </div>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playerInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle;
