// src/components/Header.js
import Link from "next/link";
import styles from "./Header.module.css"; // Import the CSS Module
import Image from "next/image";
import { Container } from "@mantine/core";

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/">
            {/* <h1 className={styles.title}>MoneyMap</h1> */}
            <Image className={styles.logo} src="/assets/moneymap_logo.png" alt="MoneyMap" width={216} height={34} />
          </Link>

          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {/**
            <li>
              <Link href="#packages" className={styles.link}>
                Packages
              </Link>
            </li>
            <li>
              <Link href="#features" className={styles.link}>
                Features
              </Link>
            </li>
             */}
              <li>
                <Link href="/about" className={styles.link}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/download" className={styles.link}>
                  Download
                </Link>
              </li>
              <li>
                <Link href="/registration" className={styles.link}>
                  Registration
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.link}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
    </header>
  );
};

export default Header;
