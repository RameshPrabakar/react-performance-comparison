import { useEffect } from 'react';
import { reportWebVitals as reportMetric } from '../lib/reportWebVitals';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove server-side injected CSS when using Material UI or other CSS-in-JS libraries
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return <Component {...pageProps} />;
}

// Only report web vitals in production
export function reportWebVitals(metric) {
  reportMetric(metric);
}

export default MyApp;