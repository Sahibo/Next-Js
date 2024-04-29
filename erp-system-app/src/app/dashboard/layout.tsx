import { ReactNode } from "react";
import style from "../dashboard/layout.module.css";
import InfoCardM from "@/components/InfoCardM";

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
        <InfoCardM title="Memos">{memos}</InfoCardM>
        <InfoCardM title="Payment Vouchers">{paymentVouchers}</InfoCardM>
        <InfoCardM title="Staff List">{staffList}</InfoCardM>
        <InfoCardM title="Staff Applications Card">
          {staffApplicationsCard}
        </InfoCardM>
        {children}
      </div>
    </div>
  );
}
