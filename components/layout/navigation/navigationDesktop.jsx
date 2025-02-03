"use client";
import { Button } from "../../ui/button";
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
  // function LatestTech() {
  //   return (
  //     <div className={cn(styles.latestTech)}>
  //       <h1>Latest from technology</h1>
  //       <Link href="/" className={styles.imageTech}>
  //         <div className={styles.imgBox}>
  //           <ImageCustom
  //             src="/images/nav-img.png"
  //             width={300}
  //             height={300}
  //             alt="nav-image"
  //           />
  //         </div>
  //         <div className={styles.infoBox}>
  //           <p className={styles.description}>
  //             Learn more about the latest Drupal Updates
  //           </p>
  //           <ImageCustom
  //             src="/images/icons/arrow-right.svg"
  //             width={20}
  //             height={20}
  //             alt="arrow"
  //           />
  //         </div>
  //       </Link>
  //       <div className={styles.imageTech}>
  //         <div className={styles.infoBox}>
  //           <p className={styles.description}>
  //             CMS has been the game changer of 2023 website trends
  //           </p>
  //           <ImageCustom
  //             src="/images/icons/arrow-right.svg"
  //             width={20}
  //             height={20}
  //             alt="arrow"
  //           />
  //         </div>
  //       </div>
  //       <div className={styles.innovationBannerDrop}>
  //       <ImageCustom
  //             src="/innovation.jpg"
  //             width={300}
  //             height={300}
  //             alt="arrow"
  //           />
  //       </div>

  //     </div>
  //   );
  // }

  function OverTech() {
    return (
      <div className={styles.overviewFlex}>
        <div className={styles.overviewSubFlex}>
          {/* <div>
            <ImageCustom
              src="/technical-solutions.png"
              width={20}
              height={20}
              alt="arrow"
            />
          </div> */}
          <div className={styles.overviewTitle}>
            <h1>Behind the Tech</h1>
            <p>
              "Your partner in navigating the inevitable
              <br />
              journey to enterprise growth.
            </p>
          </div>
        </div>
        {/* <div className={styles.overviewBtn}>
          <Button variant="brownBtn" size="sm">
            Overview{" "}
            <ImageCustom
              src="/images/icons/arrow-right.svg"
              width={20}
              height={20}
              alt="arrow"
            />
          </Button>
        </div> */}
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
              src="/images/tech-minnor-logo-2-new.png"
              width={200}
              height={46}
              alt="header-logo"
            />
          </Link>
          <Link href="/" className={styles.darkLogo}>
            <ImageCustom
              src="/images/tech-minnor-logo-2-new.png"
              width={200}
              height={46}
              alt="dark-logo"
            />
          </Link>
        </div>
        <nav>
          <ul>
            <li className={styles.menuItem}>
              <Link href="/">About Us</Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/">Solutions</Link>
            </li>
            <li className={styles.dropDown}>
              <Link href="/">
                Technology <div className={styles.arrow} />
              </Link>
              <ul className={cn(styles.subMenu)}>
                <section className={styles.subsection}>
                  {/* {LatestTech()} */}

                  <div className={cn(styles.overviewTech)}>
                    {OverTech()}
                    <div className={cn(styles.multiHrefs)}>
                      <div className="row">
                        <div className="col-sm-6">
                          <Link href="/" className={cn(styles.hrefInnerFlex)}>
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                Web Development
                              </h4>
                              <ImageCustom
                                src="/images/icons/arrow-right.svg"
                                width={20}
                                height={20}
                                alt="arrow"
                              />
                            </div>
                            <p className={styles.excepPara}>
                              Be a partner for industry verticals on the
                              inevitable journey towards enterprise.
                            </p>
                          </Link>
                          <Link href="/" className={cn(styles.hrefInnerFlex)}>
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                Content Management System
                              </h4>
                              <ImageCustom
                                src="/images/icons/arrow-right.svg"
                                width={20}
                                height={20}
                                alt="arrow"
                              />
                            </div>
                            <p className={styles.excepPara}>
                              Be a partner for industry verticals on the
                              inevitable journey towards enterprise.
                            </p>
                          </Link>
                          <Link href="/" className={cn(styles.hrefInnerFlex)}>
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                Mobile Application
                              </h4>
                              <ImageCustom
                                src="/images/icons/arrow-right.svg"
                                width={20}
                                height={20}
                                alt="arrow"
                              />
                            </div>
                            <p className={styles.excepPara}>
                              Be a partner for industry verticals on the
                              inevitable journey towards enterprise.
                            </p>
                          </Link>
                        </div>

                        <div className="col-sm-6">
                          <Link href="/" className={cn(styles.hrefInnerFlex)}>
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>UI/UX</h4>
                              <ImageCustom
                                src="/images/icons/arrow-right.svg"
                                width={20}
                                height={20}
                                alt="arrow"
                              />
                            </div>
                            <p className={styles.excepPara}>
                              Be a partner for industry verticals on the
                              inevitable journey towards enterprise.
                            </p>
                          </Link>
                          <Link href="/" className={cn(styles.hrefInnerFlex)}>
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                Custom Development
                              </h4>
                              <ImageCustom
                                src="/images/icons/arrow-right.svg"
                                width={20}
                                height={20}
                                alt="arrow"
                              />
                            </div>
                            <p className={styles.excepPara}>
                              Be a partner for industry verticals on the
                              inevitable journey towards enterprise.
                            </p>
                          </Link>
                          <Link href="/" className={cn(styles.hrefInnerFlex)}>
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                Micro services
                              </h4>
                              <ImageCustom
                                src="/images/icons/arrow-right.svg"
                                width={20}
                                height={20}
                                alt="arrow"
                              />
                            </div>
                            <p className={styles.excepPara}>
                              Be a partner for industry verticals on the
                              inevitable journey towards enterprise.
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
            {/* <li className={styles.dropDown}>
              <Link href="/">
                <ImageCustom
                  src="/images/arrow-left.svg"
                  width={20}
                  height={20}
                  alt="arrow"
                />
                More
                <div className={cn(styles.arrow, styles.hideDesktopIcon)} />
              </Link>
              <ul className={cn(styles.subMenu, styles.singleLayout)}>
                <div className={styles.subsection}>
                  {LatestTech()}
                  <div className={cn(styles.overviewTech)}>
                    <div className={cn(styles.multiHrefs)}>
                      <div className="row">
                        <div className="col-sm-12">
                          <Link
                            href="/careers"
                            className={cn(styles.hrefInnerFlex)}
                          >
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>Careers</h4>
                              <ImageCustom
                                src="/images/arrow-left.svg"
                                width={20}
                                height={20}
                                alt="arrow"
                              />
                            </div>
                            <p className={styles.excepPara}>
                              Be a partner for industry verticals on the
                              inevitable journey towards enterprise.
                            </p>
                          </Link>
                          <Link href="/" className={cn(styles.hrefInnerFlex)}>
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>Insights</h4>
                              <ImageCustom
                                src="/images/arrow-left.svg"
                                width={20}
                                height={20}
                                alt="arrow"
                              />
                            </div>
                            <p className={styles.excepPara}>
                              Be a partner for industry verticals on the
                              inevitable journey towards enterprise.
                            </p>
                          </Link>
                          <Link
                            href="/coe"
                            className={cn(styles.hrefInnerFlex)}
                          >
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                Centre of Excellence
                              </h4>
                              <ImageCustom
                                src="/images/arrow-left.svg"
                                width={20}
                                height={20}
                                alt="arrow"
                              />
                            </div>
                            <p className={styles.excepPara}>
                              Be a partner for industry verticals on the
                              inevitable journey towards enterprise.
                            </p>
                          </Link>
                          <Link
                            href="/accelerators"
                            className={cn(styles.hrefInnerFlex)}
                          >
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>Accelerators</h4>
                              <ImageCustom
                                src="/images/arrow-left.svg"
                                width={20}
                                height={20}
                                alt="arrow"
                              />
                            </div>
                            <p className={styles.excepPara}>
                              Be a partner for industry verticals on the
                              inevitable journey towards enterprise.
                            </p>
                          </Link>
                          <Link href="/" className={cn(styles.hrefInnerFlex)}>
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>Contact us</h4>
                              <ImageCustom
                                src="/images/arrow-left.svg"
                                width={20}
                                height={20}
                                alt="arrow"
                              />
                            </div>
                            <p className={styles.excepPara}>
                              Be a partner for industry verticals on the
                              inevitable journey towards enterprise.
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </li> */}
          </ul>
        </nav>
        <div className={styles.headerRight}>
          <Button variant="brownBtn" className={styles.headerBtn} size="sm">
            Connect with us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavigationDesktop;
