import Link from 'next/link'


interface MobileCardProps {
    href: string;
    title: string;
    icon: React.ComponentType<any>;
    description?: string;
    children?: React.ReactNode;
}


export function MobileCard({ href, title, icon, description, children}: MobileCardProps) {
    const Icon = icon;
    
    return (
        <Link
            href={href}
            className={`block w-full bg-mgs-menu p-8 border-2 border-mgs-border text-mgs-dark rounded-2xl p-6 text-white shadow-xl`}>
                {Icon && <Icon size={40} className="mb-3 text-mgs-dark" />}
                <h2 className="text-2xl text-mgs-dark font-bold mb-2">{title}</h2>
                {description && (
                    <p className="text-slate-900 text-sm">{description}</p>
                )}
                {children}
        </Link>
    )
}