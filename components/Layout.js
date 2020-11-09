import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
  children,
  pageTitle,
  pageDescription,
  pageKeywords,
  ...props
}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
        <meta key="description" name="description" content={pageDescription} />
        <meta key="keywords" name="keywords" content={pageKeywords} />
        <meta name="robots" content="index, follow" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <section className="layout">
        <Header />
        <div className="content">{children}</div>
      </section>
      <Footer />
    </>
  );
}
