"use client";

import MobileSlider from "../../../components/ui/mobileSlider";
import { cn } from "../../../lib/utils";
import { useMediaQuery } from "react-responsive";
import styles from "./style.module.scss";
import { ImageCustom } from "../../ui/imageCustom";

const SolutionWhatWeDo = () => {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 767px)" });

  const cardData = [
    {
      imgSrc: "/arrow-left.svg",
      title: "Managed IT Services",
      content:
        "Techminner leverages cutting-edge technology and a customer-centric approach to drive innovation and enhance IT efficiency.",
    },

    {
      imgSrc: "/arrow-left.svg",
      title: "Cloud Solutions",
      content:
        "Techminner provides secure, scalable, and efficient cloud solutions, ensuring seamless operations, enhanced security, and optimized performance for your business.",
    },

    {
      imgSrc: "/arrow-left.svg",
      title: "Custom Software Development",
      content:
        "Techminner delivers tailored, high-performance custom software solutions designed to enhance efficiency, scalability, and innovation for your business.",
    },

    {
      imgSrc: "/arrow-left.svg",
      title: "IT Consulting & Strategy",
      content:
        "Techminner offers expert IT consulting and strategy services, helping businesses leverage technology for growth, efficiency, and long-term success.",
    },
  ];
  return (
    <section className={`${styles.solutionWeProvide}`}>
      <div className={cn("primary-container")}>
        <div className={cn(styles.flexContainer)}>
          <h6 className={styles.solutionTitle}>Our Solution Accelerators</h6>
          <h3 className={styles.solutionHeading}>
          With deep tech expertise, we deliver innovative solutions to tackle critical business challenges.
          </h3>
        </div>

        {!isMobileScreen && (
          <div className={styles.solutionCardWrapper}>
            {cardData.map((data, index) => (
              <div key={index} className={styles.solutionCardMain}>
                <div className={styles.solutionCard}>
                  <div className={`${styles.frontCard} ${styles.solutionCols}`}>
                    <ImageCustom
                      src={data.imgSrc}
                      width={20}
                      height={20}
                      alt="slider-img"
                    />
                    <h6>{data.title}</h6>
                  </div>
                  <div className={`${styles.backCard}  ${styles.solutionCols}`}>
                    <h6>{data.title} </h6>
                    <p>{data.content} </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {isMobileScreen && (
        <div className={styles.mobileSlider}>
          <MobileSlider slidesToShow={1.5}>
            {cardData.map((data, index) => (
              <div key={index} className={styles.solutionCardMain}>
                <div className={styles.solutionCard}>
                  <div className={`${styles.frontCard} ${styles.solutionCols}`}>
                    <ImageCustom
                      src={data.imgSrc}
                      width={20}
                      height={20}
                      alt="slider-img"
                    />
                    <h6>{data.title}</h6>
                  </div>
                  <div className={`${styles.backCard}  ${styles.solutionCols}`}>
                    <h6>{data.title} </h6>
                    <p>{data.content} </p>
                  </div>
                </div>
              </div>
            ))}
          </MobileSlider>
        </div>
      )}
    </section>
  );
};

export default SolutionWhatWeDo;
