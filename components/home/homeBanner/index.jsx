import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import VideoCustom from "../../ui/videoCustom";
import styles from "./style.module.scss";

const HomeBanner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerBody}>
        <h1 className={styles.heading}>
          Humanizing
          <br />
          Digital Journeys
          <br />
          with <span className={styles.gradientText}>Empathy</span>
        </h1>

        <Link href="/">
          <Button variant="brownBtn" size="md">
            Let's Build Together
            <ImageCustom
              src="/images/icons/arrow-right.svg"
              width={19}
              height={19}
              alt="arrow"
            />
          </Button>
        </Link>
      </div>

      <div className={styles.videoWrapper}>
        <VideoCustom src="../banner-vidio.mp4" width={1200} height={400} />
        <div className={styles.overlay}></div>
      </div>
    </section>
  );
};

export default HomeBanner;
