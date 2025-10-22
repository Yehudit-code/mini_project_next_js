import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="/hadasim_logo.png" alt="Hadasim Logo" />
      <button className={styles.registerButton}>Register</button>
    </header>
  );
}
