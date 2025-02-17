"use client";

import { cn } from "../../../lib/utils";
import { ImageCustom } from "../../ui/imageCustom";

import styles from "./styles.module.scss";

const TechnologiesInfoCard = (props) => {
  return (
    <div className={cn(styles.infoBox)}>
      <div className={styles.infoCardFlex}>
        <h2 className={styles.sbTitle}>{props.sbTitle}</h2>
        <div className={styles.bgIcon}>
          <ImageCustom
            width={35}
            height={35}
            src={props.icon}
            alt="infoCard"
          />
        </div>
      </div>

      <p className={styles.sbText}>{props.sbText}</p>
    </div>
  );
};

export default TechnologiesInfoCard;
