import Document, { Html, Head, Main, NextScript } from "next/document";
import { GoogleTagManager } from "@next/third-parties/google";

export default class MyDocument extends Document {
  render() {
    // const pageProps = this.props?.__NEXT_DATA__?.props?.pageProps;
    return (
      <Html lang="en" data-theme="dark">
        <Head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
          <title>Wealthy Capital | Invest in Crypto Private Deal at VC Price</title>

          <meta
            name="description"
            content="Wealthy aims to revolutionize cross-border payments with faster and lower transaction fees. Join the revolution and pay with crypto for anything, anywhere."
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Wealthy Capital | Invest in Crypto Private Deal at VC Price"
          />
          <meta
            property="og:description"
            content="Wealthy aims to revolutionize cross-border payments with faster and lower transaction fees. Join the revolution and pay with crypto for anything, anywhere."
          />
          <meta property="og:url" content="" />
          <meta
            property="og:site_name"
            content="Wealthy Capital | Invest in Crypto Private Deal at VC Price"
          />
          <meta property="og:image" content="/images/banner.jpg" />
          <meta property="og:image:secure_url" content="/images/banner.jpg" />
          <meta property="og:image:width" content="500" />
          <meta property="og:image:height" content="350" />
          <meta property="og:image:alt" content="Home Page &#8211; [V1]" />
          <meta property="og:image:type" content="image/jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Wealthy Capital | Invest in Crypto Private Deal at VC Price"
          />
          <meta
            name="twitter:description"
            content="Wealthy aims to revolutionize cross-border payments with faster and lower transaction fees. Join the revolution and pay with crypto for anything, anywhere."
          />
          <meta name="twitter:image" content="/images/banner.jpg" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
