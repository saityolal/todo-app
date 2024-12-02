import { Link, useParams } from "react-router-dom";
function WelcomeComponent() {
  const { username } = useParams();

  return (
    <div className="Welcome">
      <h1>Welcome {username}</h1>
      <div>
        <Link to="/todos">View Todos</Link>
      </div>
    </div>
  );
}

export default WelcomeComponent;
