import styles from "./bg_video.module.scss"; // SCSS module for styling.

// Background video component for displaying a looping video on the background.
const BgVideo = () => {
  return (
    <div className={styles.videoContainer}>
      <video autoPlay muted loop className={styles.responsiveVideo}>
        {/* Video source for the background */}
        <source src="/assets/home/sriamman_cars2.mp4" type="video/mp4" />
        {/* Fallback message for browsers that do not support the video tag */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BgVideo;
