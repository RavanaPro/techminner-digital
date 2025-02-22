import React from "react";
import { ImageCustom } from "../../ui/imageCustom";
import styles from "./style.module.scss";

const AboutBanner = () => {
  return (
    <>
      <section
        className={`${styles.aboutHeroBannerStyle} 
      }`}
      >
        <div className={styles.bannerBody}>
          <h1 className={styles.heading}>
            We Build. We Innovate.
            <br />
            <span className={styles.subHeading}>We Deliver.</span>
          </h1>
          <div className={styles.landingBannerStyle}>
            <ImageCustom
              src="/about-us-banner.svg"
              width={1440}
              height={650}
              alt="bannerImg"
            />
            <div className={styles.overlay}></div>
          </div>
        </div>
      </section>

      <div className={styles.aboutBannerContent}>
        <div className={styles.contentSection}>
          <h1 className={styles.title}>
            About
            <span> Us</span>
          </h1>

          <p className={styles.leadText}>
            TechMinner is a forward-thinking IT solutions company founded in
            January 2025 with a vision to drive digital transformation. We
            specialize in cutting-edge technology services, including software
            development, cloud solutions, IT consulting, and enterprise content
            management. At TechMinner, we believe in innovation, efficiency, and
            reliability. Our team of expert developers, designers, and
            strategists work closely with businesses to craft tailor-made
            digital solutions that enhance productivity and drive growth.
            Whether it's web and mobile applications, AI-driven automation, or
            scalable enterprise platforms, we deliver solutions that empower
            businesses to stay ahead in a rapidly evolving digital landscape.
            With a commitment to excellence and customer satisfaction,
            TechMinner is not just an IT company—we are your trusted technology
            partner for a smarter, more connected future. Let’s
            innovate together!
          </p>
        </div>
        <ImageCustom
          src="/about-us.svg"
          width={500}
          height={500}
          alt="bannerImg"
        />
      </div>
    </>
  );
};

export default AboutBanner;
