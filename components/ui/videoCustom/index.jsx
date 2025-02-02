"use client";

import { useEffect, useRef } from "react";

import styles from "./style.module.scss";

const VideoCustom = (props) => {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <div className={`${styles.videoCustom}`}>
      <video
        className={styles.video}
        id="my-video"
        width={props.width}
        height={props.height}
        muted
        loop
        ref={videoRef}
        {...props}
      >
        <source src={props.src} type={props.type || "video/mp4"} />
      </video>
    </div>
  );
};

export default VideoCustom;
