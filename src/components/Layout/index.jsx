import { Header } from "../Header";
import styles from "./Layout.module.css";

export function Layout({ children }) {
  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <Header />
        {children}
      </div>
    </>
  );
}
