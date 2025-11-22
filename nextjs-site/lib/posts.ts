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

interface PostFrontMatter {
    title: string;
    excerpt: string;
    date: string;
    category: 'tech' | 'life' | 'paranormal';
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

export async function getAllPosts(): Promise<{ life:Post[], tech:Post[], paranormal:Post[] }> {
    const dirPath = path.join(process.cwd(), 'posts')
    const dirContents = await fs.readdir(dirPath, { recursive: true })
    

    const posts:Post[] = []
    const life:Post[] = []
    const tech:Post[] = []
    const paranormal:Post[] = []
    
    for(const file of dirContents){
        const slug = file.slice(0, -3)

        const filePath = path.join(process.cwd(), 'posts', `${slug}.md`)
        const fileContents = await fs.readFile(filePath, 'utf-8')


        const {data, content} = matter(fileContents) as unknown as {data: PostFrontMatter, content: string}

        const processedContent = await remark()
        .use(html)
        .process(content)

        const contentHTML = processedContent.toString()
        
        const post = {
            slug,
            ...data, 
            content: contentHTML
        }

        posts.push(post)
    }

    for(const post of posts){
        switch(post.category) {
            case('life'):
                life.push(post)
                break;
            case('tech'):
                tech.push(post)
                break;
            case('paranormal'):
                paranormal.push(post)
                break;
            default:
                console.log("error, non category post")
                break;
        }
    }       


    
    return {
        life,
        tech,
        paranormal
    }

}