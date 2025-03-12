"use client";
import { ImageCustom } from "../../ui/imageCustom";
import { cn } from "../../../lib/utils";
import Link from "next/link";
import styles from "./style.module.scss";
import { useState, useEffect } from "react";

const NavigationDesktop = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function OverTech() {
    return (
      <div className={styles.introFlex}>
        <div className={styles.introSubFlex}>
          <div className={styles.introTitle}>
            <h1>Behind the Technology</h1>
            <p>
              "Your partner in navigating the inevitable
              <br />
              journey to enterprise growth.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <header
      className={cn(
        styles.headerMain,
        styles.headerMainDesktop,
        isScrolled ? styles.headerDark : styles.headerLight
      )}
    >
      <div className={cn(styles.headerContainer, "primary-container")}>
        <div className={styles.logo}>
          <Link href="/" className={styles.lightLogo}>
            <ImageCustom
              src="/tech-minnor-logo-2-new.svg"
              width={200}
              height={46}
              alt="header-logo"
            />
          </Link>
          <Link href="/" className={styles.darkLogo}>
            <ImageCustom
              src="/tech-minnor-logo-2-new.svg"
              width={200}
              height={46}
              alt="dark-logo"
            />
          </Link>
        </div>
        <nav>
          <ul>
            <li className={styles.menuItem}>
              <Link href="/about">About Us</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/solutions">Solutions</Link>
            </li>
            <li className={styles.dropDown}>
              <Link href="/">
                Technology <div className={styles.arrow} />
              </Link>
              <ul className={cn(styles.subMenu)}>
                <section className={styles.subsection}>
                  {/* {LatestTech()} */}

                  <div className={cn(styles.mainTech)}>
                    {OverTech()}
                    <div className={cn(styles.multiLinks)}>
                      <div className="row">
                        <div className="col-sm-12">
                          <Link href="/" className={cn(styles.innerLinkHref)}>
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                Web Development
                              </h4>
                              <ImageCustom
                                src="/down-arrow.svg"
                                width={18}
                                height={18}
                                alt="arrow"
                              />
                            </div>
                            <p className={styles.linkPara}>
                              Web development is building and maintaining
                              websites, including front-end, back-end, and
                              full-stack development.
                            </p>
                          </Link>
                          <Link href="/" className={cn(styles.innerLinkHref)}>
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                Content Management System
                              </h4>
                              <ImageCustom
                                src="/down-arrow.svg"
                                width={18}
                                height={18}
                                alt="arrow"
                              />
                            </div>
                            <p className={styles.linkPara}>
                              A CMS in UI enables no-code content management
                              with seamless UX.
                            </p>
                          </Link>
                          <Link href="/" className={cn(styles.innerLinkHref)}>
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                Mobile Application
                              </h4>
                              <ImageCustom
                                src="down-arrow.svg"
                                width={18}
                                height={18}
                                alt="arrow"
                              />
                            </div>
                            <p className={styles.linkPara}>
                              Mobile development creates apps for iOS and
                              Android, focusing on performance, UI/UX, and
                              platform compatibility.
                            </p>
                          </Link>
                        </div>

                        <div className="col-sm-12">
                          <Link href="/" className={cn(styles.innerLinkHref)}>
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>UI/UX</h4>
                              <ImageCustom
                                src="down-arrow.svg"
                                width={18}
                                height={18}
                                alt="arrow"
                              />
                            </div>
                            <p className={styles.linkPara}>
                              UI (User Interface) focuses on design and visuals,
                              while UX (User Experience) enhances usability and
                              user satisfaction.
                            </p>
                          </Link>
                          <Link href="/" className={cn(styles.innerLinkHref)}>
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                Custom Development
                              </h4>
                              <ImageCustom
                                src="down-arrow.svg"
                                width={18}
                                height={18}
                                alt="arrow"
                              />
                            </div>
                            <p className={styles.linkPara}>
                              Custom development creates tailored software
                              solutions to meet specific business needs with
                              flexibility and scalability.
                            </p>
                          </Link>
                          <Link href="/" className={cn(styles.innerLinkHref)}>
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                Micro services
                              </h4>
                              <ImageCustom
                                src="down-arrow.svg"
                                width={18}
                                height={18}
                                alt="arrow"
                              />
                            </div>
                            <p className={styles.linkPara}>
                              Microservices is an architecture of small,
                              independent services communicating via APIs for
                              scalability and flexibility.
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </ul>
            </li>
            <li className={styles.menuItem}>
              <Link href="/">Portfolio</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.headerRight}>
          <Link href="/" className={styles.headerBtn}>
            <ImageCustom
              src="/phone-call.svg"
              width={19}
              height={19}
              alt="contact"
            />
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavigationDesktop;
