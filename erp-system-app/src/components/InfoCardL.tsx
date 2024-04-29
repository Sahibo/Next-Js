"use client";
import styles from "../components/styles/cardL.module.css";
import "../app/globals.css";
import { H2 } from "./unknown/CustomTexts";
import { ReactNode } from "react";
 
interface Props {
  children: ReactNode;
}
 
export default function InfoCardL({ children }: Props) {
  return (
    <div className={`${styles.mainContainer} rectangleContainer`}>
      <H2>Salary Definition</H2>
 
      <div className={styles.bottomContainer}>{children}</div>
    </div>
  );
}