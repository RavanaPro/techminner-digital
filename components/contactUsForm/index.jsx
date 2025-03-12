
"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { ImageCustom } from "../ui/imageCustom";
import { Error, Input, Textarea } from "../ui/inputCustom";
import { cn } from "../../lib/utils";
import styles from "./style.module.scss";
import { render } from "@react-email/render";
import VerificationEmail from '../../src/emailTemplates/sendEmailTemplate'



const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    purpose: "",
    company: "",
    projectExplanation: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const validateForm = () => {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key.replace(/([A-Z])/g, " $1")} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    try {
      setLoading(true);
      setSuccessMessage("");
      const emailHtml = await render(<VerificationEmail {...formData} />);
      console.log(emailHtml);
      const response = await fetch("https://emailsendapi.onrender.com/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "toEmail": formData.email,
          "subject": "Business Enquiry",
          "content": emailHtml
        }),
      });
  
      if (!response.ok) throw new Error("Failed to send email");

      setSuccessMessage("Your message has been sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        purpose: "",
        company: "",
        projectExplanation: "",
      });
  
      const data = await response.json();
      console.log("Message sent successfully:", data);
    } catch (error) {
      console.error("Error sending message:", error);
    }finally {
      setLoading(false);
    }
  };
  return (
    <section className={styles.contactFormBox}>
      <div className={cn("primary-container")}>
        <div className={styles.workArea}>
          <div className={styles.workGrid}>
            <ImageCustom
              src="/tech-contact-us.svg"
              width={480}
              height={616}
              alt="contactImg"
              className={styles.contactImg}
            />
            <form onSubmit={handleSubmit}>
              <div className={styles.contactUsForm}>
                <h3 className={styles.formHeading}>
                  Let’s turn your ideas
                  <span className={styles.formTechHighlight}>
                    into reality—talk to us
                  </span>
                </h3>
                <p className={styles.formText}>
                  Submit your project details, and we’ll get in touch soon!
                </p>
                <div className={styles.contactFormArea}>
                  <div className={`${styles.inputSpaceArea}`}>
                    <Input
                      name="firstName"
                      label="First Name*"
                      placeholder="First Name*"
                      value={formData.firstName} onChange={handleChange}
                    />
                   {errors.firstName && <Error>{errors.firstName}</Error>}
                  </div>
                  <div className={`${styles.inputSpaceArea}`}>
                    <Input
                      name="lastName"
                      label="Last Name*"
                      placeholder="Last Name*"
                      type="name"
                      value={formData.lastName} onChange={handleChange}
                    />
                    {errors.lastName && <Error>{errors.lastName}</Error>}
                  
                  </div>

                  <div className={`${styles.inputSpaceArea}`}>
                    <Input name="email" label="Email*" placeholder="Email*" type="email" 
                     value={formData.email} onChange={handleChange}/>
                      {errors.email && <Error>{errors.email}</Error>}
                  
                  </div>
                  <div className={`${styles.inputSpaceArea}`}>
                    <Input
                      label="Phone Number*"
                      placeholder="Phone Number*"
                      name="phoneNumber"
                      value={formData.phoneNumber} onChange={handleChange}
                    />
                      {errors.phoneNumber && <Error>{errors.phoneNumber}</Error>}
                   
                  </div>

                  <div className={`${styles.inputSpaceArea}`}>
                    <Input
                      label="Purpose*"
                      placeholder="Purpose*"
                      type="text"
                      name="purpose"
                      value={formData.purpose} onChange={handleChange}
                    />
                     {errors.purpose && <Error>{errors.purpose}</Error>}
                  </div>
                  <div className={`${styles.inputSpaceArea}`}>
                    <Input
                      label="Company*"
                      placeholder="Company*"
                      type="text"
                      name="company"
                      value={formData.company} onChange={handleChange}
                    />
                      {errors.company && <Error>{errors.company}</Error>}
                  </div>
                  <div className={`${styles.inputSpaceArea}`}>
                    <Textarea
                      label="Project Explanation*"
                      placeholder="Project Explanation*"
                      type="textarea"
                      rows="4"
                      name="projectExplanation"
                      value={formData.projectExplanation} onChange={handleChange}
                    />
                     {errors.projectExplanation && <Error>{errors.projectExplanation}</Error>}
                  </div>
                </div>

                <div className={styles.policyArea}>
                  {/* <p className={styles.policyText}>
                    I acknowledge and agree to the processing of my personal
                    data as outlined in TechMinner's Privacy Policy
                    <span className={styles.policyHighlight}>
                      <Link href="/">Privacy Policy</Link>
                    </span>
                  </p> */}
                  <div className={`${styles.buttonGrid}`}>
                    <Button variant="brownBtn" size="md" type="submit" disabled={loading}>
                      Send Message
                      <ImageCustom
                        src="/arrow-right.svg"
                        width={18}
                        height={18}
                        alt="arrow"
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
