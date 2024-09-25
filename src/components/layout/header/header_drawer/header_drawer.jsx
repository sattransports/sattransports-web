import React from "react";
import Link from "next/link";
import PAGES from "@/constants/pages";
import styles from "./header_drawer.module.scss";
import { Image, Offcanvas } from "react-bootstrap";

const HeaderDrawer = ({ show, setShow, router }) => {
  return (
    <Offcanvas show={show} placement="end">
      <Offcanvas.Header
        className={styles.head}
        closeButton
        onHide={() => {
          setShow(false);
        }}
      >
        <Image src='logo.png' alt="logo" fluid width={100} />
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className={styles.body}>
          <nav>
            {PAGES.map((page) => {
              return (
                <Link
                  href={page.href}
                  key={page.name}
                  className={router.pathname === page.href ? styles.active : ""}
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  {page.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default HeaderDrawer;
