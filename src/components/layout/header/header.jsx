import React, { useEffect, useState } from "react"; // React hooks.
import Link from "next/link"; // Next.js Link component.
import { Image } from "react-bootstrap"; // Bootstrap Image component.
import PAGES from "@/constants/pages"; // Pages constants for navigation.
import { useRouter } from "next/router"; // Next.js router for navigation.
import styles from "./header.module.scss"; // SCSS module for styling.
import HeaderDrawer from "./header_drawer/header_drawer"; // Drawer component for mobile navigation.
import CustomContainer from "@/components/ui/custom_container/custom_container"; // Custom container for layout.

function Header() {
  const router = useRouter();
  const [show, setShow] = useState(false); // State to control drawer visibility.
  const [scrolled, setScrolled] = useState(false); // State to track scroll position.

  useEffect(() => {
    // Scroll event listener to apply scroll styles.
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 0);
    });
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.mobileHeader}>
        <div className={styles.mobileLogo}>
          <Image src="/logo.png" alt="logo" fluid className={styles.logo} />
        </div>
        <div className={styles.hamBurger} onClick={() => setShow(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <HeaderDrawer setShow={setShow} show={show} router={router} />
      <CustomContainer>
        <div className={styles.wrap}>
          <div>
            <Image
              src="/wagonor.png"
              alt="left-img"
              fluid
              className={styles.img}
              data-aos="fade-right"
            />
          </div>
          <nav>
            <div>
              <Image src="/logo.png" alt="logo" fluid className={styles.logo} />
            </div>
            <div>
              <ul>
                {PAGES.map((page) => (
                  <li
                    key={page.name}
                    className={
                      router.pathname === page.href ? styles.active : ""
                    }
                  >
                    <Link href={page.href}>{page.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div>
            <Image
              src="/marrazi.png"
              alt="right-img"
              fluid
              className={styles.img}
              data-aos="fade-left"
            />
          </div>
        </div>
      </CustomContainer>
    </header>
  );
}

export default Header;
