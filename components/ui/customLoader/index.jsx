"use client";

import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import { ImageCustom } from "../imageCustom";

const CustomLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <div className={styles.loaderContainer}>
      {loading ? (
        <div className={styles.loader}>
          <ImageCustom
            src="/tech-minnor-logo-2-new.svg"
            width={250}
            height={250}
            alt="header-logo"
          />
        </div>
      ) : null}
    </div>
  );
};

export default CustomLoader;
