'use client'
import { useDashboardContext } from "@/contexts/DashboardContext"
import { useEffect, useState } from "react"
import { Status } from "@/types/Memo"
import { PaymentVoucher } from "@/types/PaymentVoucher"

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
            {paymentVouchers.map((paymentVoucher) => (
                <div key={paymentVoucher.id}>
                    <p>
                        Id: {paymentVoucher.id}
                    </p>
                    <p>
                        Subject: {paymentVoucher.subject}
                    </p>
                    <p>
                        Date: {new Date(paymentVoucher.date).toLocaleDateString()}
                    </p>
                    <p>
                        Status: {Status[paymentVoucher.status]}
                    </p>
                </div>
            ))}
        </div>
    )
}
