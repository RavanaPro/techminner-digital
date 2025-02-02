"use client";

import { Button } from "../../ui/button";
import { ImageCustom } from "../../ui/imageCustom";
import { Input, Error, Success } from "../../ui/inputCustom";
import { cn } from "../../../lib/utils";
import Link from "next/link";
import styles from "./style.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={cn("primary-container")}>
        <div className={styles.logo}>
          <ImageCustom
            src="/images/tech-minnor-logo-2-new.png"
            width={153}
            height={40}
            alt="footer-logo"
          />
        </div>

        <div className="row">
          <div className="col-12 col-lg-6">
            <div className={styles.footLeftSide}>
              <p className={styles.description}>
                Accelerating Digital Growth & Business Success
              </p>

              <div className={styles.subscribe}>
                <h4 className="mb-3">Subscribe for Exclusive Insights</h4>

                <form>
                  <div className={styles.formFlex}>
                    <Input
                      inputFloatingStyle={styles.inputFloatingStyle}
                      inputStyle={styles.inputStyle}
                      placeholder="Your Email Address"
                    />

                    <div className="d-flex align-items-center">
                      <Button variant="brownBtn" size="lg">
                        Subscribe
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className={styles.footerBox}>
              <div className={styles.footerCols}>
                <h5>
                  <Link href="/">About Us</Link>
                </h5>
                <h5>
                  <Link href="/">Contact Us</Link>
                </h5>
              </div>

              <div className={styles.footerCols}>
                <h5>Technology</h5>
                <ul className={styles.fadeLink}>
                  <li>
                    <Link href="/">Web Development</Link>
                  </li>

                  <li>
                    <Link href="/">UI / UX</Link>
                  </li>

                  <li>
                    <Link href="/">Content Management System</Link>
                  </li>

                  <li>
                    <Link href="/">Custom Development</Link>
                  </li>

                  <li>
                    <Link href="/">Mobile Application</Link>
                  </li>

                  <li>
                    <Link href="/">Micro Service</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <div className={styles.footCopyright}>
          <p>fgde</p>
          <ul>
            <li>
              <Link href="/">hello</Link>
            </li>
          </ul>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
