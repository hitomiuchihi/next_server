import Posts from "@/components/GetAllPosts";
import Users from "@/components/GetAllUsers";

export default function Home() {
  return (
    <div>
      <h1>USERS</h1>
      <h3>ここにfetchしたデータが表示されます</h3>
      <Users />
      <h1>POSTS</h1>
      <h3>ここにfetchしたデータが表示されます</h3>
      <Posts />
    </div>
  );
}
