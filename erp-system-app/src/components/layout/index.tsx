"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import SideBar from "../sidebar";
import Header from "../header";

import styles from "./layout.module.css";

interface Props {
  children: ReactNode;
}
export default function CustomLayout({ children }: Props) {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/login" || pathname === "/registration" ? (
        <div>{children}</div>
      ) : (
        <div>
          <SideBar />
          <Header />

          <div className={styles.childrenContainer}>{children}</div>
        </div>
      )}
    </>
  );
}
