import Link from 'next/link';

interface BentoCardProps {
    href: string;
    icon?: React.ComponentType<any>;
    title: string;
    colSpan: number;
    rowSpan: number;
    gradient: string;
    description?: string;
    children?: React.ReactNode;

}

export function BentoCard({ href, icon, title, colSpan, rowSpan, gradient, description, children }: BentoCardProps){
    const Icon = icon;
    
    return (
        <Link
        href={href}
        className={`col-span-${colSpan} row-span-${rowSpan} bg-gradient-to-br ${gradient} rounded-2xl p-8 text-white hover:scale-[1.02] transition-transform shadow-xl group overflow-hidden relative`}>
            {Icon && <Icon size= {48} className="mb-4 text-purple-400 group-hover:text-purple-300 transition-colors"/>}
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            {description && (
                <p className="text-slate-300 leading-relaxed text-lg">{description}</p>
            )}
            {children}
        </Link> 
    )
}