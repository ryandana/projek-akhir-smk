"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/auth.context";
import Avatar from "@/components/ui/avatar.component";
import { IconPencil } from "@tabler/icons-react"; // Kept for consistency if you want the avatar edit to be here, but usually avatar edit is in the profile form. 
// Wait, the avatar edit logic was in the sidebar in the previous file.
// I should move the avatar edit logic to this layout or keep it in the "My Profile" page?
// The user had the avatar in the sidebar. Let's keep it in the sidebar (Layout).
// But `handleAvatarChange` needs state. Layouts can preserve state in Next.js? Yes, it's a client component wrapping children.
// So I will replicate the Sidebar logic including Avatar Upload here.

import { useRef, useState } from "react";
import api from "@/lib/api";
import { getImageUrl } from "@/lib/imageUrl";

export default function ProfileLayout({ children }) {
    const pathname = usePathname();
    const { user, loading, refreshUser } = useAuth();
    const [uploadingAvatar, setUploadingAvatar] = useState(false);
    const fileInputRef = useRef(null);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleAvatarChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setError(null);
        setSuccess(null);
        setUploadingAvatar(true);

        const formData = new FormData();
        formData.append("avatar", file);

        try {
            await api.put("/api/auth/avatar", formData);
            setSuccess("Avatar updated successfully");
            refreshUser();
        } catch (err) {
            setError(err?.data?.message || err.message || "Failed to upload avatar");
        } finally {
            setUploadingAvatar(false);
        }
    };

    if (loading) {
        return (
            <div className="flex h-screen w-full items-center justify-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (!user) return null;

    const avatarUrl = getImageUrl(user.avatar_url);

    const isActive = (path) => pathname === path;

    return (
        <div className="py-24 mx-auto max-w-5xl px-4">
            {error && (
                <div className="alert fixed top-24 left-1/2 -translate-x-1/2 alert-error text-sm w-auto z-50 shadow-lg">
                    {error}
                </div>
            )}
            {success && (
                <div className="alert fixed top-24 left-1/2 -translate-x-1/2 alert-success text-sm w-auto z-50 shadow-lg">
                    {success}
                </div>
            )}

            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar / Tabs Navigation */}
                <div className="w-full md:w-1/4 flex flex-col gap-6">
                    {/* User Info Card */}
                    <div className="card bg-base-100 border border-base-200 p-6 flex flex-col items-center text-center">
                        <div className="relative group mb-4">
                            <div className="w-24 h-24 rounded-full bg-base-200 overflow-hidden flex items-center justify-center border-2 border-base-200">
                                <Avatar
                                    src={avatarUrl}
                                    alt="Profile"
                                    size={96}
                                    className="object-cover"
                                />
                            </div>
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                disabled={uploadingAvatar}
                                className="absolute bottom-0 right-0 bg-neutral text-neutral-content p-1.5 rounded-full shadow-lg hover:bg-neutral-focus transition-colors cursor-pointer"
                            >
                                {uploadingAvatar ? <span className="loading loading-spinner loading-xs"></span> : <IconPencil size={16} />}
                            </button>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleAvatarChange}
                                className="hidden"
                                accept="image/*"
                            />
                        </div>
                        <h2 className="font-bold text-lg">{user.nickname}</h2>
                        <p className="text-sm text-base-content/60">@{user.username}</p>
                    </div>

                    {/* Navigation */}
                    <ul className="menu bg-base-100 w-full rounded-box border border-base-200">
                        <li>
                            <Link href="/profile" className={isActive("/profile") ? "active" : ""}>
                                My Profile
                            </Link>
                        </li>
                        <li>
                            <Link href="/profile/my-posts" className={isActive("/profile/my-posts") ? "active" : ""}>
                                My Posts
                            </Link>
                        </li>
                        <li>
                            <Link href="/profile/liked-posts" className={isActive("/profile/liked-posts") ? "active" : ""}>
                                Liked Posts
                            </Link>
                        </li>
                        <li>
                            <Link href="/profile/security" className={isActive("/profile/security") ? "active" : ""}>
                                Security
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Content Area */}
                <div className="flex-1">
                    <div className="card bg-base-100 border border-base-200">
                        <div className="card-body">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
