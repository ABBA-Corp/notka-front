import '../styles/Navbar.scss';
import '../styles/Header.scss';
import '../styles/globals.scss';
import '../styles/HomeAbout.scss';
import '../styles/TopProducts.scss';
import '../styles/HomeCategories.scss';
import '../styles/SliderCategories.scss';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
