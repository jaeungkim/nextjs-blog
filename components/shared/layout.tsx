import Head from "next/head";
import styles from "./layout.module.css";
import Header from "../Header";
import { Fragment } from "react";

export const siteTitle = "Jaeung Kim Portfolio Website";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
  blog?: boolean;
  home?: boolean;
}) {
  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Jaeung Kim Blog" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/api/static`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.16.0/themes/prism-okaidia.min.css"
          integrity="sha256-Ykz0nNWK7w4QWJUYR7OraN4773aMB/11aMt1nZyrhuQ="
          crossOrigin="anonymous"
        />
      </Head>
      <Header />
      <div className="relative">
        <main className="sm:px-8 mt-9 mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12 max-w-2xl lg:max-w-5xl mx-auto">
            <div className="max-w-2xl">{children}</div>
          </div>
        </main>
      </div>
      <Footer />
    </Fragment>
  );
}
