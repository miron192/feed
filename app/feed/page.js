import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

// export const metadata = {
//   title: "Feed",
//   description: "All posts by all users.",
// };

export async function generateMetadata() {
  const posts = await getPosts();
  return {
    title: `Feed of ${posts.length}`,
    description: `All ${posts.length} posts by all users.`,
  };
}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
