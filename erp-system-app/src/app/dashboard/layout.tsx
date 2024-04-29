"use client";
import { ReactNode } from "react";
import style from "../dashboard/layout.module.css";
import InfoCardM from "@/components/InfoCardM";
import InfoCardS from "@/components/InfoCardS";

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
      <div className={style.childrenContainer}>
        <div className={style.rowContainer}>
          <InfoCardS />
          <InfoCardS />
          <InfoCardS />
          <InfoCardS />
        </div>
        <div className={style.gridContainer}>
          <div className={style.rowContainer}>
            <InfoCardM title="Memos">{memos}</InfoCardM>
            <InfoCardM title="Payment Vouchers">{paymentVouchers}</InfoCardM>
          </div>
          <div className={style.rowContainer}>
            <InfoCardM title="Staff List">{staffList}</InfoCardM>
            <InfoCardM title="Staff Applications Card">
              {staffApplicationsCard}
            </InfoCardM>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
