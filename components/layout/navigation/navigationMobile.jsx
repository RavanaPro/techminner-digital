"use client";

import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./style.module.scss";

const NavigationMobile = () => {
  const [mobileMenuShow, setMobileMenuShow] = useState(false);
  const [isTechMenu, setTechMenu] = useState(false);
  const [isMoreMenu, setMoreMenu] = useState(false);

  function EstimateSection() {
    return (
      <div className={styles.estimateSection}>
        <p className={styles.description}>
          Provide us with details about your vision, and let our experts tailor
          a comprehensive plan, outlining timelines, scopes, and budgets
          uniquely crafted to bring your ideas to life.
        </p>
        <Button variant="blueBtn" className={styles.headerBtn} size="sm">
          Estimate Project
        </Button>
      </div>
    );
  }

  const mobileMenuToggle = () => {
    setMobileMenuShow(!mobileMenuShow);
    setTechMenu(false);
    setMoreMenu(false);
  };

  const closeMenu = () => {
    setMobileMenuShow(!mobileMenuShow);
    setTechMenu(false);
    setMoreMenu(false);
  };

  const technologyToggle = () => {
    setTechMenu(true);
  };

  function LatestTech() {
    return (
      <div className={cn(styles.latestTech)}>
        <h1>Latest from technology</h1>
        <Link href="/technology" className={styles.imageTech}>
          <div className={styles.imgBox}>
            <ImageCustom
              src="/images/img/nav-img.png"
              width={300}
              height={300}
              alt="nav-image"
            />
          </div>
          <div className={styles.infoBox}>
            <p className={styles.description}>
              Learn more about the latest Drupal Updates
            </p>
            <ImageCustom
              src="/images/arrow-left.svg"
              width={20}
              height={20}
              alt="arrow"
            />
          </div>
        </Link>
        <div className={styles.imageTech}>
          <div className={styles.infoBox}>
            <p className={styles.description}>
              CMS has been the game changer of 2023 website trends
            </p>
            <ImageCustom
              src="/images/arrow-left.svg"
              width={20}
              height={20}
              alt="arrow"
            />
          </div>
        </div>
      </div>
    );
  }

  function OverTech() {
    return (
      <div className={styles.overviewFlex}>
        <div className={styles.overviewSubFlex}>
          <div>
            <ImageCustom
              src="/images/arrow-left.svg"
              width={20}
              height={20}
              alt="arrow"
            />
          </div>
          <div className={styles.overviewTitle}>
            <h1>Technology Overview</h1>
            <p>
              Be a partner for industry verticals on the inevitable
              <br />
              journey towards enterprise.
            </p>
          </div>
        </div>
        <div className={styles.overviewBtn}>
          <Link href="/technology">
            <Button variant="outline" size="sm">
              Overview{" "}
              <ImageCustom
                src="/images/arrow-left.svg"
                width={20}
                height={20}
                alt="arrow"
              />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <header className={cn(styles.headerMain, styles.headerMobile)}>
      <div className={cn(styles.headerContainer, "primary-container")}>
        <div className={styles.logo}>
          <Link href="/" className={styles.lightLogo}>
            <ImageCustom
              src="/images/tech-minnor-logo-2-new.png"
              width={175}
              height={40}
              alt="header-logo"
            />
          </Link>
          <Link href="/" className={styles.darkLogo}>
            <ImageCustom
              src="/images/tech-minnor-logo-2-new.png"
              width={175}
              height={40}
              alt="dark-logo"
            />
          </Link>
        </div>
        <nav className={mobileMenuShow ? styles.showNav : styles.hideNav}>
          <h4 className={styles.mobileTitle}>Menu</h4>
          <ul>
            <li className={styles.menuItem}>
              <Link href="/" onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/" onClick={closeMenu}>
                Solutions
              </Link>
            </li>
            <li className={styles.dropDown}>
              <button
                className={cn(styles.linkButton)}
                onClick={technologyToggle}
              >
                Technology <div className={styles.arrow} />
              </button>

              {isTechMenu && (
                <ul className={cn(styles.subMenu)}>
                  <section className={styles.subsection}>
                    <button
                      className={styles.backButton}
                      onClick={() => setTechMenu(false)}
                    >
                      <ImageCustom
                        src="/images/arrow-left.svg"
                        width={20}
                        height={20}
                        alt="arrow"
                      />
                      Go Back
                    </button>
                    <div className={cn(styles.overviewTech)}>
                      {OverTech()}
                      <div className={cn(styles.multiHrefs)}>
                        <div className="row">
                          <div className="col-sm-6">
                            <Link
                              href="/"
                              onClick={closeMenu}
                              className={cn(styles.hrefInnerFlex)}
                            >
                              <div className={styles.head}>
                                <h4 className={styles.linkTitle}>CMS</h4>
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
                                <h4 className={styles.linkTitle}>Commerce</h4>
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
                                <h4 className={styles.linkTitle}>
                                  Microservices
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
                            <Link href="/" className={cn(styles.hrefInnerFlex)}>
                              <div className={styles.head}>
                                <h4 className={styles.linkTitle}>
                                  Cloud & DevSecOps
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
                          </div>

                          <div className="col-sm-6">
                            <Link href="/" className={cn(styles.hrefInnerFlex)}>
                              <div className={styles.head}>
                                <h4 className={styles.linkTitle}>
                                  Data Intelligence
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
                            <Link href="/" className={cn(styles.hrefInnerFlex)}>
                              <div className={styles.head}>
                                <h4 className={styles.linkTitle}>
                                  Custom Development
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
                            <Link href="/" className={cn(styles.hrefInnerFlex)}>
                              <div className={styles.head}>
                                <h4 className={styles.linkTitle}>
                                  Analytics Automation
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
                          </div>
                        </div>
                      </div>
                    </div>

                    {LatestTech()}
                  </section>
                </ul>
              )}
            </li>
            <li className={styles.menuItem}>
              <Link href="/" onClick={closeMenu}>
                Portfolio
              </Link>
            </li>
            {/* <li className={styles.dropDown}>
              <button
                className={styles.linkButton}
                onClick={() => setMoreMenu(true)}
              >
                <ImageCustom
                  src="/images/arrow-left.svg"
                  width={20}
                  height={20}
                  alt="arrow"
                />
                More
                <div className={cn(styles.arrow, styles.hideDesktopIcon)} />
              </button>

              {isMoreMenu && (
                <ul className={cn(styles.subMenu, styles.singleLayout)}>
                  <div className={styles.subsection}>
                    <button
                      className={styles.backButton}
                      onClick={() => setMoreMenu(false)}
                    >
                      <ImageCustom
                        src="/images/arrow-left.svg"
                        width={20}
                        height={20}
                        alt="arrow"
                      />
                      Go Back
                    </button>

                    <div className={cn(styles.overviewTech)}>
                      <div className={cn(styles.multiHrefs)}>
                        <div className="row">
                          <div className="col-sm-12">
                            <Link
                              href="/careers"
                              onClick={closeMenu}
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
                            <Link
                              href="/insights"
                              onClick={closeMenu}
                              className={cn(styles.hrefInnerFlex)}
                            >
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
                              onClick={closeMenu}
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
                              onClick={closeMenu}
                              className={cn(styles.hrefInnerFlex)}
                            >
                              <div className={styles.head}>
                                <h4 className={styles.linkTitle}>
                                  Accelerators
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
                              href="/contact-us"
                              onClick={closeMenu}
                              className={cn(styles.hrefInnerFlex)}
                            >
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
                    {LatestTech()}
                  </div>
                </ul>
              )}
            </li> */}
          </ul>
          <div className={styles.contactBtn}>
            <Button className={styles.headerBtn} variant="brownBtn" size="lg">
              Contact With Us
            </Button>
          </div>
        </nav>
        <div className={styles.headerRight}>
          {/* <div className={styles.modeBtn}>
            <button variant="default">
              <ImageCustom
                src="/images/arrow-left.svg"
                width={20}
                height={20}
                alt="arrow"
              />

              <ImageCustom
                src="/images/arrow-left.svg"
                width={20}
                height={20}
                alt="arrow"
              />
            </button>
          </div> */}

          <button
            className={cn(
              styles.navHamburger,
              mobileMenuShow ? styles.toggleActive : ""
            )}
            onClick={mobileMenuToggle}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavigationMobile;
