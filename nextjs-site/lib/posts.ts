import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'


interface Post {
    slug: string;
    title: string; 
    excerpt: string;
    date: string;
    category: 'tech' | 'life' | 'paranormal';
    content: string;
}

export async function getPostBySlug(slug: string){
    // node fs search
    const filePath = path.join(process.cwd(), 'posts', `${slug}.md`)
    const fileContents = await fs.readFile(filePath, 'utf-8')

    // parse frontmatter / content
    const {data, content} = matter(fileContents)

    const processedContent = await remark()
    .use(html)
    .process(content)

    const contentHTML = processedContent.toString()
    // return post 
    return {
        slug,
        ...data,
        content: contentHTML
    } as Post 
}

export async function getPostSlugs(): Promise<{ slug:string }[]> {
    const dirPath = path.join(process.cwd(), 'posts')
    const dirContents = await fs.readdir(dirPath)

    const slugs = dirContents
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace('.md', ''))

    return slugs.map(slug => ({ slug }))
}
