import { useState, useEffect } from 'react';
import classes from '../styles/PurchaseCart.module.css';

function PurchaseCart({ cart }) {
  const [showCart, setShowCart] = useState([]);
  const [hashCart, setHashCart] = useState(new Map());
  useEffect(() => {
    // get amount of nonunique items
    let hash = new Map();
    for (let i of cart) {
      if (hash.has(i.id)) {
        hash.set(i.id, hash.get(i.id) + 1);
      } else {
        hash.set(i.id, 1);
      }
    }
    setHashCart(hash);
    //console.log(hash);
    //show unique items
    const uniqueCart = cart.filter(
      (v, i, a) => a.map(({ id }) => id).indexOf(v.id) === i
    );
    //console.log(uniqueCart);
    setShowCart(uniqueCart);
  }, [cart]);

  function showTotal(showCart, hashCart) {
    if (showCart.length === 0) {
      return 0;
    }
    let sum = 0;
    for (let i of showCart) {
      sum += i.price * hashCart.get(i.id);
    }

    return sum.toFixed(2);
  }
  return (
    <div>
      <div className={classes.cart}>
        <div>{showCart.length === 0 && <div> nothing here :/</div>}</div>
        {showCart.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.title}</p>
              {
                <p>
                  ${item.price} x {hashCart.get(item.id)}
                </p>
              }
              <img className={classes.imgClass} src={item.image} />
            </div>
          );
        })}
        <button onClick={window.location.reload}>Clear Cart</button>
      </div>
      <div>Total: ${showTotal(showCart, hashCart)}</div>
    </div>
  );
}

export default PurchaseCart;
