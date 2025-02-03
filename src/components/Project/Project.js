import React from "react";
import styles from "./Project.module.css";

export default function Project({ link, img, size, ...props }) {
  return (
    <div className={styles.card}>
      <a href={link}>
        <img
          width={size ? size : 150}
          height={size ? size : 150}
          src={img}
          alt="project"
        />
      </a>
    </div>
  );
}
