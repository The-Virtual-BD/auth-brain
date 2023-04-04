import Footer from "../components/sharedPage/Footer";
import Header from "../components/sharedPage/Header";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Header />
			<Component {...pageProps} />
			<ToastContainer />
			<Footer />
		</div>
	);
}

export default MyApp;
