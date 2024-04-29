'use client'
import styles from "../components/styles/table.module.css";
import { H4, TextSmall } from "./unknown/CustomTexts";
import { Colors } from "./unknown/Colors";
import { useEffect, useState } from "react";
import { formatKeys, getKeys } from "@/functions";
import { Status } from "@/types/Memo";
import { Role } from "@/types/Staff";

const statusColors: Record<string, string> = {
  Pending: Colors.orange,
  Rejected: Colors.red,
  Approved: Colors.green,
};

interface Props {
  data: any[]
}

export default function Table({ data }: Props) {
  const [headers, setHeaders] = useState<string[]>([])
  const [keys, setKeys] = useState<string[]>([])
  useEffect(() => {
    if (data && data.length > 0) {
      let formattedKeys = formatKeys(data);
      setHeaders(formattedKeys);
      let keys = getKeys(data)
      setKeys(keys)
      console.log(keys);


    }
  }, [data])


  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.headerRow}>
          <div className={styles.headerItem}>
            <H4>S/N</H4>
          </div>
          {headers.map((header: any, index: number) => (
            <div className={styles.headerItem} key={index + 1}>
              <H4>{header}</H4>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.bodyContainer}>
        {data.map((dataItem, rowIndex: number) => (
          <div className={styles.bodyRow} key={rowIndex}>
            <div className={styles.bodyItem}>
              <TextSmall>
                {(rowIndex + 1).toString().padStart(2, "0")}
              </TextSmall>
            </div>
            {keys.map((key, itemIndex) => (
              <div className={styles.bodyItem} key={itemIndex}>
                {key !== 'status' && key !== 'role' ? (
                  <TextSmall>
                    {dataItem[key]}
                  </TextSmall>
                ) : key === 'status' ? (
                  <TextSmall style={{ color: statusColors[Status[dataItem[key]]] }}>
                    {Status[dataItem[key]]}
                  </TextSmall>
                ) : key === 'role' ? (
                  <TextSmall>
                    {Role[dataItem[key]]}
                  </TextSmall>
                ) : null}
              </div>
            ))}



          </div>
        ))}
      </div>
    </div>
  );
}
