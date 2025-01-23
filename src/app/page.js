import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './page.module.css';
import Link from 'next/link';


export default function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-8">
        <div className={styles.hero}>

          {/* Left side: Text and Buttons */}
          <div className={styles.textContent}>
            <h1 className={styles.heading}>Take Control of Your Finances with AI-Powered Precision</h1>
            <p className={styles.subheading}>Our AI-driven budget assistant helps you track spending, set goals, and optimize saving efficiently.</p>
            
            <div className={styles.buttons}>
              <Link href="/registration">
                <button className={styles.getStarted}>Get Started</button>
              </Link>
              <Link href="/about">
                <button className={styles.learnMore}>Learn More</button>
              </Link> 
            </div>
          </div>

          {/* Right side: Image */}
          <div className={styles.imageContent}>
            <img src="/assets/dollar_sign.png" alt="Finance Management" className={styles.image} />
          </div>

        </div>
        <hr></hr>
      </main>
      <Footer />
    </div>
  );
}
