import Footer from "@/layout/footer";
import Header from "@/layout/header";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return <>
   <Head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <title>Shree Mata Ambikeshwori</title>
      </Head>
  <Header /><Component {...pageProps} />
  <Footer/></>;
}

