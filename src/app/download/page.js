import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './download.module.css';
import Image from 'next/image';

export default function Download() {
  return (
    <div>
      <Header />
      <main className={styles.downloadContainer}>

        <div className={styles.downloadText}>
          <h1 className={styles.heading}>Download MoneyMap</h1>
          <p className={styles.subheading}>Start managing your finances with AI-powered insights.</p>

          <div className={styles.downloadButtons}>
            <a href="#" className={styles.downloadButton}>
              <Image src="/assets/Googleplay.png" alt="Download on Google Play" width={180} height={50} />
            </a>
            <a href="#" className={styles.downloadButton}>
              <Image src="/assets/Appstore.png" alt="Download on App Store" width={180} height={50} />
            </a>
            <div className={styles.qrCode}>
              <Image src="/assets/QR_code.png" alt="QR Code" width={128} height={128} />
            </div>
          </div>
        </div>

        <div className={styles.imageContent}>
          <Image src="/assets/mobile-phone.png" alt="App Mockup" width={350} height={350} />
        </div>

      </main>
      <Footer />
    </div>
  );
}
