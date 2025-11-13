import Link from 'next/link'


interface MobileCardProps {
    href: string;
    title: string;
    icon: React.ComponentType<any>;
    description?: string;
    gradient: string;
    children?: React.ReactNode;
}


export function MobileCard({ href, title, icon, description, gradient, children}: MobileCardProps) {
    const Icon = icon;
    
    return (
        <Link
            href={href}
            className={`block w-full bg-gradient-to-br ${gradient} rounded-2xl p-6 text-white shadow-xl`}>
                {Icon && <Icon size={40} className="mb-3" />}
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                {description && (
                    <p className="text-slate-900 text-sm">{description}</p>
                )}
                {children}
        </Link>
    )
}