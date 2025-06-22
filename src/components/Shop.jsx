import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ShopWindow from './shopWindow';
import ErrorPage from './ErrorPage';
import PurchaseCart from './PurchaseCart';
import Head from './Head';
import CartBar from './CartBar';
import '../styles/App.css';

function Shop() {
  const [addToCart, setAddToCart] = useState(0);
  const [cart, setCart] = useState([]);

  const [data, setData] = useState(null);
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
  }, []);

  function incrementCart() {
    setAddToCart(() => addToCart + 1);
  }

  function sendToCart(id) {
    const clickedItem = data.filter((item) => item.id === id);
    setCart((prevCart) => [...prevCart, clickedItem[0]]);
  }

  /*  useEffect(() => {
    console.log(cart);
  }, [cart]); */

  const { name } = useParams();
  return (
    <div>
      <Head></Head>
      {name === 'shopWindow' ? <CartBar addToCart={addToCart}></CartBar> : null}
      {name === 'shopWindow' ? (
        <ShopWindow
          data={data}
          loading={loading}
          error={error}
          incrementCart={incrementCart}
          sendToCart={sendToCart}
        />
      ) : name === 'purchaseCart' ? (
        <PurchaseCart cart={cart} />
      ) : (
        <ErrorPage />
      )}
    </div>
  );
}

export default Shop;
