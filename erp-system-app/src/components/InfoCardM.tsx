"use client";
import styles from "../components/styles/cardM.module.css";
import "../app/globals.css";
import { H2, TextMedium, TextSmall } from "./unknown/CustomTexts";
import Table from "./Table";
import MemoSlot from "@/app/dashboard/@memos/default";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function InfoCardM({ children }: Props) {
  return (
    <div className={`${styles.mainContainer} rectangleContainer`}>
      <H2>Memo</H2>

      <div className={styles.bottomContainer}>{children}</div>
    </div>
  );
}
