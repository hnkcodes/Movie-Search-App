import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  let title = "An Error Occured";
  let message = "Something went wrong";

  if (error.status === 500) {
    title = "Data Fetch Error";
    message = "Failed to Fetch Data";
  }

  if (error.status === 404) {
    title = "Page Not Found";
    message = "Could not Find Resource or Page";
  }

  return (
    <main className="center-container">
      <Link to="/">
        <button className="act-button go-back-button">Go Home</button>
      </Link>
      <h1 className="page-headline">{title}</h1>
      <p>{message}</p>
    </main>
  );
}
