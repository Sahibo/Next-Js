'use client'
import { useDashboardContext } from "@/contexts/DashboardContext"
import { useEffect, useState } from "react"
import { Staff } from "@/types/Staff"
import { Role } from "@/types/Staff"
import Table from "@/components/Table"
export default function StaffListSlot() {
    const [staffList, setStaffList] = useState<Staff[]>([])
    const dashboardContext = useDashboardContext()

    useEffect(() => {
        const fetchData = async () => {

            const staffList = await dashboardContext.fetchStaffList();
            setStaffList(staffList);
        }
        fetchData()

    }, [dashboardContext])

    return (
        <div>
           <Table data={staffList} />
        </div>
    )
}
