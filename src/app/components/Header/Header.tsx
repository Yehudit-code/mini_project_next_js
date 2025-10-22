import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src="/hadasim_logo.png" alt="Hadasim Logo" />
            <Link href="/register" className={styles.registerButton}>
                Register
            </Link>

        </header>
    );
}
