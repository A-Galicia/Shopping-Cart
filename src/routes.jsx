import App from './components/App';
import ErrorPage from './components/ErrorPage';
import Shop from './components/Shop';
import AboutUs from './components/AboutUs';
import ShopWindow from './components/shopWindow';
import PurchaseCart from './components/PurchaseCart';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'shop/:name',
    element: <Shop />,
    errorElement: <ErrorPage />,
    children: [
      { path: 'shopWindow', element: <ShopWindow /> },
      { path: 'purchaseCart', element: <PurchaseCart /> },
    ],
  },
  {
    path: 'about',
    element: <AboutUs />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
