import "@/styles/globals.css";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";
import Layout from "@/components/layout/layout";
import fonts from "@/styles/fonts";
import { Image } from "react-bootstrap";
import styles from "@/styles/Home.module.scss";

export default function App({ Component, pageProps }) {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Router.events.on("routeChangeStart", (...params) => {
      NProgress.start(params);
    });
    Router.events.on("routeChangeComplete", NProgress.done);
    Router.events.on("routeChangeError", NProgress.done);
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => {
      Router.events.off("routeChangeStart", NProgress.start);
      Router.events.off("routeChangeComplete", NProgress.done);
      Router.events.off("routeChangeError", NProgress.done);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <div className={styles.splash}>
          <Image src="/sat.gif" alt="sat" width={200} />
        </div>
      ) : (
        <div
          className={`${fonts.mainFont} ${styles.app} ${
            isLoading ? styles.loading : ""
          }`}
        >
          <Layout>
            <Component {...pageProps} admin={admin} />
          </Layout>
        </div>
      )}
    </>
  );
}
