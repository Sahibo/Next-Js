"use client";

import { usePayrollContext } from "@/contexts/PayrollContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./taxDefinition.module.css";
import {
  OutlinedButton,
  PrimaryButton,
} from "@/components/unknown/CustomButtons";
import { H2, TextSmall } from "@/components/unknown/CustomTexts";
import { BaseInput } from "@/components/unknown/CustomForms";

export default function Create() {
  const [taxDefinition, setTaxDefinition] = useState({
    taxType: "",
    value: 0,
  });
  const router = useRouter();
  const payrollContext = usePayrollContext();

  const handleCreateTaxDefinition = async () => {
    let taxDefinition = {
      taxType: "VAT",
      value: 2.5,
    };
    await payrollContext.fetchCreateTaxDefinition(taxDefinition);
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    // <div className={styles.container}>
    //     <button onClick={handleGoBack}>Go back</button>
    //     <button onClick={() => handleCreateTaxDefinition()}>Create</button>
    // </div>
    <div className={styles.childrenContainer}>
      <OutlinedButton onClick={() => handleGoBack()}>Go Back</OutlinedButton>

      <div className="rectangleContainer">
        <H2>Create Salary Definition</H2>
        <div className={styles.gridContainer}>
          <div className={styles.rowContainer}>
            <div className="formContainer">
              <TextSmall>Tax Type</TextSmall>
              <BaseInput />
            </div>
            <div className="formContainer">
              <TextSmall>% value</TextSmall>
              <BaseInput />
            </div>
          </div>
          <div className={styles.rowContainer}>
            <PrimaryButton onClick={handleCreateTaxDefinition}>
              Create
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
