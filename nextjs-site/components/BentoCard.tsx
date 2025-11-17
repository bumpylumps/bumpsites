import Link from 'next/link';

interface BentoCardProps {
    href: string;
    icon?: React.ComponentType<any>;
    title: string;
    gridSpan: string;
    gradient: string;
    description?: string;
    children?: React.ReactNode;

}

export function BentoCard({ href, icon, title, gradient, gridSpan, description, children }: BentoCardProps){
    const Icon = icon;
    
    return (
        <Link
        href={href}
        className={`${gridSpan} bg-mgs-menu p-8 text-mgs-dark hover:scale-[1.02] hover:bg-mgs-active transition-transform shadow-xl group overflow-hidden relative`}>
            {Icon && <Icon size= {48} className="mb-4 text-mgs-text group-hover:text-mgs-tan transition-colors"/>}
            <h2 className="text-4xl font-bold mb-4 group-hover:text-mgs-tan">{title}</h2>
            {description && (
                <p className="text-mgs-dark leading-relaxed text-lg">{description}</p>
            )}
            {children}
        </Link> 
    )
}