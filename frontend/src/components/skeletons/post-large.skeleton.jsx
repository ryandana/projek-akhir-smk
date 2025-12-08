export default function PostLargeSkeleton() {
    return (
        <div className="space-y-8">
            {[1, 2].map((i) => (
                <div key={i} className="flex flex-col gap-4">
                    {/* Thumbnail */}
                    <div className="w-full aspect-video">
                        <div className="skeleton w-full h-full rounded-lg"></div>
                    </div>
                    {/* Author */}
                    <div className="flex items-center gap-2">
                        <div className="skeleton w-6 h-6 rounded-full"></div>
                        <div className="skeleton h-4 w-24"></div>
                    </div>
                    {/* Title */}
                    <div className="skeleton h-8 w-full"></div>
                    {/* Body */}
                    <div className="space-y-2">
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-5/6"></div>
                    </div>
                    {/* Meta */}
                    <div className="flex gap-2">
                        <div className="skeleton h-4 w-16"></div>
                        <div className="skeleton h-4 w-16"></div>
                    </div>
                </div>
            ))}
        </div>
    );
}
