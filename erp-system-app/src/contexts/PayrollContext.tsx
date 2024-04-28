'use client'
import { Salary } from "@/types/Salary";
import { Tax } from "@/types/Tax";
import { ReactNode, createContext, useContext, useState } from "react"

interface PayrollContextProps {
    children: ReactNode
}

type PayrollContextType =
    {
        currentSlot: string,
        setCurrentSlot: (slot: string) => void,

        fetchSalaries: () => Promise<Salary[]>,
        fetchCreateSalaryDefinition: (salaryDefinition: any) => Promise<Salary[]>,
        fetchUpdateSalaryDefinition: (id: number, salaryDefinition: any) => Promise<Salary[]>,
        fetchDeleteSalaryDefinition: (id: number) => Promise<Salary[]>,

        fetchTaxes: () => Promise<Tax[]>,
        fetchCreateTaxDefinition: (taxDefinition: any) => Promise<Tax[]>,
        fetchUpdateTaxDefinition: (id: number, taxDefinition: any) => Promise<Tax[]>,
        fetchDeleteTaxDefinition: (id: number) => Promise<Tax[]>,
    }

export const PayrollContext = createContext<PayrollContextType>({
    currentSlot: "",
    setCurrentSlot: () => { },
    fetchSalaries: async () => [],
    fetchCreateSalaryDefinition: async (salaryDefinition: any) => [],
    fetchUpdateSalaryDefinition: async (id: number, salaryDefinition: any) => [],
    fetchDeleteSalaryDefinition: async (id: number) => [],
    fetchTaxes: async () => [],
    fetchCreateTaxDefinition: async (taxDefinition: any) => [],
    fetchUpdateTaxDefinition: async (id: number, taxDefinition: any) => [],
    fetchDeleteTaxDefinition: async (id: number) => []
});

export const usePayrollContext = () => {
    return useContext(PayrollContext);
};

export default function PayrollProvider({ children }: PayrollContextProps) {
    const [currentSlot, setCurrentSlot] = useState<string>("salaryDefinition");

    const fetchSalaries = async () => {
        let response = await fetch(`/payroll/api/salaryDefinition`)

        let salaries = await response.json()
        console.log(salaries);

        return salaries
    }
    const fetchCreateSalaryDefinition = async (salaryDefinition: any) => {

        const newSalaryDefinition = {
            title: salaryDefinition.title,
            level: salaryDefinition.level,
            basicSalary: salaryDefinition.basicSalary,
            allowance: salaryDefinition.allowance,
            grossSalary: salaryDefinition.grossSalary,
            deductions: salaryDefinition.deductions,
            netSalary: salaryDefinition.netSalary
        }

        let response = await fetch(`/payroll/api/salaryDefinition`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(newSalaryDefinition)
        })

        let data = await response.json()
        console.log(data);

        return data
    }
    const fetchDeleteSalaryDefinition = async (id: number) => {

        let response = await fetch(`/payroll/api/salaryDefinition/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json',
            }
        })


        let data = await response.json()
        console.log(data);
        return data
    }
    const fetchUpdateSalaryDefinition = async (id: number, salaryDefinition: any) => {
        let response = await fetch(`/payroll/api/salaryDefinition/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(salaryDefinition)
        })

        let salaries = await response.json()
        console.log(salaries);
        return salaries
    }


    const fetchTaxes = async () => {
        let baseUrl = 'https://localhost:7267/Tax'
        let data = await fetch(baseUrl)

        let taxes = await data.json()

        return taxes
    }
    const fetchCreateTaxDefinition = async (taxDefinition: any) => {
        let baseUrl = 'https://localhost:7267/Tax'
        let data = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(taxDefinition)
        })

        let taxes = await data.json()
        console.log(taxes);

        return taxes
    }
    const fetchDeleteTaxDefinition = async (id: number) => {
        let baseUrl = `https://localhost:7267/Tax/${id}`

        let data = await fetch(baseUrl, {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json',
            }
        })

        let taxes = await data.json()

        return taxes
    }
    const fetchUpdateTaxDefinition = async (id: number, taxDefinition: any) => {
        let baseUrl = `https://localhost:7267/Tax/${id}`
        let data = await fetch(baseUrl, {
            method: 'PUT',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(taxDefinition)
        })

        let taxes = await data.json()
        return taxes
    }




    const contextValue: PayrollContextType = {
        currentSlot,
        setCurrentSlot,
        fetchSalaries,
        fetchCreateSalaryDefinition,
        fetchUpdateSalaryDefinition,
        fetchDeleteSalaryDefinition,
        fetchTaxes,
        fetchCreateTaxDefinition,
        fetchDeleteTaxDefinition,
        fetchUpdateTaxDefinition
    }

    return (
        <PayrollContext.Provider value={contextValue}>
            <div>
                {children}
            </div>
        </PayrollContext.Provider>
    )
}
