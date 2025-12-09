"use client";

import Section from "@/components/atoms/section.component";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function TermsPage() {
    const router = useRouter();
    return (
        <Section className="min-h-auto">
            <button onClick={() => router.back()} className="inline-flex items-center gap-2 text-neutral/50 hover:text-neutral mb-8 transition-colors">
                <IconArrowLeft size={20} />
                <span>Back</span>
            </button>

            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-neutral mb-4">Terms of Service</h1>
                <p className="text-neutral/50 mb-12">Last updated: December 9, 2025</p>

                <div className="space-y-8 text-neutral/80">
                    <section>
                        <h2 className="text-xl font-bold text-neutral mb-3">1. Agreement to Terms</h2>
                        <p>
                            By accessing or using Scribe, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-neutral mb-3">2. Intellectual Property</h2>
                        <p>
                            The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of Scribe and its licensors.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-neutral mb-3">3. User Content</h2>
                        <p className="mb-2">
                            Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post to the Service, including its legality, reliability, and appropriateness.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-neutral mb-3">4. Termination</h2>
                        <p>
                            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-neutral mb-3">5. Limitation of Liability</h2>
                        <p>
                            In no event shall Scribe, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-neutral mb-3">6. Changes</h2>
                        <p>
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                        </p>
                    </section>
                </div>
            </div>
        </Section>
    );
}
