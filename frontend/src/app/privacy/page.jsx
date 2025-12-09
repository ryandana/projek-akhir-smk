"use client";

import Section from "@/components/atoms/section.component";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function PrivacyPage() {
    const router = useRouter();
    return (
        <Section className="min-h-auto">
            <button onClick={() => router.back()} className="inline-flex items-center gap-2 text-neutral/50 hover:text-neutral mb-8 transition-colors">
                <IconArrowLeft size={20} />
                <span>Back</span>
            </button>

            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-neutral mb-4">Privacy Policy</h1>
                <p className="text-neutral/50 mb-12">Last updated: December 9, 2025</p>

                <div className="space-y-8 text-neutral/80">
                    <section>
                        <h2 className="text-xl font-bold text-neutral mb-3">1. Introduction</h2>
                        <p>
                            At Scribe ("us", "we", or "our"), we respect your privacy and are committed to protecting it. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-neutral mb-3">2. Information We Collect</h2>
                        <p className="mb-2">We collect information that you provide directly to us when you:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Register for an account</li>
                            <li>Create or publish content</li>
                            <li>Contact our support team</li>
                            <li>Subscribe to our newsletters</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-neutral mb-3">3. How We Use Your Information</h2>
                        <p className="mb-2">We use the information we collect to:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Provide, maintain, and improve our services</li>
                            <li>Process your transactions and manage your account</li>
                            <li>Send you technical notices, updates, and support messages</li>
                            <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-neutral mb-3">4. Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-neutral mb-3">5. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at support@scribe.example.com.
                        </p>
                    </section>
                </div>
            </div>
        </Section>
    );
}
