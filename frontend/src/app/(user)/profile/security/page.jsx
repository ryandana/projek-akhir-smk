"use client";
import SecurityTab from "@/components/ui/profile-tabs/security.tab";

export default function SecurityPage() {
    return (
        <div className="space-y-6">
            <h2 className="card-title text-2xl">Security</h2>
            <SecurityTab />
        </div>
    );
}
