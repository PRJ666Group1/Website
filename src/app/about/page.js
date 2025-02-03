import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './about.module.css';

export default function About() {
    return (
        <div>
            <Header />
        
        <div className={styles.page}>
            
            <main className={styles.main}>
                <h1 className={styles.heading}>About MoneyMap</h1>

                <section className={styles.hero}>
                    <div className={styles.textContent}>
                        <h2 className={styles.sectionHeading}>Project Overview</h2>
                        <p className={styles.subheading}>
                            MoneyMap is an AI-powered budgeting assistant designed to simplify and enhance personal finance 
                            management. It provides users with automated insights and personalized recommendations based on 
                            their spending patterns.
                        </p>
                    </div>
                </section>

                <div className={styles.imageOverlay}>
                    <img 
                        src="/assets/dollar.svg" 
                        alt="Background" 
                        className={styles.lightImage} 
                    />
                    <div className={styles.overlayText}>
                        <p>
                            Empowering young professionals to achieve financial stability with ease.
                        </p>
                    </div>
                </div>

                <section className={styles.features}>
                    <h2 className={styles.sectionHeading}>Key Features</h2>
                    <ul className={styles.featureList}>
                        <li>Personalized financial dashboard</li>
                        <li>AI-powered financial advice</li>
                        <li>Transaction management and categorization</li>
                        <li>Real-time alerts and notifications</li>
                        <li>Multi-platform support (Web, iOS, Android)</li>
                    </ul>
                </section>

                <section className={styles.team}>
                    <h2 className={styles.sectionHeading}>Meet Our Team</h2>
                    <ul className={styles.teamList}>
                        <li>Arad Fadaei </li>
                        <li>Arya Kavar</li>
                        <li>Vladislav Yatsenko</li>
                        <li>Myles Hinds</li>
                        <li>Roma Amiri</li>
                        <li>Athul Anilkumar</li>
                    </ul>
                </section>
            </main>
            <Footer />
        </div>
    </div>
    );
}
