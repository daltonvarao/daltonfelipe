import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";

import GlobalStyle from "../styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <GlobalStyle />
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <title>Dalton Felipe</title>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
