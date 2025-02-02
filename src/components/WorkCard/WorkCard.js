import React from "react";
import styles from "./WorkCard.module.css";

export default function WorkCard({
  date,
  company,
  description,
  tools,
  ...props
}) {
  return (
    <div className={`flex ${styles.workCard}`}>
      <div>
        <h6 className={styles.date}>{date}</h6>
      </div>
      <div className="flex flex-col gap-2">
        <h6 className={styles.company}>{company}</h6>
        <h6 className={styles.description}>{description}</h6>
        <div className="flex gap-2 flex-wrap">
          {tools.map((tool, index) => {
            return (
              <span key={index} className={styles.tool}>
                {tool}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
