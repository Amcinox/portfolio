import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/argon-design-system-react.css";
import "../styles/styles.css";
import "../styles/vendor/font-awesome/css/font-awesome.min.css";
import "../styles/vendor/nucleo/css/nucleo.css";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import ReactGA from 'react-ga';

const GA_TRACKING_ID = 'G-0W63YJFLJJ';

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	useEffect(() => {
		ReactGA.initialize(GA_TRACKING_ID);
		const handleRouteChange = (url) => {
			ReactGA.pageview(url);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		// When the component is unmounted, unsubscribe from the event
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);


	return (
		<>
			{/* Google Analytics Script */}

			<Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-0W63YJFLJJ" />


			<Script
				id="google-analytics"
				strategy="afterInteractive"
			>
				{`
				window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-0W63YJFLJJ');
	  `}
			</Script>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp;
