import Link from "next/link";
import Image from "next/image";
import PAGES from "@/constants/pages";
import { useRouter } from "next/router";
import styles from "./header.module.scss";
import logo from "../../../../public/logo.png";
import React, { useEffect, useState } from "react";
import HeaderDrawer from "./header_drawer/header_drawer";
import leftImg from "../../../../public/assets/Skoda.png";
import rightImg from "../../../../public/assets/Bolera.png";
import CustomContainer from "@/components/ui/custom_container/custom_container";

function Header() {
  const router = useRouter();

  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 0);
    });
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.mobileHeader}>
        <div className={styles.mobileLogo}>
          <Image
            src={logo}
            alt="logo"
            fluid
            className={styles.logo}
            style={{}}
          />
        </div>
        <div
          className={styles.hamBurger}
          onClick={() => {
            setShow(true)
          }}
        >
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
              src={leftImg}
              alt="left-img"
              fluid
              className={styles.img}
              data-aos="fade-right"
            />
          </div>
          <nav>
            <div>
              <Image src={logo} alt="logo" fluid className={styles.logo} />
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
              src={rightImg}
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
