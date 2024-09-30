import { Html, Head, Main, NextScript } from "next/document"; // Imports from Next.js to structure the document

export default function Document() {
  return (
    <Html lang="en">
      {" "}
      {/* Root HTML tag with language attribute */}
      <Head>
        {/* Add custom meta tags, title, or links here */}
        <link rel="icon" href="/favicon.svg" /> {/* Adding a custom favicon */}
        <title>SAT</title> {/* Setting the default page title */}
      </Head>
      <body>
        {/* The main content of the app will be injected here */}
        <Main />
        {/* Next.js script tags for optimal loading and functionality */}
        <NextScript />
      </body>
    </Html>
  );
}
