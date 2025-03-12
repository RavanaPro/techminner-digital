"use client";

import { createRef, useRef } from "react";
import AboutBanner from "../../../components/about/aboutBanner";
import ContactUsForm from "../../../components/contactUsForm";
import CustomLoader from "../../../components/ui/customLoader";

const AboutPage = () => {
  // ✅ Create a ref for the next section
  //   <div style={{ width: "100%", height: "100%" }} />;
  //   const nextSectionRef = useRef();
  //   const handleScroll = () => {
  //     if (nextSectionRef.current) {
  //       nextSectionRef.current.scrollIntoView({
  //         behavior: "smooth",
  //         block: "start",
  //       });
  //     }
  //   };

  return (
    <>
       <CustomLoader />
      {/* ✅ Home Banner Section */}
      <AboutBanner />

      {/* 🔹 Scroll Down Button */}
      {/* <div onClick={handleScroll} className="animated-bottom"></div> */}

      {/* ✅ HomeTechnologies section with ref */}
      {/* <div ref={nextSectionRef}>
        <HomeTechnologies />
      </div> */}

      <ContactUsForm />
    </>
  );
};

export default AboutPage;
