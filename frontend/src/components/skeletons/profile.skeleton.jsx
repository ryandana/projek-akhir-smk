export default function ProfileSkeleton() {
    return (
        <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Skeleton */}
            <div className="w-full md:w-1/4 flex flex-col gap-6">
                <div className="card bg-base-100 border border-base-200 p-6 flex flex-col items-center">
                    <div className="skeleton w-24 h-24 rounded-full mb-4"></div>
                    <div className="skeleton h-6 w-32 mb-2"></div>
                    <div className="skeleton h-4 w-24"></div>
                </div>
                <div className="menu bg-base-100 w-full rounded-box border border-base-200 p-2 space-y-2">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="skeleton h-10 w-full rounded-lg"></div>
                    ))}
                </div>
            </div>

            {/* Content Skeleton */}
            <div className="flex-1">
                <div className="card bg-base-100 border border-base-200 p-6">
                    <div className="space-y-6">
                        <div className="skeleton h-8 w-48"></div>
                        <div className="space-y-4">
                            <div className="skeleton h-12 w-full"></div>
                            <div className="skeleton h-12 w-full"></div>
                            <div className="skeleton h-12 w-full"></div>
                            <div className="skeleton h-12 w-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
