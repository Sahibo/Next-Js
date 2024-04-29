import { H3, TextSmall } from "./unknown/CustomTexts";
import styles from '../components/styles/modal.module.css'
import { PrimaryButton } from "./unknown/CustomButtons";

export default function Modal() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.iconContainer}>
       
      </div>
      <div className={styles.textsContainer}>
        <H3>Congratulations</H3>
        <TextSmall>You have successfully changed your password.</TextSmall>
      </div>
      <div className={styles.buttonContainer}>
        <PrimaryButton>Back To Login</PrimaryButton>
      </div>
    </div>
  );
}
