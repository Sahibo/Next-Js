"use client";
import {
  OutlinedButton,
  PrimaryButton,
} from "@/components/unknown/CustomButtons";
import { H1, TextSmall } from "@/components/unknown/CustomTexts";
import { LogoIcon } from "@/icons/LogoIcon";
import { BaseInput } from "@/components/unknown/CustomForms";
import { useRouter } from "next/navigation";
import styles from '../Auth.module.css'
import Image from "next/image";
import image from  '../../../images/login-img.jpeg' 
export default function Registration() {

  const router = useRouter()

  const handleNavToSignIn = () => {
    router.push('/login')
  }
  return (
    <div className={styles.flexContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.horizontalContainer}>
          <LogoIcon />
          <OutlinedButton width={100} onClick={handleNavToSignIn}>Log In</OutlinedButton> 
        </div>

        <div className={styles.welcomeContainer}>
          <TextSmall>Welcome!</TextSmall>
          <H1>Please Sign Up</H1>
        </div>

        <div className={styles.formContainer}>
          <TextSmall>Email address</TextSmall>
          <BaseInput placeholder="Enter email address" />
        </div>

        <div className={styles.formContainer}>
          <TextSmall>Password</TextSmall>
          <BaseInput placeholder="Enter password" type="password" />
        </div>

        <div className={styles.formTextsContainer}>
          <div className={styles.rememberMeContainer}>
            <TextSmall>Remember me</TextSmall>
          </div>
          {/* <TextSmall color={Colors.aqua}>I forgot my password</TextSmall> */}
        </div>

        <div className={styles.buttonContainer}>
          <PrimaryButton>Enter</PrimaryButton>
        </div>
      </div>

      <div className={styles.imageDiv}>
        <Image alt="photo" src={image} />
      </div>
    </div>
  );
}
