"use client"

import Section from "@/components/atoms/section.component";
import Button from "@/components/ui/button.component";
import { useAuth } from "@/context/auth.context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const { user, loading: authLoading, refreshUser } = useAuth();
  useEffect(() => {
    if (!authLoading && user) {
      router.push("/feed");
    }
  }, [user, authLoading, router]);
  return (
    <>
      <Section className="relative flex flex-col items-center justify-center max-w-screen py-32 px-4 text-center">
        <div className="prose lg:prose-xl md:prose-h1:text-6xl prose-h1:text-4xl mx-auto">
          <h1 className="font-bold leading-tight">
            Where developers share what matters.
          </h1>
          <p className="text-base max-w-2xl mx-auto">
            Articles, insights, and experiences from real developers. Powered by
            AI to help you discover knowledge worth reading.
          </p>
          <div className="flex items-center justify-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <span className="text-base text-black font-semibold">
                Trusted By
              </span>
              <div className="text-black font-semibold">
                19,000,000+ developers
              </div>
            </div>
          </div>
          <Link href="/login">
            <Button className="btn-lg mt-6">Get Started</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
