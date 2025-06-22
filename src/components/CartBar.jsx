import { Link } from 'react-router-dom';
import classes from '../styles/Cart.module.css';

function Cart({ addToCart }) {
  return (
    <div>
      <Link to='/shop/purchaseCart'>
        <div className={classes.cart}>Cart: {addToCart}</div>
      </Link>
    </div>
  );
}

export default Cart;
