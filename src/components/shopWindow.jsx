import { useState, useEffect } from 'react';
import classes from '../styles/ShopWindow.module.css';

function ShopWindow({ data, loading, error, incrementCart, sendToCart }) {
  /* const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDataForPosts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        const postsData = await response.json();
        setData(postsData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    }
    fetchDataForPosts();
  }, []); */

  function handleClick(id) {
    incrementCart();
    sendToCart(id);
  }

  return (
    <div className={classes.shopWindow}>
      <div>
        {loading && <div>Loading posts...</div>}
        {error && <div>{error}</div>}
      </div>
      {data &&
        data.map((item) => {
          return (
            <div
              key={item.id}
              className={classes.itemClass}
              onClick={() => {
                handleClick(item.id);
              }}
            >
              <p>{item.title}</p>
              <p className={classes.price}>${item.price}</p>
              <img className={classes.imgClass} src={item.image} />
              <p>{item.description}</p>
            </div>
          );
        })}
    </div>
  );
}
export default ShopWindow;
