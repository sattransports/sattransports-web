import { COLORS } from "@/constants/styles";
import styles from "./blobs.module.scss";
import cssToHex from "css-filter-converter";
const Blob1 = () => {
  return (
    <svg
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.blob} ${styles.blob1}`}
      style={{
        filter: cssToHex.hexToFilter(COLORS.color_grey_1).color,
      }}

    >
      <defs>
        <clipPath id="a">
          <path
            fill="currentColor"
            d="M822 622q14 122-114 123t-191.5-49Q453 646 304 698.5t-224-73Q5 500 99.5 389t219-88.5Q443 323 547.5 177t159-6.5Q761 310 784.5 405T822 622Z"
          />
        </clipPath>
      </defs>
      <g clip-path="url(#a)">
        <path d="M822 622q14 122-114 123t-191.5-49Q453 646 304 698.5t-224-73Q5 500 99.5 389t219-88.5Q443 323 547.5 177t159-6.5Q761 310 784.5 405T822 622Z" />
      </g>
    </svg>
  );
};

export default Blob1;
