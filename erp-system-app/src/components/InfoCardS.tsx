import styles from "../components/styles/cardS.module.css";
import "../app/globals.css";
import { H1, TextMedium, TextSmall } from "./unknown/CustomTexts";
import { ElementType, ReactNode } from "react";

interface Props {
  icon?: ReactNode;
  number?: string;
  title?: string;
  changesText?: string;
  changesIcon?: ReactNode;
}
export default function InfoCardS({
  icon,
  number,
  title,
  changesText,
  changesIcon,
}: Props) {
  return (
    <div className={`${styles.mainContainer} rectangleContainer`}>
      <div className={styles.topContainer}>
        <div className={styles.textsContainer}>
          <H1>{number}</H1>
          <TextMedium>{title}</TextMedium>
        </div>
        <div className={styles.iconContainer}>
          {icon}
        </div>
      </div>

      <div className={styles.bottomContainer}>
        {changesIcon}
        <TextSmall>{changesText}</TextSmall>
      </div>
    </div>
  );
}
