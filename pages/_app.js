import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Layout from '@/components/Layout/Layout';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LocalProvider } from '@/components/LocalProvider';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <LocalProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </LocalProvider>
    </ThemeProvider>
  );
}
