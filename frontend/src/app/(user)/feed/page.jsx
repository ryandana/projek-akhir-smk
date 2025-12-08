import Section from "@/components/atoms/section.component";
import PostsLarge from "@/components/ui/posts-large.component";
import PostsList from "@/components/ui/posts-list.component";
import { posts } from "@/constants/libMockPosts";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

export default function Page() {
  return (
    <Section className="py-24">
      <div className="flex w-full md:flex-row flex-col space-x-10 md:space-y-0 space-y-8 relative">
        <div className="flex flex-col md:space-y-6 space-y-8 md:w-2/3 w-full">
          {/* Latest Posts Header */}
          <div className="flex w-full items-center justify-between">
            <h2 className="mb-3 text-xl font-semibold">Latest Posts</h2>
            <Link
              href="/explore"
              className="flex items-center text-sm font-semibold gap-1"
            >
              See All
              <IconArrowRight size={16}/>
            </Link>
          </div>
          {/* Latest Posts */}
          <PostsList posts={posts} />
        </div>
        <div className="md:sticky md:w-1/3 w-full flex flex-col space-y-3">
          {/* Popular Posts Header */}
          <div className="flex w-full">
            <h2 className="mb-3 text-xl font-semibold">Popular Posts</h2>
          </div>
          {/* Popular Posts */}
          <PostsLarge posts={posts} />
        </div>
      </div>
    </Section>
  );
}
