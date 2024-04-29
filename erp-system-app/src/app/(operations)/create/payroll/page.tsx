"use client";
import styles from "./payroll.module.css";
import {
  OutlinedButton,
  PrimaryButton,
} from "@/components/unknown/CustomButtons";
import { H2, TextSmall } from "@/components/unknown/CustomTexts";
import { BaseInput, SelectInput } from "@/components/unknown/CustomForms";
import InfoCardL from "@/components/InfoCardL";

export default function CreatePayroll() {
  return (
    <div className={styles.childrenContainer}>
      <OutlinedButton>Go Back</OutlinedButton>

      <div className="rectangleContainer">
        <H2>Create Payslip</H2>

        <div className={styles.rowContainer}>
          <div className="formContainer">
            <TextSmall>Payment name</TextSmall>
            <BaseInput />
          </div>
          <div className="formContainer">
            <TextSmall>Designation</TextSmall>
            <SelectInput />
          </div>
          <div className="formContainer">
            <TextSmall>Date generated</TextSmall>
            <BaseInput type="date" />
          </div>
        </div>
        <div className={styles.rowContainer}>
          <div className="formContainer">
            <TextSmall>Payment month</TextSmall>
            <SelectInput />
          </div>
          <div className="formContainer">
            <TextSmall>Payment year</TextSmall>
            <SelectInput />
          </div>
        </div>
        <PrimaryButton>Generate Payroll</PrimaryButton>
      </div>

      <InfoCardL>{null}</InfoCardL>
      <PrimaryButton>Create Payslip</PrimaryButton>
    </div>
  );
}
