import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import Head from "next/head";
import Header from "../components/header";

const poppins = Inter({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Head>
        <title>Kortoba</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
