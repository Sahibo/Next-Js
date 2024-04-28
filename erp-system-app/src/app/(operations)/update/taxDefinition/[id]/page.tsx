'use client'

import { usePayrollContext } from "@/contexts/PayrollContext"
import { useState } from "react"

interface Props {
    params:
    {
        id: string
    }
}

export default function Update({ params }: Props) {
    const { id } = params
    const [taxDefinition, setTaxDefinition] = useState(
        {
            taxType: '',
            value: 0
        }
    )

    const payrollContext = usePayrollContext()

    const handleUpdate = async () => {
        let taxDefinition = {
            taxType: 'NHIS',
            value: 5.5
        }
        await payrollContext.fetchUpdateTaxDefinition(Number(id), taxDefinition)
    }
    return (
        <div>
            <button onClick={handleUpdate}>Update</button>
        </div>
    )
}