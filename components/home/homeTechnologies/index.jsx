"use client";
import TechnologiesInfoCard from "../../home/technologiesInfoCard";
import { Button } from "../../ui/button";
import { ImageCustom } from "../../ui/imageCustom";
import { cn } from "../../../lib/utils";
import Link from "next/link";
import styles from "./style.module.scss";

const HomeTechnologies = ({ props }) => {
  console.log("neee", props);

  return (
    <section
      className={`${styles.homeTechnologiesStyle} 
      }`}
    >
      <div className={cn("primary-container")}>
        <div className={styles.careerRow}>
          <div>
            <h6 className={cn(styles.projectHighlight, "gradient-text")}>
              Technology's
            </h6>

            <h2 className={cn(styles.datingText, "gradient-text")}>
              Technology comprises tools and systems that improve efficiency,
              communication, and problem-solving.
            </h2>
          </div>

          {/* <div className={`${styles.careerBtn}`}>
            <Link href="/">
              <Button variant="outline" size="md"></Button>
            </Link>
          </div> */}
        </div>

        <div className={styles.ourNumberMain}>
          <div className={styles.ourNumberGrid}>
            <div>
              <div
                className={`${styles.desktopCards} ${styles.ourNumberOption} `}
              >
                <TechnologiesInfoCard
                  sbTitle="CMS"
                  icon="/content-management-system.svg"
                  sbText="A CMS in UI enables no-code content management with seamless UX."
                />

                <TechnologiesInfoCard
                  sbTitle="Web-Development"
                  icon="/software-developer.svg"
                  sbText="Web development is building and maintaining websites, including front-end, back-end, and full-stack development."
                />

                <TechnologiesInfoCard
                  sbTitle="UI/UX"
                  icon="/web-design.svg"
                  sbText="UI (User Interface) focuses on design and visuals, while UX (User Experience) enhances usability and user satisfaction."
                />

                <TechnologiesInfoCard
                  sbTitle="Mobile Development"
                  icon="/mobile-development.svg"
                  sbText="Mobile development creates apps for iOS and Android, focusing on performance, UI/UX, and platform compatibility."
                />

                <TechnologiesInfoCard
                  sbTitle="Micro Services"
                  icon="/software.svg"
                  sbText="Microservices are small, independent services communicating via APIs for scalability."
                />
                <TechnologiesInfoCard
                  sbTitle="Custom Development"
                  icon="/custom.svg"
                  sbText="Custom development creates tailored software solutions to meet specific business needs with flexibility and scalability."
                />
              </div>
            </div>
            <div className={styles.ourNumbersImg}>
              <ImageCustom
                src="/technology.svg"
                width={1000}
                height={100}
                alt="bannerImg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTechnologies;
