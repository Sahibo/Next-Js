'use client'
import styles from "../components/styles/cardM.module.css";
import "../app/globals.css";
import { H2, TextMedium, TextSmall } from "./unknown/CustomTexts";
import { ReactNode } from "react";

interface Props
{
  children: ReactNode
  title: string
}
export default function InfoCardM({children, title}: Props) {
  return (
    <div className={`${styles.mainContainer} rectangleContainer`}>
      <H2>{title}</H2>

      <div className={styles.bottomContainer}>
        {children}
      </div>
    </div>
  );
}
