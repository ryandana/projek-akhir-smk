"use client";

import { IconSearch } from "@tabler/icons-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function SearchBar() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Get initial search from URL
    const initialSearch = searchParams.get("search") || "";
    const [searchTerm, setSearchTerm] = useState(initialSearch);

    // Debounce logic
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            const currentSearch = searchParams.get("search") || "";
            if (searchTerm === currentSearch) return;

            const params = new URLSearchParams(searchParams);
            if (searchTerm) {
                params.set("search", searchTerm);
            } else {
                params.delete("search");
            }

            router.replace(`${pathname}?${params.toString()}`);
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm, searchParams, pathname, router]);

    return (
        <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-base-content/50">
                <IconSearch size={20} />
            </div>
            <input
                type="text"
                className="input input-bordered w-full pl-10 bg-base-100"
                placeholder="Search for posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
}
