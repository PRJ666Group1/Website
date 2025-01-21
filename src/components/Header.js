// src/components/Header.js
import Link from 'next/link';
import styles from './Header.module.css';  // Import the CSS Module

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}> 
        <h1 className={styles.title}>MoneyMap</h1>
        <nav className={styles.nav}> 
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
      </div>
    </header>
  );
};

export default Header;
