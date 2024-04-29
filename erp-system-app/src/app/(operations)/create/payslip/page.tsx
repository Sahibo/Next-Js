"use client";
import styles from "./payslip.module.css";
import {
  OutlinedButton,
  PrimaryButton,
} from "@/components/unknown/CustomButtons";
import { H2, H3, TextSmall } from "@/components/unknown/CustomTexts";
import { BaseInput, SelectInput } from "@/components/unknown/CustomForms";

export default function CreatePayslip() {
  return (
    <div className={styles.childrenContainer}>
      <OutlinedButton>Go Back</OutlinedButton>

      <div className="rectangleContainer">
        <H2>Create Payslip</H2>

        <H3>Basic Information</H3>
        <div className={styles.rowContainer}>
          <div className="formContainer">
            <TextSmall>Staff name</TextSmall>
            <SelectInput />
          </div>
          <div className="formContainer">
            <TextSmall>Title</TextSmall>
            <SelectInput />
          </div>
          <div className="formContainer">
            <TextSmall>Level</TextSmall>
            <SelectInput />
          </div>
        </div>
      </div>
      <div className="rectangleContainer">
        <H3>Salary Structure</H3>
        <div className={styles.rowContainer}>
          <div className="formContainer">
            <TextSmall>Basic salary</TextSmall>
            <BaseInput />
          </div>
          <div className="formContainer">
            <TextSmall>Housing allowance</TextSmall>
            <BaseInput />
          </div>
          <div className="formContainer">
            <TextSmall>Gross Salary</TextSmall>
            <BaseInput />
          </div>
        </div>
      </div>

      <div className="rectangleContainer">
        <H3>Deductions</H3>
        <div className={styles.rowContainer}>
          <div className="formContainer">
            <TextSmall>Total deduction</TextSmall>
            <BaseInput />
          </div>
        </div>
      </div>

      <div className="rectangleContainer">
        <H3>Net Salary</H3>
        <div className={styles.rowContainer}>
          <div className="formContainer">
            <TextSmall>Net Salary</TextSmall>
            <BaseInput />
          </div>
        </div>
        <PrimaryButton>Create Payslip</PrimaryButton>
      </div>
    </div>
  );
}
