import React from "react";
import HomeBanner from "../../../components/home/homeBanner";
import ContactUsForm from "../../../components/contactUsForm";
import HomeTechnologies from "../../../components/home/homeTechnologies";

const HomePage = () => {
  return (
    <>
      <HomeBanner />
      <HomeTechnologies />
      <ContactUsForm />
    </>
  );
};

export default HomePage;
