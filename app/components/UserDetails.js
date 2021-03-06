var React = require('react');
var PropTypes = React.PropTypes;

function UserDetails(user) {
  return (
    <div>
      {!!user.score && <li className="list-group-item"><h3> Score: {user.score}</h3></li>}
      <li className="list-group-item"><img src={user.info.avatar_url} className="img-rounded img-responsive"/></li>
      {user.info.name && <li className="list-group-item"><h3> Name: {user.info.name}</h3></li>}
      <li className="list-group-item">Username: {user.info.login}</li>
      {user.info.company && <li className="list-group-item"> Company: {user.info.company}</li>}
      {user.info.location && <li className="list-group-item"> Location: {user.info.location}</li>}
      <li className="list-group-item">Followers: {user.info.followers}</li>
      <li className="list-group-item">Following: {user.info.following}</li>
      <li className="list-group-item">Public Repos: {user.info.public_repos}</li>
      {user.info.blog && <li className="list-group-item"> Blog: <a href={user.info.blog}> {user.info.blog} </a></li>}
    </div>
  );
}

UserDetails.propTypes = {
  score: PropTypes.number,
  info: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string,
    login: PropTypes.string.isRequired,
    company: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    public_repos: PropTypes.number.isRequired,
    blog: PropTypes.string
  })
}
module.exports = UserDetails;
