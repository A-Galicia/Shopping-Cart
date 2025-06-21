import { Link, useParams } from 'react-router-dom';
import ShopWindow from './shopWindow';
import ErrorPage from './ErrorPage';
import Shop2 from './shop2';
import Head from './Head';
import Cart from './Cart';

function Shop() {
  const { name } = useParams();
  return (
    <div>
      <Head></Head>
      <Cart></Cart>
      {name === 'shopWindow' ? (
        <ShopWindow />
      ) : name === 'shop2' ? (
        <Shop2 />
      ) : (
        <ErrorPage />
      )}
    </div>
  );
}

export default Shop;
