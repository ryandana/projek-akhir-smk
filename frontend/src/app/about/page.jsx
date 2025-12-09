"use client";

import Section from "@/components/atoms/section.component";
import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";

export default function AboutPage() {
    return (
        <>
            <Section className="min-h-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-neutral/50 hover:text-neutral mb-8 transition-colors">
                    <IconArrowLeft size={20} />
                    <span>Back to Home</span>
                </Link>

                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral mb-8">About Scribe</h1>

                    <div className="prose prose-neutral prose-lg max-w-none">
                        <p className="lead text-xl text-neutral/70 mb-8">
                            Scribe is a platform designed for the modern creator. We believe that sharing knowledge should be as elegant and focused as the ideas themselves.
                        </p>

                        <h2 className="text-2xl font-bold text-neutral mt-8 mb-4">Our Mission</h2>
                        <p className="text-neutral/80 mb-6">
                            In a world of noise, we're building a sanctuary for clarity. Scribe exists to give developers, writers, and thinkers a space where content takes center stage—uncluttered, optimized, and beautiful by default.
                        </p>

                        <h2 className="text-2xl font-bold text-neutral mt-8 mb-4">Why Scribe?</h2>
                        <p className="text-neutral/80 mb-6">
                            We started Scribe because we were tired of publishing platforms that felt heavy, ad-ridden, or overly complex. We wanted something that felt like a well-crafted text editor but with the power of a global publishing network.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-neutral/80 mb-8">
                            <li><strong>Minimalist Design:</strong> No distractions. Just you and your words.</li>
                            <li><strong>Developer Friendly:</strong> First-class support for code blocks, markdown, and syntax highlighting.</li>
                            <li><strong>AI Assisted:</strong> Intelligent tools to helping you refine your tone and grammar.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-neutral mt-8 mb-4">The Team</h2>
                        <p className="text-neutral/80 mb-6">
                            We are a small, passionate team of engineers and designers based in the cloud. We build what we use, and we use Scribe every day to document our journey.
                        </p>
                    </div>
                </div>
            </Section>
        </>
    );
}
