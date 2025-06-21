import { Link } from 'react-router-dom';

function Head() {
  return (
    <>
      <nav>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/shop/shopWindow'>Shop</Link>
        </li>
        <li>
          <Link to='/about'>About Us</Link>
        </li>
      </nav>
    </>
  );
}

export default Head;
