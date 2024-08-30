import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </Head>

      <body className="">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
