import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Input, Textarea } from "@/components/ui/inputCustom";

import Link from "next/link";
import { cn } from "@/lib/utils";
import styles from "./style.module.scss";
import CustomDropdown from "../ui/customDropdown";

const ContactUsForm = ({ contact }) => {

  const options = [
    { name: "Frontend" },
    { name: "Backend" },
    { name: "CMS" },
    { name: "Animation" },
  ];

  
  return (
    <section className={styles.contactFormStyle}>
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
                <p className={styles.formText}>{contact?.Description}</p>
                <div className={styles.contactFormArea}>
                  <div className={`${styles.inputSpace}`}>
                    <Input
                      label="First Name*"
                      placeholder="First Name*"
                      type="name"
                    />
                  </div>
                  <div className={`${styles.inputSpace}`}>
                    <Input
                      label="Last Name*"
                      placeholder="Last Name*"
                      type="name"
                    />
                  </div>

                  <div className={`${styles.inputSpace}`}>
                    <Input label="Email*" placeholder="Email*" type="email" />
                  </div>
                  <div className={`${styles.inputSpace}`}>
                    <Input
                      label="Phone Number*"
                      placeholder="Phone Number*"
                      type="text"
                      name="phoneNumber*"
                    />
                  </div>

                  {/* <div className={`${styles.inputSpace}`}>
                    <CustomDropdown
                      placeholder="Select Purpose*"
                      title="Select Purpose*"
                      name="selectPurpose"
                      options={options}
                      className="custom-dropdown z-5"
                    />
                  </div> */}
                  <div className={`${styles.inputSpace}`}>
                    <Input
                      label="Purpose*"
                      placeholder="Purpose*"
                      type="text"
                      name="Purpose"
                    />
                  </div>
                  <div className={`${styles.inputSpace}`}>
                    <Input
                      label="Company*"
                      placeholder="Company*"
                      type="text"
                      name="companyName"
                    />
                  </div>
                  <div className={`${styles.inputSpace}`}>
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
                    I understand and consent to my personal data being processed
                    in accordance with TechMinner Privacy Policy.
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
              src="/images/contact.png"
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
