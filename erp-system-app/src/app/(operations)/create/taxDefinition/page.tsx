
'use client'

import { usePayrollContext } from "@/contexts/PayrollContext"
import { useRouter } from "next/navigation"
import {  useState } from "react"
import styles from './taxDefinition.module.css'
export default function Create() {
    const [taxDefinition, setTaxDefinition] = useState(
        {
            taxType: '',
            value: 0
        }
    )
    const router = useRouter()
    const payrollContext = usePayrollContext()

    const handleCreateTaxDefinition = async () => {
        let taxDefinition = {
            taxType: 'VAT',
            value: 2.5
        }
        await payrollContext.fetchCreateTaxDefinition(taxDefinition)

    }


    const handleGoBack = () => {
        router.back()
    }

    return (
        <div className={styles.container}>
            <button onClick={handleGoBack}>Go back</button>
            <button onClick={() => handleCreateTaxDefinition()}>Create</button>
        </div>
    )
}