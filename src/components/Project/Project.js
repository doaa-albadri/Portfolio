import React from "react";
import styles from "./Project.module.css";

export default function Project({ link, img, ...props }) {
  return (
    <div className={styles.card}>
      <a href={link}>
        <img width={150} height={150} src={img} alt="project" />
      </a>
    </div>
  );
}
