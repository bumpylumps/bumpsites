import styles from './page.module.css'


export default function Resume() {
    return (
<div className={`max-w-4xl mx-auto p-8 ${styles.resumeContainer}`}>
    <div className={styles.buttonContainer}>
    <a href="/alex-fulop-resume.pdf"
        download="alex-fulop-resume.pdf"
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
        <span>
            I build scalable web applications and microservices to integrate with existing systems on the web. Recent work includes developing platforms for legal case management, designing microservices to sync client data across multiple CRM platforms, and building automated content syndication features for publishing audio and video content on websites.
        </span>
    </div>

    <div className={`${styles.section} ${styles.careerSummary}`}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>Experience:</span> 4+ years of Full Stack Web Development
        </div>
        <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>Languages:</span> TypeScript, Go, C#, Node.js
        </div>
        <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>Frameworks:</span> Next.js, React, .NET 
        </div>
        <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>Tools:</span> Git, Postman, Ngrok, Docker
        </div>
        <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>AI Tools:</span> MCP, AMP for debugging and code generation
        </div>
    </div>
    
    <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Professional Experience</h2>
        
        <div className={styles.jobEntry}>
            <div className={styles.jobHeader}>
                <div className={styles.jobCompany}>Unlimited Tech Solutions</div>
                <div className={styles.jobLocation}>Remote, USA</div>
            </div>
            <div className={styles.jobTitleRow}>
                <div className={styles.jobTitle}>Software Engineer (Full-Time)</div>
                <div className={styles.jobDates}>January 2024 - January 2025</div>
            </div>
            <div className={styles.jobTech}>Technologies: NextJS, TypeScript, Node.js, C#</div>
            <div className={styles.jobDescription}>
                <div className={styles.bulletPoint}>Designed and built automated microservices for CRM integration, saving clients $77,000 annually in operations</div>
                <div className={styles.bulletPoint}>Optimized microservice performance for long-term clients:
                    <div className={styles.bulletPoint}>Improved microservice performance by 60% through code refactoring, reducing API calls from 500 to 50 per sync cycle</div>
                    <div className={styles.bulletPoint}>Updated microservice features for new client platforms</div>
                </div>
                <div className={styles.bulletPoint}>Led team collaboration initiatives:
                    <div className={styles.bulletPoint}>Created company code standards guide</div>
                    <div className={styles.bulletPoint}>Organized weekly development meetings</div>
                    <div className={styles.bulletPoint}>Assisted in discovery for client needs and services</div>
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
                <div className={styles.jobTitle}>Owner/Freelance Software Engineer</div>
                <div className={styles.jobDates}>January 2022 – Present</div>
            </div>
            <div className={styles.jobTech}>Technologies: NextJS, TypeScript, dotNet, Go</div>
            
            <div className={styles.jobDescription}>
                <div style={{fontWeight: 600, marginTop: '0.5rem', marginBottom: '0.25rem'}}>Contract Engagements:</div>
                
                <div style={{marginLeft: '1rem', marginTop: '0.5rem'}}>
                    <div style={{fontWeight: 500}}>RevOps HQ (July 2025 - October 2025)</div>
                    <div className={styles.jobTech}>Technologies: NextJS, TypeScript, .Net, Go</div>
                    <div className={styles.bulletPoint}>Implemented Model Context Protocol (MCP) servers enabling AI assistants to securely access client databases, demonstrating expertise in emerging AI integration patterns</div>
                    <div className={styles.bulletPoint}>Conducted technical discovery for prospective clients, with solutions leading to 3 successful contract conversions</div>
                    <div className={styles.bulletPoint}>Built automated abandoned cart recovery system using Shopify API, increasing client revenue by 30%</div>
                    <div className={styles.bulletPoint}>Developed microservices synchronizing business data across HubSpot, Magento, and custom CRMs</div>
                    <div className={styles.bulletPoint}>Created case management MVP with document uploading, court order tracking, and a message system for tracking communication between parties</div>
                </div>
                
                <div style={{fontWeight: 600, marginTop: '1rem', marginBottom: '0.25rem'}}>Core Services:</div>
                <div className={styles.bulletPoint}>Architected and deployed custom web applications for small business clients</div>
                <div className={styles.bulletPoint}>Built podcast websites with automated content syndication via Buzzsprout and YouTube APIs, streamlining multi-format episode publishing</div>
            </div>
        </div>
    </div>
    
    <div className={styles.footer}>
        <div>
        <a href="https://github.com/bumpylumps">Github</a> ▪ <a href="https://www.linkedin.com/in/alexander-fulop/">Linkedin</a> ▪ <a href="https://www.bumpsites.com/">Bumpsites</a> ▪ <a href="https://x.com/alayfalupe">X</a>
        </div>
    </div>
</div>

    );
}