"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import style from "./SideBar.module.css";

import { LogoIcon } from "@/icons/LogoIcon";
import { BaseText } from "../unknown/CustomTexts";

export default function SideBar() {
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    const storedPage = sessionStorage.getItem("activePage");
    if (storedPage) {
      setActivePage(storedPage);
    }
  }, []);

  const setActive = (href: string) => {
    setActivePage(href);
    sessionStorage.setItem("activePage", href);
  };

  return (
    <div className={style.container}>
      <ul className={style.iconsContainer}>
        <li>
          <Link href={`/home`}>
            <LogoIcon />
          </Link>
        </li>
        <li>
          <Link href={`/dashboard`} onClick={() => setActive("/dashboard")}>
            <BaseText>Dashboard</BaseText>
          </Link>
        </li>
        <li>
          <Link href={`/payroll`} onClick={() => setActive("/")}>
            <BaseText>Payroll</BaseText>
          </Link>
        </li>
        <li>
          <Link href={`/logistics`} onClick={() => setActive("/")}>
            <BaseText>Logistics</BaseText>
          </Link>
        </li>
        <li>
          <Link href={`/circulars`} onClick={() => setActive("/image")}>
            <BaseText>Circulars</BaseText>
          </Link>
        </li>
        {/* <li>
                    <Link href={`/login`} onClick={() => setActive('/login')}>
                        <BaseText>Login</BaseText>
                    </Link>
                </li>

                <li>
                    <Link href={`/registration`} onClick={() => setActive('/image')}>
                        <BaseText>Sign up</BaseText>
                    </Link>
                </li> */}
      </ul>
    </div>
  );
}
