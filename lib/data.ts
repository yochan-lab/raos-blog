export interface Post {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  tweetId?: string; // ID for react-tweet
  description?: string;
}

export const posts: Post[] = [
];
