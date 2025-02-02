import React from "react";
import styles from "./Skill.module.css";

export default function Skill({ skill, ...props }) {
  return <div className={styles.skill}>{skill}</div>;
}
