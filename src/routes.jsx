import App from './components/App';
import ErrorPage from './components/ErrorPage';
import Shop from './components/Shop';
import AboutUs from './components/AboutUs';
import ShopWindow from './components/shopWindow';
import Shop2 from './components/shop2';

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
      { path: 'shop2', element: <Shop2 /> },
    ],
  },
  {
    path: 'about',
    element: <AboutUs />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
