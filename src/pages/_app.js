import Footer from "@/layout/footer";
import Header from "@/layout/header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <><Header /><Component {...pageProps} />
  <Footer/></>;
}

