import { Button } from "../ui/button";
import { ImageCustom } from "../ui/imageCustom";
import { Error, Input, Textarea } from "../ui/inputCustom";
import { cn } from "../../lib/utils";
import styles from "./style.module.scss";

const ContactUsForm = () => {
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
            <form>
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
                      label="First Name*"
                      placeholder="First Name*"
                      type="name"
                    />
                    <Error>Please Enter First Name</Error>
                  </div>
                  <div className={`${styles.inputSpaceArea}`}>
                    <Input
                      label="Last Name*"
                      placeholder="Last Name*"
                      type="name"
                    />
                    <Error>Please Enter Last Name</Error>
                  </div>

                  <div className={`${styles.inputSpaceArea}`}>
                    <Input label="Email*" placeholder="Email*" type="email" />
                    <Error>Please Enter Email</Error>
                  </div>
                  <div className={`${styles.inputSpaceArea}`}>
                    <Input
                      label="Phone Number*"
                      placeholder="Phone Number*"
                      type="text"
                      name="phoneNumber*"
                    />
                    <Error>Please Phone Number</Error>
                  </div>

                  <div className={`${styles.inputSpaceArea}`}>
                    <Input
                      label="Purpose*"
                      placeholder="Purpose*"
                      type="text"
                      name="Purpose"
                    />
                    <Error>Please Enter Your's Enquiry</Error>
                  </div>
                  <div className={`${styles.inputSpaceArea}`}>
                    <Input
                      label="Company*"
                      placeholder="Company*"
                      type="text"
                      name="companyName"
                    />
                     <Error>Please Enter Your's Company Name</Error>
                  </div>
                  <div className={`${styles.inputSpaceArea}`}>
                    <Textarea
                      label="Project Explanation*"
                      placeholder="Project Explanation*"
                      type="textarea"
                      rows="4"
                    />
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
                    <Button variant="brownBtn" size="md" type="submit">
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
