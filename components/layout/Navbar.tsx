"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import Container from "../ui/Container";

const aboutLinks = [
  {
    name: "Our Story",
    href: "/about",
  },
  {
    name: "Our Team",
    href: "/team",
  },
  {
    name: "Case Studies",
    href: "/case-studies",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container>

        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="JD Info"
              width={180}
              height={60}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">

            <Link
              href="/"
              className="font-medium text-slate-700 transition hover:text-blue-600"
            >
              Home
            </Link>           

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >

              <button
                type="button"
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex items-center gap-1 font-medium text-slate-700 transition hover:text-blue-600"
              >
                About Us
                <ChevronDown
                  size={17}
                  className={`transition-transform ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown */}
              {aboutOpen && (
                <div className="absolute left-1/2 top-full w-56 -translate-x-1/2 pt-3">

                  <div className="overflow-hidden rounded-xl border border-slate-200 bg-white py-2 shadow-xl">

                    {aboutLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                      >
                        {link.name}
                      </Link>
                    ))}

                  </div>

                </div>
              )}

            </div>

            <Link
              href="/services"
              className="font-medium text-slate-700 transition hover:text-blue-600"
            >
              Our Services
            </Link>

            <Link
              href="/contact"
              className="font-medium text-slate-700 transition hover:text-blue-600"
            >
              Contact
            </Link>

          </nav>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-slate-700 md:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="border-t border-slate-200 py-5 md:hidden">

            <nav className="flex flex-col">

              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-3 font-medium text-slate-700"
              >
                Home
              </Link>

              {/* Mobile About */}
              <button
                type="button"
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex items-center justify-between px-3 py-3 text-left font-medium text-slate-700"
              >
                About Us

                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {aboutOpen && (
                <div className="ml-4 border-l-2 border-blue-100">

                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-5 py-2.5 text-sm text-slate-600 transition hover:text-blue-600"
                    >
                      {link.name}
                    </Link>
                  ))}

                </div>
              )}

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-3 font-medium text-slate-700"
              >
                Contact
              </Link>

            </nav>

          </div>
        )}

      </Container>
    </header>
  );
}