"use client";
import LikedPostsTab from "@/components/ui/profile-tabs/liked-posts.tab";

export default function LikedPostsPage() {
    return (
        <div className="space-y-6">
            <h2 className="card-title text-2xl">Liked Posts</h2>
            <LikedPostsTab />
        </div>
    );
}
