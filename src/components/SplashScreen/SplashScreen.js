import { useEffect, useState } from "react";
import styles from "./SplashScreen.module.css";

const SplashScreen = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.text} ${showText ? styles.show : ""}}`}>
        <h1 className={styles.h1}>Doaa Albadri</h1>
      </div>
    </div>
  );
};

export default SplashScreen;
