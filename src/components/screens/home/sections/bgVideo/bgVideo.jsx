import styles from "./bgVideo.module.scss";

const BgVideo = () => {
  return (
    <div className={styles.videoContainer}>
      <video autoPlay muted loop className={styles.responsiveVideo}>
        <source src="/sriamman_cars2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BgVideo;
