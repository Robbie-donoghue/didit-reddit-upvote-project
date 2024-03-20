import { PostList } from "../components/PostList";
//metadata
export const metadata = {
  title: "didit media",
  description: "A reddit-like social media platform homepage",
};
export default async function Home() {
  return <PostList />;
}
