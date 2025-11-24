import Link from "next/link";
import { Post } from "@/lib/data";
import { format, parseISO, getYear } from "date-fns";

export function PostList({ posts }: { posts: Post[] }) {
  // Sort posts by date (newest first)
  const sortedPosts = [...posts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Group posts by year
  const postsByYear = sortedPosts.reduce((acc, post) => {
    const year = getYear(parseISO(post.date));
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<number, Post[]>);

  // Get sorted years descending
  const years = Object.keys(postsByYear).map(Number).sort((a, b) => b - a);

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-16 relative">
      {/* Sticky Sidebar Navigation */}
      <aside className="md:w-24 flex-shrink-0">
        <div className="sticky top-24 flex md:flex-col gap-4 md:gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide bg-background/80 backdrop-blur-sm md:bg-transparent z-10 py-2 md:py-0">
          {years.map((year) => (
            <a
              key={year}
              href={`#year-${year}`}
              className="font-serif text-lg text-gray-400 hover:text-gray-900 transition-colors whitespace-nowrap"
            >
              {year}
            </a>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-grow flex flex-col gap-16">
        {years.map((year) => (
          <div key={year} id={`year-${year}`} className="space-y-8 scroll-mt-32">
            <div className="flex items-center gap-4">
              <span className="font-serif text-2xl font-medium text-gray-900">{year}</span>
              <div className="h-px bg-gray-200 flex-grow" />
            </div>

            <div className="flex flex-col gap-10 md:gap-12">
              {postsByYear[year].map((post) => (
                <article key={post.id} className="grid grid-cols-[1fr_3fr] md:grid-cols-[120px_1fr] gap-4 items-baseline">
                    {/* Date Column */}
                    <div className="text-xs md:text-sm text-gray-500 font-sans tracking-wide">
                        {format(parseISO(post.date), "MMM d")}
                    </div>
                    
                    {/* Content Column */}
                    <div className="flex flex-col gap-2">
                        <Link href={`/blog/${post.slug}`} className="block group">
                            <h2 className="font-serif text-xl md:text-2xl font-medium text-gray-900 group-hover:text-gray-600 transition-colors leading-tight">
                                {post.title}
                            </h2>
                        </Link>
                        <div className="text-sm text-gray-500 font-sans">
                            {post.author}
                        </div>
                    </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
