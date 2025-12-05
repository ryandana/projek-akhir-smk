import timeAgo from "@/lib/timeAgo";
import Image from "next/image";
import Link from "next/link";

export default function PostsList({ posts }) {
  return (
    <>
      {posts.map((post) => {
        return (
          <Link
            href={`/post/${post._id}`}
            key={post._id}
            className="flex group justify-between hover:bg-base-200 p-3 rounded-lg"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Image
                  src={post.author.avatar_url}
                  alt={post.author.nickname}
                  width={25}
                  height={25}
                  className="rounded-full aspect-square"
                />
                <span className="text-sm">{post.author.nickname}</span>
              </div>
              <h2 className="md:text-xl text-md font-semibold">{post.title}</h2>
              <p className="md:text-md text-sm max-w-2xl text-justify">
                {post.body}
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span>{timeAgo(post.createdAt)}</span>
                <span>·</span>
                <span>{post.readingTime} Min Read</span>
                <div className="badge badge-ghost group-hover:badge-neutral text-sm">
                  {post.tags[0]}
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-28 h-28 shrink-0">
                <Image
                  src={post.thumbnailUrl}
                  alt={post.title}
                  width={112}
                  height={112}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}
