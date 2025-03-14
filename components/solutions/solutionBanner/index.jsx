import React from "react";
import { ImageCustom } from "../../ui/imageCustom";
import styles from "./style.module.scss";

const SolutionBanner = () => {
  return (
    <section
      className={`${styles.solutionHeroBannerStyle} 
      }`}
    >
      <div className={styles.bannerBody}>
        <div className={styles.bannerData}>
          <h1 className={styles.heading}>Our Solutions</h1>

          <p className={styles.description}>
            Cutting-edge solutions designed to help you achieve your business
            goals effortlessly.
          </p>
        </div>

        <div className={styles.landingBannerStyle}>
          <ImageCustom
            src="/solution-banner.svg"
            width={1440}
            height={650}
            alt="bannerImg"
          />
          <div className={styles.overlay}></div>
        </div>
      </div>
    </section>
  );
};

export default SolutionBanner;
