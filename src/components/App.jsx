import '../styles/App.css';
import ErrorPage from './ErrorPage';
import Shop from './Shop';
import AboutUs from './AboutUs';
import Head from './Head';

function App() {
  return (
    <div className='home'>
      <Head></Head>
      <img
        id='powerlifing'
        src='powerlifting_logo.jpg'
        alt='knight with sword'
      />
    </div>
  );
}

export default App;
