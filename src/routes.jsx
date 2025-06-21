import App from './components/App';
import ErrorPage from './components/ErrorPage';
import Shop from './components/Shop';
import AboutUs from './components/AboutUs';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'shop',
    element: <Shop />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'about',
    element: <AboutUs />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
