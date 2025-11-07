import styles from './page.module.css'


export default function Resume() {
    return (
<div className="max-w-4xl mx-auto p-8">
    <div className={styles.buttonContainer}>
    <a href="/resume.pdf"
        download="Alexander Fulop-resume.pdf"
        className={styles.downloadButton} > 
        Download PDF copy
    </a>
    </div>
    
    <div className={styles.header}>
        <h1>Alexander Fulop</h1>
        <div className={styles.title}>Software Engineer</div>
        <div className={styles.contact}><a href="mailto:bumpsites@gmail.com" >bumpsites@gmail.com</a> ▪ (860) 992-7006 ▪ <a href="https://www.bumpsites.com/">Bumpsites</a></div>
    </div>
    
    <div className={`${styles.section} ${styles.careerSummary}`}>
        <h2 className={styles.sectionTitle}>Career Summary</h2>
        <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>Experience</span> 4 years Full Stack Web Development
        </div>
        <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>Languages</span> NextJS, Typescript, Go, Node.js, C#
        </div>
        <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>Tools</span> Git, Figma, Excalidraw, Whiteboard + Marker, Postman, Ngrok, dotNet
        </div>
    </div>
    
    <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Professional Experience</h2>
        
        <div className={styles.jobEntry}>
            <div className={styles.jobHeader}>
                <div className={styles.jobCompany}>RevOps HQ</div>
                <div className={styles.jobLocation}>Remote, USA</div>
            </div>
            <div className={styles.jobTitleRow}>
                <div className={styles.jobTitle}>Freelance Software Engineer</div>
                <div className={styles.jobDates}>July/2025 - Present</div>
            </div>
            <div className={styles.jobTech}>Technologies: Typescript, Node.js</div>
            <div className={styles.jobDescription}>
                <div className={styles.bulletPoint}>Built automated email templates with Shopify API integration for abandoned checkout recovery</div>
                <div className={styles.bulletPoint}>Developed microservices to sync clients business data across multiple CRM platforms</div>
                <div className={styles.bulletPoint}>Created custom website features to meet specific client business requirements</div>
            </div>
        </div>
        
        <div className={styles.jobEntry}>
            <div className={styles.jobHeader}>
                <div className={styles.jobCompany}>Unlimited Tech Solutions</div>
                <div className={styles.jobLocation}>Remote, USA</div>
            </div>
            <div className={styles.jobTitleRow}>
                <div className={styles.jobTitle}>Software Engineer</div>
                <div className={styles.jobDates}>January/2024 - January/2025</div>
            </div>
            <div className={styles.jobTech}>Technologies: NextJS, TypeScript, Node.js, C#</div>
            <div className={styles.jobDescription}>
                <div className={styles.bulletPoint}>Designed and built automated microservices for CRM integration, saving clients $77,000 annually in operations</div>
                <div className={styles.bulletPoint}>Optimized microservice performance for long-term clients:
                    <div className={styles.subBullet}>Improved performance through code refactoring and reducing API calls</div>
                    <div className={styles.subBullet}>Updated microservice features for new client platforms</div>
                </div>
                <div className={styles.bulletPoint}>Led team collaboration initiatives:
                    <div className={styles.subBullet}>Created company code standards guide</div>
                    <div className={styles.subBullet}>Organized weekly development meetings</div>
                    <div className={styles.subBullet}>Assisted in discovery for client needs and services</div>
                </div>
                <div className={styles.bulletPoint}>Mentored junior developer through code reviews, skill development and debugging assistance</div>
            </div>
        </div>        
        <div className={styles.jobEntry}>
            <div className={styles.jobHeader}>
                <div className={styles.jobCompany}>Bumpsites</div>
                <div className={styles.jobLocation}>Albuquerque, NM</div>
            </div>
            <div className={styles.jobTitleRow}>
                <div className={styles.jobTitle}>Owner/Freelance Web Developer</div>
                <div className={styles.jobDates}>January/2022 – Present</div>
            </div>
            <div className={styles.jobTech}>Technologies: JS/TS, React, NextJS, dotNet, Go, nGrok</div>
            <div className={styles.jobDescription}>
                <div className={styles.bulletPoint}>Performed code quality analysis and debugging to enhance client products</div>
                <div className={styles.bulletPoint}>Developed custom website features including UI elements, backend systems, and servers</div>
            </div>
        </div>
    </div>
    
    <div className={styles.footer}>
        <div>
        <a href="https://github.com/bumpylumps">Github</a> ▪ <a href="https://www.linkedin.com/in/alexander-fulop/">Linkedin</a> ▪ <a href="https://www.bumpsites.com/">Bumpsites</a> ▪ <a href="https://x.com/alayfalupe">Twitter</a>
        </div>
    </div>
        </div>

    );
}