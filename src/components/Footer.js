// src/components/Footer.js
import Link from 'next/link';
import styles from './Footer.module.css';  // Import the CSS Module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul className={styles.navList}>
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
          <li>
            <Link href="#about" className={styles.link}>
              About
            </Link>
          </li>
          <li>
            <Link href="#contact" className={styles.link}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.footerText}>Seneca College</div>
      <div className={styles.copyright}>@ 2024 MoneyMap. All rights reserved</div>
    </footer>
  );
};

export default Footer;
