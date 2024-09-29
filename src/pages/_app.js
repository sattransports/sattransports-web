// Importing global styles and dependencies
import "@/styles/globals.css"; // Global CSS for the entire application
import { useEffect, useState } from "react"; // React hooks for state and lifecycle management
import Aos from "aos"; // AOS library for scroll animations
import "aos/dist/aos.css"; // AOS styles
import NProgress from "nprogress"; // NProgress library for route transition loading bar
import "nprogress/nprogress.css"; // NProgress styles
import Router from "next/router"; // Next.js router for navigation
import Layout from "@/components/layout/layout"; // Layout component for consistent page structure
import fonts from "@/styles/fonts"; // Custom fonts for the application
import { Image } from "react-bootstrap"; // Bootstrap's Image component
import styles from "@/styles/Home.module.scss"; // Module-level CSS for specific home styles

export default function App({ Component, pageProps }) {
  const [admin, setAdmin] = useState(null); // State to handle the admin status (could be used for permissions or auth)

  // Initialize AOS for animations on scroll
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration (in milliseconds)
      once: false, // Whether animation should happen only once
    });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // State to handle the loading state for the splash screen
  const [isLoading, setIsLoading] = useState(true);

  // Setting up NProgress for route transitions and handling splash screen timeout
  useEffect(() => {
    // Start NProgress when route changes start
    Router.events.on("routeChangeStart", (...params) => {
      NProgress.start(params);
    });
    // Stop NProgress when route changes complete or error out
    Router.events.on("routeChangeComplete", NProgress.done);
    Router.events.on("routeChangeError", NProgress.done);

    // Set loading state to false after a delay (splash screen)
    setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Loading screen duration (2.5 seconds)

    // Cleanup: Remove the event listeners when component unmounts
    return () => {
      Router.events.off("routeChangeStart", NProgress.start);
      Router.events.off("routeChangeComplete", NProgress.done);
      Router.events.off("routeChangeError", NProgress.done);
    };
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <>
      {isLoading ? (
        // Show splash screen while loading
        <div className={styles.splash}>
          <Image src="/sat.gif" alt="sat" width={200} />{" "}
          {/* Splash screen logo */}
        </div>
      ) : (
        // Once loading is complete, show the actual app with layout and content
        <div
          className={`${fonts.mainFont} ${styles.app} ${
            isLoading ? styles.loading : "" // Apply loading class while loading
          }`}
        >
          <Layout>
            <Component {...pageProps} admin={admin} />{" "}
            {/* Render the page component with props */}
          </Layout>
        </div>
      )}
    </>
  );
}
