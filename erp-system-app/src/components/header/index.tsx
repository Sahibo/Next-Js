"use client";
import { H2, TextSmall, TextXSmall } from "../unknown/CustomTexts";
import style from "./Header.module.css";

export default function Header() {
  return (
    <div className={style.container}>
      <div className={style.leftContainer}>
        <H2>Welcome, Mr. Filankes</H2>
        <TextXSmall>Today is Sunday, 28th April 2024</TextXSmall>
      </div>
      <div className={style.rightContainer}>
        <div className={style.dropdownContainer}>
          <div className={style.dropdownText}>
            <TextSmall>Filankes</TextSmall>
            <TextXSmall>HR office</TextXSmall>
          </div>
        </div>
      </div>
    </div>
  );
}
