import SOCIAL_MEDIA_LINKS from "@/constants/social_media";
import { Image } from "react-bootstrap";
import styles from "./social_media.module.scss";
import Link from "next/link";
import cssToHex from "css-filter-converter";
import { COLORS } from "@/constants/styles";

const SocialMedia = () => {
  return (
    <div className={`${styles.social}`}>
      {SOCIAL_MEDIA_LINKS.map((link) => {
        return (
          <div key={link.name} className={styles[link.name]}>
            <Link href={link.link}>
              <Image
                src={`/assets/svg/social/${link.name}.svg`}
                alt={link.name}
                fluid
                style={{
                  filter: cssToHex.hexToFilter("#ffffff").color,
                }}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SocialMedia;
