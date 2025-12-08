export default function PostDetailSkeleton() {
    return (
        <div className="max-w-4xl mx-auto space-y-8 py-24">
            {/* Header */}
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="skeleton w-6 h-6 rounded-full"></div>
                        <div className="skeleton h-4 w-32"></div>
                    </div>
                    <div className="skeleton h-4 w-24"></div>
                    <div className="skeleton h-4 w-24"></div>
                </div>

                <div className="space-y-2">
                    <div className="skeleton h-12 w-full"></div>
                    <div className="skeleton h-12 w-2/3"></div>
                </div>

                <div className="flex justify-between">
                    <div className="flex gap-4">
                        <div className="skeleton h-6 w-20"></div>
                        <div className="skeleton h-6 w-20"></div>
                    </div>
                    <div className="skeleton h-6 w-24"></div>
                </div>
            </div>

            {/* Thumbnail */}
            <div className="w-full aspect-video">
                <div className="skeleton w-full h-full rounded-xl"></div>
            </div>

            {/* Content */}
            <div className="space-y-4">
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-11/12"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-4/5"></div>
            </div>
        </div>
    );
}
