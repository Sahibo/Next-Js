'use client'
import SideBar from "@/components/sidebar";
import { usePayrollContext } from "@/contexts/PayrollContext";
import { ReactNode } from "react";
import style from '../payroll/layout.module.css'
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
            <SideBar />
            <div className={style.childrenContainer}>
                <div>
                    {links}
                </div>
                {payrollContext.currentSlot === 'salaryDefinition' ?
                    <div>
                        {salaryDefinition}
                    </div>
                    : <></>}
                {payrollContext.currentSlot === 'taxDefinition' ?
                    <div>
                        {taxDefinition}
                    </div>
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