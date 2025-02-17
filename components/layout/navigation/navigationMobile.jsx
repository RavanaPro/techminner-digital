"use client";

import { Button } from "../../ui/button";
import { ImageCustom } from "../../ui/imageCustom";
import { cn } from "../../../lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./style.module.scss";

const NavigationMobile = () => {
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
  const [mobileMenuShow, setMobileMenuShow] = useState(false);
  const [isTechMenu, setTechMenu] = useState(false);
  const [isMoreMenu, setMoreMenu] = useState(false);

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

  return (
    <header
      className={cn(
        styles.headerMain,
        styles.headerMobile,
        isScrolled ? styles.headerDark : styles.headerLight
      )}
    >
      <div className={cn(styles.headerContainer, "primary-container")}>
        <div className={styles.logo}>
          <Link href="/" className={styles.lightLogo}>
            <ImageCustom
              src="/tech-minnor-logo-2-new.svg"
              width={175}
              height={40}
              alt="header-logo"
            />
          </Link>
          <Link href="/" className={styles.darkLogo}>
            <ImageCustom
              src="/tech-minnor-logo-2-new.svg"
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
                        src="/arrow-left.svg"
                        width={20}
                        height={20}
                        alt="arrow"
                      />
                      Go Back
                    </button>
                    <div className={cn(styles.mainTech)}>
                      <div className={cn(styles.multiLinks)}>
                        <div className="row">
                          <div className="col-sm-6">
                            <Link href="" className={cn(styles.innerLinkHref)}>
                              <div className={styles.head}>
                                <h4 className={styles.linkTitle}>
                                  {" "}
                                  Web Development
                                </h4>
                                <ImageCustom
                                  src="/arrow-right.svg"
                                  width={20}
                                  height={20}
                                  alt="arrow"
                                />
                              </div>
                              <p className={styles.linkPara}>
                                Web development is building and maintaining
                                websites, including front-end, back-end, and
                                full-stack development.
                              </p>
                            </Link>
                            <Link href="" className={cn(styles.innerLinkHref)}>
                              <div className={styles.head}>
                                <h4 className={styles.linkTitle}>
                                  {" "}
                                  Content Management System
                                </h4>
                                <ImageCustom
                                  src="/arrow-right.svg"
                                  width={20}
                                  height={20}
                                  alt="arrow"
                                />
                              </div>
                              <p className={styles.linkPara}>
                                A CMS in UI enables no-code content management
                                with seamless UX.
                              </p>
                            </Link>
                            <Link href="" className={cn(styles.innerLinkHref)}>
                              <div className={styles.head}>
                                <h4 className={styles.linkTitle}>
                                  Mobile Application
                                </h4>
                                <ImageCustom
                                  src="/arrow-right.svg"
                                  width={20}
                                  height={20}
                                  alt="arrow"
                                />
                              </div>
                              <p className={styles.linkPara}>
                                Mobile development creates apps for iOS and
                                Android, focusing on performance, UI/UX, and
                                platform compatibility.
                              </p>
                            </Link>
                            <Link href="" className={cn(styles.innerLinkHref)}>
                              <div className={styles.head}>
                                <h4 className={styles.linkTitle}>UI/UX</h4>
                                <ImageCustom
                                  src="/arrow-right.svg"
                                  width={20}
                                  height={20}
                                  alt="arrow"
                                />
                              </div>
                              <p className={styles.linkPara}>
                                UI (User Interface) focuses on design and
                                visuals, while UX (User Experience) enhances
                                usability and user satisfaction.
                              </p>
                            </Link>
                          </div>

                          <div className="col-sm-6">
                            <Link href="" className={cn(styles.innerLinkHref)}>
                              <div className={styles.head}>
                                <h4 className={styles.linkTitle}>
                                  Custom Development
                                </h4>
                                <ImageCustom
                                  src="/arrow-right.svg"
                                  width={20}
                                  height={20}
                                  alt="arrow"
                                />
                              </div>
                              <p className={styles.linkPara}>
                                Custom development creates tailored software
                                solutions to meet specific business needs with
                                flexibility and scalability.
                              </p>
                            </Link>
                            <Link href="" className={cn(styles.innerLinkHref)}>
                              <div className={styles.head}>
                                <h4 className={styles.linkTitle}>
                                  Micro services
                                </h4>
                                <ImageCustom
                                  src="/arrow-right.svg"
                                  width={20}
                                  height={20}
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
              )}
            </li>
            <li className={styles.menuItem}>
              <Link href="/" onClick={closeMenu}>
                Portfolio
              </Link>
            </li>
          </ul>
          <div className={styles.contactBtn}>
            <Button className={styles.headerBtn} variant="brownBtn" size="lg">
              Contact With Us
            </Button>
          </div>
        </nav>
        <div className={styles.headerRight}>
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
