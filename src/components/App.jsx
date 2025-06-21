import { useParams } from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Shop from './Shop';
import AboutUs from './AboutUs';

function App() {
  return (
    <div>
      <nav>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='shop'>Shop</Link>
        </li>
        <li>
          <Link to='about'>About Us</Link>
        </li>
      </nav>
      <div>
        {/* {name === 'popeye' ? (
          <Shop />
        ) : name === 'spinach' ? (
          <AboutUs />
        ) : (
          <ErrorPage />
        )} */}
      </div>
    </div>
  );
}

export default App;
