import { handleSubmit } from "@/actions/posts";
import PostForm from "@/components/postForm";

export default function NewPostPage() {
  return <PostForm action={handleSubmit} />;
}
