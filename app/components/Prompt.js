var React = require('react');
var PropTypes = React.PropTypes;
var changeBackgroundColor = require('../styles').changeBackgroundColor; //confused here

function Prompt(props) {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={changeBackgroundColor}>
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Github username"
              type="text"
              onChange={props.onUpdateUser}
              value = {props.username}/>
          </div>

          <div className="col-sm-4 col-sm-offset-3">
            <button
              className="btn btn-block btn-success"
              type="submit">
                Continue
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
}

module.exports = Prompt;
