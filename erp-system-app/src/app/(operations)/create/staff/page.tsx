"use client";
import styles from "./staff.module.css";
import {
  OutlinedButton,
  PrimaryButton,
} from "@/components/unknown/CustomButtons";
import { H2, TextSmall } from "@/components/unknown/CustomTexts";
import { BaseInput, SelectInput } from "@/components/unknown/CustomForms";
import InfoCardL from "@/components/InfoCardL";

export default function CreateStaff() {
  return (
    <div className={styles.childrenContainer}>
      <OutlinedButton>Go Back</OutlinedButton>

      <div className="rectangleContainer">
        <H2>Add a New Staff</H2>

        <div className={styles.rowContainer}>
          <div className={styles.outlinedContainer}>
            <div className={styles.imageIconContainer}></div>

            <div className={styles.imageTextsContainer}>
              <TextSmall>Allowed format</TextSmall>
              <TextSmall>JPG, JPEG, and PNG</TextSmall>
            </div>
            <div className={styles.imageTextsContainer}>
              <TextSmall>Max file size</TextSmall>
              <TextSmall>2MB</TextSmall>
            </div>
          </div>

          <div className={`${styles.columnContainer} ${styles.formsContainer}`}>
            <div className={styles.rowContainer}>
              <div className="formContainer">
                <TextSmall>First name</TextSmall>
                <BaseInput />
              </div>
              <div className="formContainer">
                <TextSmall>Last name</TextSmall>
                <BaseInput />
              </div>
            </div>
            <div className={styles.rowContainer}>
              <div className="formContainer">
                <TextSmall>Email address</TextSmall>
                <BaseInput type="email" />
              </div>
              <div className="formContainer">
                <TextSmall>Phone Number</TextSmall>
                <BaseInput />
              </div>
            </div>
            <div className={styles.rowContainer}>
              <div className="formContainer">
                <TextSmall>Gender</TextSmall>
                <SelectInput />
              </div>
              <div className="formContainer">
                <TextSmall>Designation</TextSmall>
                <SelectInput />
              </div>
            </div>
            <div className={styles.rowContainer}>
              <div className="formContainer">
                <TextSmall>Role</TextSmall>
                <SelectInput />
              </div>
              <PrimaryButton>Add Staff</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
