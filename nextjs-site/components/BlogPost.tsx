interface BlogPostProps {
    title: string;
    subject: string;
    body: string;
    date: string;
}

export function BlogPost({ title, subject, body, date }: BlogPostProps) {
    return (
        <div><p>Hello</p></div>
    )
}