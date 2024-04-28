'use client'
import { useDashboardContext } from "@/contexts/DashboardContext"
import { useEffect, useState } from "react"
import { Staff } from "@/types/Staff"
import { Role } from "@/types/Staff"
export default function StaffListSlot() {
    const [staffList, setStaffList] = useState<Staff[]>([])
    const dashboardContext = useDashboardContext()

    useEffect(() => {
        const staffList = dashboardContext.fetchStaffList();
        setStaffList(staffList);

    }, [dashboardContext])

    return (
        <div>
            {staffList.map((staffMember) => (
                <div key={staffMember.id}>
                    <p>
                        Id: {staffMember.id}
                    </p>
                    <p>
                        Name: {staffMember.name}
                    </p>
                    <p>
                        Role: {Role[staffMember.role]}
                    </p>
                    <p>
                        Designation: {staffMember.designation}
                    </p>
                </div>
            ))}
        </div>
    )
}
