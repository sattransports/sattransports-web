import React from "react";
import styles from "./download_button.module.scss";
import Link from "next/link";
import { Image } from "react-bootstrap";

const DownloadButtons = ({isHeader}) => {
  return (
    <div className={styles.downld}>
      <Link href="/" data-aos={!isHeader && "flip-up"}>
        <Image
          src="/assets/playbtn.png"
          alt="logo"
          fluid
          width={200}
          className={styles.play}
        />
      </Link>
      <Link href="/" data-aos={!isHeader && "flip-up"}>
        <Image
          className={styles.apl}
          src="/assets/apple.svg"
          alt="logo"
          fluid
          width={180}
        />
      </Link>
    </div>
  );
};

export default DownloadButtons;
