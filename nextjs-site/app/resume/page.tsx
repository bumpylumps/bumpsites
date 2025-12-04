import styles from './page.module.css'


export default function Resume() {
    return (
<div className={`max-w-4xl mx-auto p-8 bg-mgs-menu ${styles.resumeContainer}`}>
    <embed src="/alex-fulop-resume.pdf" type="application/pdf" width="100%" height="800px" />
</div>

    );
}