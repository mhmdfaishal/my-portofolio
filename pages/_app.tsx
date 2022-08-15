import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/main.scss";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useEffect } from 'react';
import AOS from 'aos';
import { config } from "@fortawesome/fontawesome-svg-core";
import 'aos/dist/aos.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      offset: 50,
      delay: 50,
    });
  });

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-HFH09469DM`}
      />
      <Script id="google-analytics-script" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-HFH09469DM');`}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
