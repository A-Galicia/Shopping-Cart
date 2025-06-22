import { Link } from 'react-router-dom';
import classes from '../styles/Cart.module.css';

function Cart({ addToCart }) {
  return (
    <div>
      <Link to='/shop/purchaseCart'>
        <div className={classes.cart}>
          hello from the corner
          <p>{addToCart}</p>
        </div>
      </Link>
    </div>
  );
}

export default Cart;
