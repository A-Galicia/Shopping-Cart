import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div>
      <h1>Error 404</h1>
      <p>This page does not exist</p>
      <Link to='/'>
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
}

export default ErrorPage;
