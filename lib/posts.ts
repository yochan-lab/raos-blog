import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { posts as hardcodedPosts, Post } from './data';

const postsDirectory = path.join(process.cwd(), 'lib/markdown_files');

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string): Post | undefined {
  // Check hardcoded first
  const hardcoded = hardcodedPosts.find((p) => p.slug === slug);
  if (hardcoded) return hardcoded;

  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);

  if (!fs.existsSync(fullPath)) {
    return undefined;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  let formattedDate = new Date().toISOString().split('T')[0]; // Default to today
  
  if (data.date) {
      if (typeof data.date === 'string') {
          formattedDate = data.date;
      } else if (data.date instanceof Date) {
          try {
             formattedDate = data.date.toISOString().split('T')[0];
          } catch (e) {
             console.error(`Invalid date object in ${realSlug}:`, data.date);
          }
      } else {
           // Try to parse whatever it is
           try {
              const d = new Date(data.date);
              if (!isNaN(d.getTime())) {
                   formattedDate = d.toISOString().split('T')[0];
              }
           } catch (e) {
               console.error(`Invalid date format in ${realSlug}:`, data.date);
           }
      }
  }

  return {
    id: realSlug,
    slug: realSlug,
    title: data.title || realSlug,
    date: formattedDate,
    author: data.author || 'Rao',
    tweetId: data.tweetId,
    description: content,
  } as Post;
}

export function getAllPosts(): Post[] {
  const fileSlugs = getPostSlugs();
  const filePosts = fileSlugs
    .filter((slug) => slug.endsWith('.md'))
    .map((slug) => getPostBySlug(slug.replace(/\.md$/, '')))
    .filter((post): post is Post => post !== undefined);

  // Combine and sort
  const allPosts = [...hardcodedPosts, ...filePosts];
  
  // Sort by date desc
  return allPosts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
