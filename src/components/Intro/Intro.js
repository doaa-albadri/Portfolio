import React from "react";

import styles from "./Intro.module.css";

export default function Intro() {
  return (
    <div style={{ width: "100%", padding: "10%" }} className={styles.intro}>
      <h5 className={`${styles.h5} `}>
        Hi, I'm Doaa,{" "}
        <span style={{ color: "#66cccc" }}> a Frontend Web Developer</span>.
      </h5>

      <h6 className={styles.h6}>
        My web development journey started out of curiosity and interest, and
        that's why I love what I do today. I have two years of experience and
        practice in the field. I'm a fast-learner, and I'm passionate about
        acquiring and improving skills while providing services for clients.
      </h6>
    </div>
  );
}
