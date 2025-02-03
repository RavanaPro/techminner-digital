import { Button } from "../ui/button";
import { ImageCustom } from "../ui/imageCustom";
import { Input, Textarea } from "../ui/inputCustom";
import Link from "next/link";
import { cn } from "../../lib/utils";
import styles from "./style.module.scss";

const ContactUsForm = () => {
  return (
    <section className={styles.contactFormBox}>
      <div className={cn("primary-container")}>
        <div className={styles.workArea}>
          <div className={styles.workGrid}>
            <form>
              <div className={styles.contactUsForm}>
                <h3 className={styles.formHeading}>
                  Lets's Work
                  <span className={styles.formTechHighlight}>
                    with new digital ideas.
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
                  </div>
                  <div className={`${styles.inputSpaceArea}`}>
                    <Input
                      label="Last Name*"
                      placeholder="Last Name*"
                      type="name"
                    />
                  </div>

                  <div className={`${styles.inputSpaceArea}`}>
                    <Input label="Email*" placeholder="Email*" type="email" />
                  </div>
                  <div className={`${styles.inputSpaceArea}`}>
                    <Input
                      label="Phone Number*"
                      placeholder="Phone Number*"
                      type="text"
                      name="phoneNumber*"
                    />
                  </div>

                  <div className={`${styles.inputSpaceArea}`}>
                    <Input
                      label="Purpose*"
                      placeholder="Purpose*"
                      type="text"
                      name="Purpose"
                    />
                  </div>
                  <div className={`${styles.inputSpaceArea}`}>
                    <Input
                      label="Company*"
                      placeholder="Company*"
                      type="text"
                      name="companyName"
                    />
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
                  <p className={styles.policyText}>
                    I acknowledge and agree to the processing of my personal
                    data as outlined in TechMinner's Privacy Policy
                    <span className={styles.policyHighlight}>
                      <Link href="/">Privacy Policy</Link>
                    </span>
                  </p>
                  <div className={`${styles.buttonGrid}`}>
                    <Button variant="brownBtn" size="md" type="submit">
                      Send Message
                      <ImageCustom
                        src="/images/icons/arrow-right.svg"
                        width={18}
                        height={18}
                        alt="arrow"
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </form>

            <ImageCustom
              src="/images/tech-contact-us.jpg"
              width={480}
              height={616}
              alt="contactImg"
              className={styles.contactImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
