"use client";

import {useRef } from "react";
import HomeBanner from "../../../components/home/homeBanner";
import ContactUsForm from "../../../components/contactUsForm";
import HomeTechnologies from "../../../components/home/homeTechnologies";
import CustomLoader from "../../../components/ui/customLoader";


const HomePage = () => {
  // ✅ Create a ref for the next section
  <div style={{ width: "100%", height: "100%" }} />;
  const nextSectionRef = useRef();
  const handleScroll = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>

   <CustomLoader />
      {/* ✅ Home Banner Section */}
      <HomeBanner />

      {/* 🔹 Scroll Down Button */}
      <div onClick={handleScroll} className="animated-bottom"></div>

      {/* ✅ HomeTechnologies section with ref */}
      <div ref={nextSectionRef}>
        <HomeTechnologies />
      </div>

      {/* ✅ Contact Us Form */}
      <ContactUsForm />
    </>
  );
};

export default HomePage;
