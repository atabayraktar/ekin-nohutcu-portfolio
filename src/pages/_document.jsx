import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&display=swap"
            onLoad="this.onload=null;this.rel='stylesheet'"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&display=swap"
            />
          </noscript>
        </Head>
        <body>
          <Main />
          {/* Portal mount point */}
          <div id="modal-root" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
