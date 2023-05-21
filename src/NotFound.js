import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry, 404 Error</h2>
      <p>We can't locate page requested.</p>
      <Link to={"/"} className="link">
        Back to the homepage. . .
      </Link>
    </div>
  );
};
export default NotFound;
