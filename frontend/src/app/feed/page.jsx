import Section from "@/components/atoms/section.component";
import PostsLarge from "@/components/ui/posts-large.component";
import PostsList from "@/components/ui/posts-list.component";
import { posts } from "@/constants/libMockPosts";

export default function Page() {
  return (
    <Section className="py-24">
      <div className="flex w-full md:flex-row flex-col relative">
        <div className="flex flex-col md:w-3/4 w-full">
          <PostsList posts={posts} />
        </div>
        <div className="md:sticky block md:w-1/4 w-full">
          <PostsLarge/>
        </div>
      </div>
    </Section>
  );
}
