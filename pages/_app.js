import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ backgroundColor: '#14131B' }}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;