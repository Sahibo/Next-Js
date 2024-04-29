"use client";
import { usePayrollContext } from "@/contexts/PayrollContext";
import { ReactNode } from "react";
import styles from "../payroll/layout.module.css";
import InfoCardS from "@/components/InfoCardS";
import InfoCardM from "@/components/InfoCardM";
import InfoCardL from "@/components/InfoCardL";
import "../globals.css";

interface Props {
  children: ReactNode;
  links: ReactNode;
  salaryDefinition: ReactNode;
  taxDefinition: ReactNode;
  payroll: ReactNode;
  payslips: ReactNode;
}

export default function Layout({
  children,
  links,
  salaryDefinition,
  taxDefinition,
  payroll,
  payslips,
}: Props) {
  const payrollContext = usePayrollContext();
  return (
    <div className={styles.childrenContainer}>
      <div className={styles.rowContainer}>
        <div className={styles.gridContainer}>
          <div className={styles.rowContainer}>
            <InfoCardS></InfoCardS>
            <InfoCardS></InfoCardS>
          </div>
          <div className={styles.rowContainer}>
            <InfoCardS></InfoCardS>
            <InfoCardS></InfoCardS>
          </div>
        </div>
        <InfoCardM title="Annual payroll summary">{null}</InfoCardM>
      </div>

      <div className={`${styles.linkContainer} rectangleContainer`}>
        {links}
      </div>
      {payrollContext.currentSlot === "salaryDefinition" ? (
        <InfoCardL>{salaryDefinition}</InfoCardL>
      ) : (
        <></>
      )}
      {payrollContext.currentSlot === "taxDefinition" ? (
        <InfoCardL>{taxDefinition}</InfoCardL>
      ) : (
        <></>
      )}
      {payrollContext.currentSlot === "payslips" ? (
        <div>{payslips}</div>
      ) : (
        <></>
      )}
      {payrollContext.currentSlot === "payroll" ? <div>{payroll}</div> : <></>}

      {children}
    </div>
  );
}
