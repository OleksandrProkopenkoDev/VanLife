import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <h2>It seams an error occured</h2>
      <p>
        <span>message: </span>
        {error.message}
      </p>
      <p>
        <span>statusText: </span>
        {error.statusText}
      </p>
      <p>
        <span>status: </span>
        {error.status}
      </p>
      <Link to="/" className="link-button">
        Return to home
      </Link>
    </div>
  );
}
