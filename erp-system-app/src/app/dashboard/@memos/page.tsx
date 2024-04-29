"use client";
import { useDashboardContext } from "@/contexts/DashboardContext";
import { Memo } from "@/types/Memo";
import { useEffect, useState } from "react";
import { Status } from "@/types/Memo";
import Table from "@/components/Table";
// import { formatKeys } from "@/functions";

export default function MemoSlot() {
    const [memosData, setMemosData] = useState<Memo[]>([])
    const dashboardContext = useDashboardContext()
    useEffect(() => {
        const fetchData = async () => {
            const memos = await dashboardContext.fetchMemos();
            setMemosData(memos);
        };
    
        fetchData();
    }, [dashboardContext]);
        
    return <Table data={memosData} />
 
}
