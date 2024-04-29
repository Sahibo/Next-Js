'use client'
import { useDashboardContext } from "@/contexts/DashboardContext"
import { useEffect, useState } from "react"
import { Status } from "@/types/Memo"
import { PaymentVoucher } from "@/types/PaymentVoucher"
import Table from "@/components/Table"

export default function PaymentVoucherSlot() {
    const [paymentVouchers, setPaymentVouchers] = useState<PaymentVoucher[]>([])
    const dashboardContext = useDashboardContext()

    useEffect(() => {
        const fetchData = async () => {

            const vouchers = await dashboardContext.fetchPaymentVouchers();
            setPaymentVouchers(vouchers);
        }
        fetchData()
    }, [dashboardContext])

    return (
        <div>
          <Table data={paymentVouchers} />
        </div>
    )
}
