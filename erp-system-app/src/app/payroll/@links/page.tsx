'use client'
import { usePayrollContext } from "@/contexts/PayrollContext";
import Link from "next/link";

export default function Slots() {
    const payrollContext = usePayrollContext()

    const handleChangeCurrentSlot = (slot: string) => {
        payrollContext.setCurrentSlot(slot)
    }

    
    return (
        <div>
            <Link href={'/payroll'} onClick={() => handleChangeCurrentSlot('salaryDefinition')}>Salary Breakdown</Link>
            <Link href={'/payroll'} onClick={() => handleChangeCurrentSlot('taxDefinition')}>Tax Definitions</Link>
            <Link href={'/payroll'} onClick={() => handleChangeCurrentSlot('payslips')}>Payslips</Link>
            <Link href={'/payroll'} onClick={() => handleChangeCurrentSlot('payroll')}>Payroll</Link>
        </div>
    )
}