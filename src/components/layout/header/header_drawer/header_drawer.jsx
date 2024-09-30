import React from "react"; // React import.
import Link from "next/link"; // Next.js Link component.
import PAGES from "@/constants/pages"; // Pages constants for navigation.
import styles from "./header_drawer.module.scss"; // SCSS module for styling.
import { Image, Offcanvas } from "react-bootstrap"; // Bootstrap components for image and off-canvas navigation.

const HeaderDrawer = ({ show, setShow, router }) => {
  return (
    <Offcanvas show={show} placement="end">
      <Offcanvas.Header
        className={styles.head}
        closeButton
        onHide={() => {
          setShow(false); // Close drawer when clicked.
        }}
      >
        <Image src="logo.png" alt="logo" fluid width={100} />{" "}
        {/* Placeholder logo */}
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className={styles.body}>
          <nav>
            {PAGES.map((page) => (
              <Link
                href={page.href}
                key={page.name}
                className={router.pathname === page.href ? styles.active : ""}
                onClick={() => {
                  setShow(false); // Close drawer on link click.
                }}
              >
                {page.name}
              </Link>
            ))}
          </nav>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default HeaderDrawer;
