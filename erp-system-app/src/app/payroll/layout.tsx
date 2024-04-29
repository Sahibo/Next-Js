'use client'
import { usePayrollContext } from "@/contexts/PayrollContext";
import { ReactNode } from "react";
import style from '../payroll/layout.module.css'
import InfoCardL from "@/components/InfoCardL";
interface Props {
    children: ReactNode
    links: ReactNode
    salaryDefinition: ReactNode
    taxDefinition: ReactNode
    payroll: ReactNode
    payslips: ReactNode
}


export default function Layout({
    children,
    links,
    salaryDefinition,
    taxDefinition,
    payroll,
    payslips }: Props) {

    const payrollContext = usePayrollContext()
    return (
        <div>
            <div className={style.childrenContainer}>
                <div>
                    {links}
                </div>
                {payrollContext.currentSlot === 'salaryDefinition' ?
                    <InfoCardL>
                        {salaryDefinition}
                    </InfoCardL>
                    : <></>}
                {payrollContext.currentSlot === 'taxDefinition' ?
                    <InfoCardL>
                        {taxDefinition}
                    </InfoCardL>
                    : <></>}
                {payrollContext.currentSlot === 'payslips' ?
                    <div>
                        {payslips}
                    </div>
                    : <></>}
                {payrollContext.currentSlot === 'payroll' ?
                    <div>
                        {payroll}
                    </div>
                    : <></>}

                {children}
            </div>
        </div>
    )
}