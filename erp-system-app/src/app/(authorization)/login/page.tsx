"use client";
import {
  OutlinedButton,
  PrimaryButton,
} from "@/components/unknown/CustomButtons";
import { H1, TextSmall } from "@/components/unknown/CustomTexts";
import { LogoIcon } from "@/icons/LogoIcon";
import Image from "next/image";
import image from  '../../../images/login-img.jpeg' 
import styles from '../Auth.module.css'
import { BaseInput } from "@/components/unknown/CustomForms";
import { Colors } from "@/components/unknown/Colors";
import { useRouter } from "next/navigation";
export default function Login() {

  const router = useRouter()


  const handleNavToSignUp = () => {
    router.push('/registration')
  }

  return (
    <div className={styles.flexContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.horizontalContainer}>
          <LogoIcon />
          <OutlinedButton width="100px" onClick={handleNavToSignUp}>Sign Up</OutlinedButton>
        </div>

        <div className={styles.welcomeContainer}>
          <TextSmall>Welcome Back!</TextSmall>
          <H1>Please Sign In</H1>
        </div>

        <div className={styles.formContainer}>
          <TextSmall>Email address</TextSmall>
          <BaseInput placeholder="Enter email address" />
        </div>

        <div className={styles.formContainer}>
          <TextSmall>Password</TextSmall>
          <BaseInput placeholder="Enter password" type="password" />
        </div>

        <div className={styles.formContainer}>
          <TextSmall>Repeat password</TextSmall>
          <BaseInput placeholder="Repeat password" type="password" />
        </div>

        <div className={styles.formTextsContainer}>
          <div className={styles.rememberMeContainer}>
            <TextSmall>Remember me</TextSmall>
          </div>
          <TextSmall color={Colors.aqua}>I forgot my password</TextSmall>
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
