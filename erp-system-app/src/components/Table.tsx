import styles from "../components/styles/table.module.css";
import { H4, TextSmall } from "./unknown/CustomTexts";
import { Colors } from "./unknown/Colors";

const statusColors: Record<string, string> = {
  Pending: Colors.orange,
  Rejected: Colors.red,
  Approved: Colors.green,
};

export default function Table({
  headers,
  data,
}: {
  headers: any;
  data: any[];
}) {
  console.log("data", data);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.headerRow}>
          <div className={styles.headerItem}>
            <H4>S/N</H4>
          </div>
          {headers.map((header: any, index: number) => (
            <div className={styles.headerItem} key={index}>
              <H4>{header}</H4>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.bodyContainer}>
        {data.map((row: any[], rowIndex: number) => (
          <div className={styles.bodyRow} key={rowIndex}>
            <div className={styles.bodyItem}>
              <TextSmall>
                {(rowIndex + 1).toString().padStart(2, "0")}
              </TextSmall>
            </div>
            {row.map((value: any, itemIndex: number) => (
              <div className={styles.bodyItem} key={itemIndex}>
                {headers[itemIndex] === "Status" ? (
                  <TextSmall style={{ color: statusColors[value] }}>
                    {value}
                  </TextSmall>
                ) : (
                  <TextSmall>{value}</TextSmall>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
