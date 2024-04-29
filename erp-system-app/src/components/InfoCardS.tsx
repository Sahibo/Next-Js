import styles from "../components/styles/cardS.module.css";
import "../app/globals.css";
import { H1, TextMedium, TextSmall } from "./unknown/CustomTexts";

export default function InfoCardS() {
  return (
    <div className={`${styles.mainContainer} rectangleContainer`}>
      <div className={styles.topContainer}>
        <div className={styles.textsContainer}>
          <H1>250</H1>
          <TextMedium>Total number of staff</TextMedium>
        </div>
        <div className={styles.iconContainer}>
          <div className={styles.deleteIt}></div>
        </div>
      </div>

      <div className={styles.bottomContainer}>
        <div className={styles.deleteItTo}></div>
        <TextSmall>12 more than last quarter</TextSmall>
      </div>
    </div>
  );
}
