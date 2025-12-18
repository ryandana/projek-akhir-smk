"use client";

import { useState, useEffect } from "react";
import Section from "@/components/atoms/section.component";
import Link from "next/link";
import { IconSparkles, IconChevronDown } from "@tabler/icons-react";

function TypingText({ texts, className }) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = texts[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(text.substring(0, currentText.length + 1));
          if (currentText === text) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setCurrentText(text.substring(0, currentText.length - 1));
          if (currentText === "") {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <span className={className}>
      {currentText}
      <span className="border-r-2 border-neutral ml-1"></span>
    </span>
  );
}

function AnimatedCounter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end, hasStarted]);

  useEffect(() => {
    if (!hasStarted) {
      setCount(end);
      return;
    }

    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end]);

  return (
    <span id={`counter-${end}`}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-base-100 last:border-0">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-neutral text-lg">{title}</span>
        <IconChevronDown
          className={`transition-transform duration-300 text-neutral/50 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100 mb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-neutral/70 leading-relaxed pr-8">{children}</p>
      </div>
    </div>
  );
}

export default function ClientLandingContent() {
  const typingTexts = ["developers", "writers", "creators", "thinkers"];

  return (
    <>
      <Section className="border-b border-base-100 min-h-auto flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-base-100 bg-base-100 text-neutral text-sm font-medium mb-8">
            <IconSparkles size={16} />
            <span>The Intelligent Publishing Platform</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral mb-8 leading-tight">
            Where{" "}
            <span className="text-neutral underline decoration-wavy decoration-neutral/30">
              <TypingText texts={typingTexts} />
            </span>
            <br /> share what matters.
          </h1>

          <p className="text-xl text-neutral/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            A minimal, focused platform for your best writing. Enhanced with AI,
            designed for clarity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/register">
              <button className="btn btn-neutral btn-lg min-w-[200px] rounded-xl font-medium">
                Start Writing
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 pt-10 border-t border-base-100">
            <div className="text-center">
              <div className="text-3xl font-bold text-neutral">
                <AnimatedCounter end={19000} suffix="+" />
              </div>
              <div className="text-sm text-neutral/60 font-medium uppercase tracking-wider mt-1">
                Active Writers
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neutral">
                <AnimatedCounter end={125000} suffix="+" />
              </div>
              <div className="text-sm text-neutral/60 font-medium uppercase tracking-wider mt-1">
                Articles
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 text-center">
              <div className="text-3xl font-bold text-neutral">
                <AnimatedCounter end={2500000} suffix="+" />
              </div>
              <div className="text-sm text-neutral/60 font-medium uppercase tracking-wider mt-1">
                Suggestions
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
