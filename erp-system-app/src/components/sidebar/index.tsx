"use client";
import styles from "./SideBar.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoIcon } from "@/icons/LogoIcon";
import { BaseText } from "../unknown/CustomTexts";
import DashboardIcon from "@/icons/DashboardIcon";
import StaffIcon from "@/icons/StaffIcon";
import LogisticsIcon from "@/icons/LogisticsIcon";
import PayrollIcon from "@/icons/PayrollIcon";
import CircularsIcon from "@/icons/CircularsIcon";
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
    <div className={styles.container}>
      <div className={styles.iconsContainer}>
        <Link href={`/home`}>
          <LogoIcon />
        </Link>
      </div>
      <div className={styles.listContainer}>
        <div className={styles.itemContainer}>
          <div className={styles.activeRectangle} />
          <Link
            className={styles.linkContainer}
            href={`/dashboard`}
            onClick={() => setActive("/dashboard")}
          >
            <DashboardIcon />
            <BaseText>Dashboard</BaseText>
          </Link>
        </div>
        <div className={styles.itemContainer}>
          <Link
            className={styles.linkContainer}
            href={`/payroll`}
            onClick={() => setActive("/")}
          >
            <PayrollIcon />
            <BaseText>Payroll</BaseText>
          </Link>
        </div>
        <div className={styles.itemContainer}>
          <Link
            className={styles.linkContainer}
            href={`/logistics`}
            onClick={() => setActive("/")}
          >
            <LogisticsIcon />
            <BaseText>Logistics</BaseText>
          </Link>
        </div>
        <div className={styles.itemContainer}>
          <Link
            className={styles.linkContainer}
            href={`/circulars`}
            onClick={() => setActive("/image")}
          >
            <CircularsIcon />
            <BaseText>Circulars</BaseText>
          </Link>
        </div>
      </div>
    </div>
  );
}
