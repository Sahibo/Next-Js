"use client";
import {
  BaseButton,
  OutlinedButton,
  PrimaryButton,
} from "@/components/unknown/CustomButtons";
import { usePayrollContext } from "@/contexts/PayrollContext";
import { Level } from "@/types/Salary";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./salaryDefinition.module.css";
import { BaseInput, SelectInput } from "@/components/unknown/CustomForms";
import { H2, TextSmall } from "@/components/unknown/CustomTexts";

export default function CreateSalaryDefinition() {
  const [salaryDefinition, setSalaryDefinition] = useState({
    title: "",
    level: Level,
    basicSalary: 0,
    allowance: 0,
    grossSalary: 0,
    deductions: 0,
    netSalary: 0,
  });

  const payrollContext = usePayrollContext();
  const router = useRouter();
  const titles = [
    {
      id: 1,
      name: "Managing Director",
    },
    {
      id: 2,
      name: "Executive Director",
    },
    {
      id: 3,
      name: "General Manager",
    },
    {
      id: 4,
      name: "Deputy General Manager",
    },
  ]; // maybe we'll move it to data folder

  const handleCreate = async () => {
    // const newSalaryDefinition: Salary =
    // {
    //     id: salaries.length + 1,
    //     title: salaryDefinition.title,
    //     level: salaryDefinition.level,
    //     basicSalary: salaryDefinition.basicSalary,
    //     allowance: salaryDefinition.allowance,
    //     grossSalary: salaryDefinition.grossSalary,
    //     deductions: salaryDefinition.deductions,
    //     netSalary: salaryDefinition.netSalary
    // }

    const newSalaryDefinition = {
      title: "Senior Manager",
      level: Level.MD_CEO,
      basicSalary: 80000,
      allowance: 2000,
      grossSalary: 82000,
      deductions: 5000,
      netSalary: 77000,
    };

    await payrollContext.fetchCreateSalaryDefinition(newSalaryDefinition);
  };

  const handleChangeTitle = (e: any) => {
    setSalaryDefinition((prev) => ({
      ...prev,
      title: e.target.value,
    }));
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className={styles.childrenContainer}>
      <OutlinedButton onClick={() => handleGoBack()}>Go Back</OutlinedButton>

      <div className="rectangleContainer">
        <H2>Create Salary Definition</H2>
        <div className={styles.gridContainer}>
          <div className={styles.rowContainer}>
            <div className="formContainer">
              <TextSmall>Title</TextSmall>
              <SelectInput />
            </div>
            <div className="formContainer">
              <TextSmall>Level</TextSmall>
              <SelectInput />
            </div>
            <div className="formContainer">
              <TextSmall>Basic Salary</TextSmall>
              <BaseInput />
            </div>
          </div>
          <div className={styles.rowContainer}>
            <div className="formContainer">
              <TextSmall>Allowance</TextSmall>
              <BaseInput />
            </div>
            <div className="formContainer">
              <TextSmall>Gross Salary</TextSmall>
              <BaseInput />
            </div>
            <div className="formContainer">
              <TextSmall>Deductions</TextSmall>
              <BaseInput />
            </div>
          </div>
          <div className={styles.rowContainer}>
            <div className="formContainer">
              <TextSmall>Net Salary</TextSmall>
              <BaseInput />
            </div>
            <PrimaryButton onClick={handleCreate}>Create</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
