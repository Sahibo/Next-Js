"use client";
import { ReactNode } from "react";
import style from "../dashboard/layout.module.css";
import InfoCardM from "@/components/InfoCardM";
import InfoCardS from "@/components/InfoCardS";
import StaffIcon from "@/icons/StaffIcon";
import ArrowUpIcon from "@/icons/ArrowUpIcon";
import ArrowDownIcon from "@/icons/ArrowDownIcon";
import { Colors } from "@/components/unknown/Colors";
import PayrollIcon from "@/icons/PayrollIcon";

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
          <InfoCardS
            title="Total number of staff"
            number="250"
            icon={<StaffIcon color={Colors.orange} />}
            changesText="12 more than last quarter"
            changesIcon={<ArrowUpIcon />}
          />
          <InfoCardS
            title="Total application"
            number="250"
            icon={<PayrollIcon color={Colors.blue} />}
            changesText="0.2% lower than last quarter"
            changesIcon={<ArrowDownIcon />}
          />
          <InfoCardS
            title="Total number of staff"
            number="250"
            icon={<StaffIcon color={Colors.orange} />}
            changesText="12 more than last quarter"
            changesIcon={<ArrowUpIcon />}
          />
          <InfoCardS
            title="Total number of staff"
            number="250"
            icon={<StaffIcon color={Colors.orange} />}
            changesText="12 more than last quarter"
            changesIcon={<ArrowUpIcon />}
          />
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
