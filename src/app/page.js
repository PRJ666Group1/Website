import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './page.module.css';
import Link from 'next/link';


export default function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-8">

      {/* Hero Section */}
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
            <img src="/assets/dollar.svg" alt="Finance Management" className={styles.image} />
          </div>

        </div>

        <hr className={styles.hr}/>

        {/* Features Section */}
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <img src="/assets/check.svg" alt="Feature 1" className={styles.featureImage} />
            <h3 className={styles.featureTitle}>Advanced AI Insights</h3>
            <p className={styles.featureText}>AI-powered tailored personalized insights that are based on your spending habits and financial situation to optimize spending and help you reach your financial goals.</p>
          </div>
          <div className={styles.featureItem}>
            <img src="/assets/flag.svg" alt="Feature 2" className={styles.featureImage} />
            <h3 className={styles.featureTitle}>Dynamic Budget Adjustment</h3>
            <p className={styles.featureText}>Automatically update your budget as your financial situation changes in real time</p>
          </div>
          <div className={styles.featureItem}>
            <img src="/assets/star.svg" alt="Feature 3" className={styles.featureImage} />
            <h3 className={styles.featureTitle}>Goal-Based Planning</h3>
            <p className={styles.featureText}>Set and monitor financial goals, with personalized advice to help you achieve them</p>
          </div>
        </div>

        <hr className={styles.hr}/>

        <div className={styles.downloadSection}>
          <Link href="/download">
            <h2 className={styles.downloadTitle}>Download the Desktop App for Free</h2>
          </Link>
          <div className={styles.downloadImageContainer}>
            <Link href="/download">
              <img 
                src="/assets/download.svg" 
                alt="Desktop App Image" 
                className={styles.downloadImage} 
              />
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
