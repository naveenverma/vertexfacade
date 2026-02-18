"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-dark/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-white">Vertex</span>
              <span className="text-lg font-light text-accent"> Facade</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#services"
              className="text-sm text-gray-300 hover:text-accent transition-colors"
            >
              Services
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm text-gray-300 hover:text-accent transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#estimator"
              className="text-sm text-gray-300 hover:text-accent transition-colors"
            >
              Estimator
            </Link>
            <Link
              href="#faq"
              className="text-sm text-gray-300 hover:text-accent transition-colors"
            >
              FAQ
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+919501245445"
              className="hidden sm:flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +91-95012-45445
            </a>
            <Link
              href="#investors"
              className="hidden lg:inline-flex px-4 py-2 text-sm font-medium text-accent border border-accent rounded-full hover:bg-accent hover:text-white transition-all"
            >
              Investor Pack
            </Link>
            <Link
              href="#contact"
              className="px-4 py-2 text-sm font-semibold text-white gradient-accent rounded-full hover:opacity-90 transition-opacity"
            >
              Get Quote
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-dark/95 backdrop-blur-md border-t border-slate-light/20">
            <nav className="flex flex-col py-4 space-y-3">
              <Link
                href="#services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2 text-gray-300 hover:text-accent transition-colors"
              >
                Services
              </Link>
              <Link
                href="#how-it-works"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2 text-gray-300 hover:text-accent transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="#estimator"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2 text-gray-300 hover:text-accent transition-colors"
              >
                Estimator
              </Link>
              <Link
                href="#faq"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2 text-gray-300 hover:text-accent transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="#investors"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2 text-accent hover:text-accent-hover transition-colors"
              >
                Investor Pack
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
