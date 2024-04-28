'use client'
import { Memo } from "@/types/Memo"
import { PaymentVoucher } from "@/types/PaymentVoucher"
import { Staff } from "@/types/Staff"
import { ReactNode, createContext, useContext } from "react"

interface DashboardContextProps {
    children: ReactNode
}

type DashboardContextType =
{
    fetchMemos: () => Promise<Memo[]>
    fetchPaymentVouchers: () => Promise<PaymentVoucher[]>
    fetchStaffList: () => Promise<Staff[]>
}


export const DashboardContext = createContext<DashboardContextType>({
    fetchMemos: async () => [],
    fetchPaymentVouchers: async () => [],
    fetchStaffList: async () => []
});

export const useDashboardContext = () => {
    return useContext(DashboardContext);
};


export default function DashboardProvider({ children }: DashboardContextProps) {
    const fetchMemos = async () => {
        let response = await fetch(`/dashboard/api/memos`)

        let memos = await response.json()
        console.log(memos);

        return memos
    }

    const fetchPaymentVouchers = async () => {
        let response = await fetch(`/dashboard/api/paymentVouchers`)

        let paymentVouchers = await response.json()
        console.log(paymentVouchers);

        return paymentVouchers
    }

    const fetchStaffList = async () => {
        let response = await fetch(`/dashboard/api/staffList`)

        let staffList = await response.json()
        console.log(staffList);

        return staffList
    }



    const contextValue: DashboardContextType = { fetchMemos, fetchPaymentVouchers, fetchStaffList}
    return (
        <DashboardContext.Provider value={contextValue}>
            <div>
                {children}
            </div>
        </DashboardContext.Provider>
    )
}