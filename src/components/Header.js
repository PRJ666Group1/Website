"use client";


import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname
import styles from './Header.module.css';
import { Container } from "@mantine/core";
import Image from 'next/image';

const Header = () => {
  const pathname = usePathname(); // Get the current route

  return (
    <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/">
            {/* <h1 className={styles.title}>MoneyMap</h1> */}
            <Image className={styles.logo} src="/assets/moneymap_logo.png" alt="MoneyMap" width={216} height={34} />
          </Link>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {/* Hide the "About" link if the current route is /about */}
            {pathname !== '/about' && (
              <li>
                <Link href="/about" className={styles.link}>
                  About
                </Link>
              </li>
            )}
            {pathname !== '/' && (
              <li>
                <Link href="/" className={styles.link}>
                  Home
                </Link>
              </li>
            )}
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
