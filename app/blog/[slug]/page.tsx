import { Tweet } from "react-tweet";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import rehypeHighlightQuotes from "@/lib/rehype-highlight-quotes";

type Block = 
  | { type: 'markdown'; content: string }
  | { type: 'tweet'; id: string };

function extractPostBlocks(content: string): Block[] {
  const blocks: Block[] = [];
  let currentMarkdown = '';

  const lines = content.split('\n');
  const tweetRegex = /^https?:\/\/(?:twitter|x)\.com\/(?:[^/]+)\/status\/([0-9]+)\s*$/;

  for (const line of lines) {
    const trimmedLine = line.trim();
    const match = trimmedLine.match(tweetRegex);

    if (match) {
      // If we have accumulated markdown, push it
      if (currentMarkdown) {
        blocks.push({ type: 'markdown', content: currentMarkdown });
        currentMarkdown = '';
      }
      // Push the tweet block
      blocks.push({ type: 'tweet', id: match[1] });
    } else {
      // Append line to current markdown, preserving the newline
      currentMarkdown += line + '\n';
    }
  }

  // Push remaining markdown
  if (currentMarkdown) {
    blocks.push({ type: 'markdown', content: currentMarkdown });
  }

  return blocks;
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const blocks = post.description ? extractPostBlocks(post.description) : [];

  return (
    <article className="max-w-2xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center text-sm text-gray-400 hover:text-gray-900 mb-8 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
        Back to all harangues
      </Link>

      <header className="mb-10 space-y-4">
        <h1 className="text-3xl md:text-4xl font-serif font-medium text-balance leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 text-gray-500 font-sans text-sm">
            <span className="font-medium text-gray-900">{post.author}</span>
            <span>·</span>
            <time>{format(parseISO(post.date), "MMMM d, yyyy")}</time>
        </div>
      </header>

      <div className="prose prose-lg prose-gray font-serif max-w-none">
         {blocks.map((block, index) => {
           if (block.type === 'tweet') {
             return (
               <div key={index} className="not-prose flex justify-center my-12 tweet-container">
                   <div className="w-full max-w-[550px] light">
                       <Tweet id={block.id} />
                   </div>
               </div>
             );
           } else {
             return (
               <div key={index} className="text-xl leading-relaxed text-gray-600 mb-8 markdown-content">
                 <ReactMarkdown
                   rehypePlugins={[rehypeHighlightQuotes]}
                   components={{
                     a: ({ node, ...props }) => <a className="underline decoration-gray-400 underline-offset-4 hover:text-gray-900 transition-colors" {...props} />,
                     p: ({ node, ...props }) => <p className="mb-6" {...props} />,
                     strong: ({ node, ...props }) => <strong className="font-semibold text-gray-900" {...props} />,
                   }}
                 >
                   {block.content}
                 </ReactMarkdown>
               </div>
             );
           }
         })}
         
         {post.tweetId && (
            <div className="not-prose flex justify-center my-12 tweet-container">
                <div className="w-full max-w-[550px] light">
                    <Tweet id={post.tweetId} />
                </div>
            </div>
         )}
      </div>
    </article>
  );
}
