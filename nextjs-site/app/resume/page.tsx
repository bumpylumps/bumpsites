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
            I build scalable full stack web applications and microservices that integrate with customer relationship management (CRM) systems on the web. Recent work includes developing a platform for legal case management, building microservices to sync client business data across multiple CRM platforms, and creating websites with automated content syndication features for publishing podcasts and video content.
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
            <span className={styles.summaryLabel}>AI Tools:</span> Claude, AMP 
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
                <div className={styles.jobTech}>Tech Consulting Company</div>
                <div className={styles.jobDates}>January 2024 - January 2025</div>
            </div>
            <div className={styles.jobTitle}>Software Engineer</div>
            <div className={styles.jobTech}>Technologies: TypeScript, Node.js, C#</div>
            <div className={styles.jobDescription}>
                <div className={styles.bulletPoint}>Built automated microservices for CRM integrations saving clients $77,000 annually in operations by syncing their business data across several platforms</div>
                <div className={styles.bulletPoint}>Improved existing microservice performance by 60% through code refactoring lowering API calls for CRM integrations to avoid rate limits and service bottlenecking</div>
                <div className={styles.bulletPoint}>Updated microservice features for client’s new CRM services to preserve their functionality</div>

                <div className={styles.bulletPoint}>Led team collaboration initiatives to improve internal developer experience:
                    <div className={styles.bulletPoint}>Created company code standards documentation</div>
                    <div className={styles.bulletPoint}>Organized weekly developer meetings</div>
                    <div className={styles.bulletPoint}>Assisted in discovery for client issues and integration bugs</div>
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
            <div className={styles.jobTech}>Technologies: NextJS, TypeScript, NodeJS, Go</div>
            
            <div className={styles.jobDescription}>
                <div style={{fontWeight: 600, marginTop: '0.5rem', marginBottom: '0.25rem'}}>Contract Engagements:</div>
                
                <div style={{marginLeft: '1rem', marginTop: '0.5rem'}}>
                    <div style={{fontWeight: 500}}>RevOps HQ (July 2025 - October 2025)</div>
                    <div className={styles.jobTech}>Tech Consulting Company</div>
                    <div className={styles.bulletPoint}>Implemented Model Context Protocol (MCP) servers enabling Claude to securely access client databases and provide assistance to client employees</div>
                    <div className={styles.bulletPoint}>Conducted technical discovery to solve prospective client CRM integration issues with solutions leading to 3 successful contract conversions</div>
                    <div className={styles.bulletPoint}>Built an automated abandoned cart recovery system using the Shopify API increasing client order recovery by 30%</div>
                    <div className={styles.bulletPoint}>Developed microservices for clients, synchronizing their business data across HubSpot, Magento, and custom CRMs</div>
                    <div className={styles.bulletPoint}>Created a legal case management platform with document uploading, court order tracking, and a message system for tracking communication between parties</div>
                </div>
                
                <div style={{fontWeight: 600, marginTop: '1rem', marginBottom: '0.25rem'}}>Core Services:</div>
                <div className={styles.bulletPoint}>Architected and deployed custom websites for small business clients improving their web presence and customer outreach</div>
                <div className={styles.bulletPoint}>Built client websites with automated content syndication via the Buzzsprout and YouTube APIs, streamlining podcast audio and video episode publishing</div>
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