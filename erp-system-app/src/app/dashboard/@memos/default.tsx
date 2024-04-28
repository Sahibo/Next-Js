"use client";
import { useDashboardContext } from "@/contexts/DashboardContext";
import { Memo } from "@/types/Memo";
import { useEffect, useState } from "react";
import { Status } from "@/types/Memo";
import Table from "@/components/Table";

export default function MemoSlot() {
  const [memosData, setMemosData] = useState<Memo[]>([]);
  const dashboardContext = useDashboardContext();

  useEffect(() => {
    const fetchData = async () => {
      const memos = await dashboardContext.fetchMemos();
      setMemosData(memos);
    };
    fetchData();
  }, [dashboardContext]);

  //Auto
  const headers = ["Memo Title", "Sent From", "Sent To", "Status"];

  const data = memosData.map((memo) => [
    memo.title,
    memo.sentFrom,
    memo.sentTo,
    Status[memo.status],
  ]);

 
  //

  return <Table headers={headers} data={data}/>;
}
