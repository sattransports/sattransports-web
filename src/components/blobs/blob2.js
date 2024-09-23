import { COLORS } from "@/constants/styles";
import styles from "./blobs.module.scss";
import cssToHex from "css-filter-converter";

const Blob2 = () => {
  return (
    <svg
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.blob} ${styles.blob2}`}
      style={{
        filter: cssToHex.hexToFilter(COLORS.color_grey_2).color,
      }}
    >
      <defs>
        <clipPath id="a">
          <path
            fill="currentColor"
            d="M898.5 612.5Q810 725 708 775.5t-209 53Q392 831 361.5 727t-166-165.5Q60 500 190.5 435t187-101.5Q434 297 494.5 313t202-21.5Q838 254 912.5 377t-14 235.5Z"
          />
        </clipPath>
      </defs>
      <g clip-path="url(#a)">
        <path d="M898.5 612.5Q810 725 708 775.5t-209 53Q392 831 361.5 727t-166-165.5Q60 500 190.5 435t187-101.5Q434 297 494.5 313t202-21.5Q838 254 912.5 377t-14 235.5Z" />
      </g>
    </svg>
  );
};

export default Blob2;
