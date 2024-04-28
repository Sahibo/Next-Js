import SideBar from "@/components/sidebar";
import { ReactNode } from "react";
import style from "../dashboard/layout.module.css";
// import "../global.css";

import Header from "@/components/header";
import InfoCardM from "@/components/InfoCardM";
import InfoCardL from "@/components/InfoCardL";

interface Props {
  children: ReactNode;
  memos: ReactNode;
  paymentVouchers: ReactNode;
  staffList: ReactNode;
  staffApplicationsCard: ReactNode;
}

export default function Layout({
  children,
  memos,
  paymentVouchers,
  staffList,
  staffApplicationsCard,
}: Props) {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <SideBar />
      <div className={style.childrenContainer}>
        <InfoCardM>{memos}</InfoCardM>
        <InfoCardL>{memos}</InfoCardL>

        <div>{paymentVouchers}</div>
        <div>{staffList}</div>
        <div>{staffApplicationsCard}</div>
        {children}
      </div>
    </div>
  );
}
