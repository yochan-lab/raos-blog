import { PostList } from "@/components/PostList";
import { getAllPosts } from "@/lib/posts";
import { Tweet } from "react-tweet";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="space-y-16">
      <section className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-serif font-medium">
          Rao's Sunday Harangues
        </h1>
        <p className="text-xl text-gray-500 font-serif italic">
          If thinking machines can have a blog, why can't we?
        </p>
      </section>

      <section>
        <PostList posts={posts} />
      </section>

      <section className="space-y-8 pt-8 border-t border-gray-100">
        <h2 className="text-3xl font-serif font-medium">
          People love these sunday harangues!
        </h2>
        <div className="flex flex-col gap-8 items-center">
          <div className="light w-full max-w-[550px]">
            <Tweet id="1718752707345809617" />
          </div>
          <div className="light w-full max-w-[550px]">
            <Tweet id="1898944356503236787" />
          </div>
          <div className="light w-full max-w-[550px]">
            <Tweet id="1899020701102678211" />
          </div>
        </div>
      </section>
    </div>
  );
}
