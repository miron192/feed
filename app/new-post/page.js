import { handleSubmit } from "@/actions/posts";
import PostForm from "@/components/postForm";

export const metadata = {
  title: "New Post",
  description: "Create a new post to share with others.",
};

export default function NewPostPage() {
  return <PostForm action={handleSubmit} />;
}
