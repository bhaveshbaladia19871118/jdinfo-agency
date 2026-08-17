import Link from "next/link";
import Container from "../ui/Container";
import {
  SiLinkerd,
  SiFacebook,
  SiInstagram,
} from "react-icons/si";

import { Mail } from "lucide-react";

const services = [
  {
    name: "Web Scraping & Data Extraction",
    href: "/services/web-scraping",
  },
  {
    name: "Data Research & Processing",
    href: "/services/data-research",
  },
  {
    name: "Shopify & eCommerce",
    href: "/services/shopify",
  },
  {
    name: "WordPress",
    href: "/services/wordpress",
  },
  {
    name: "Image Processing",
    href: "/services/image-processing",
  },
  {
    name: "AI & Automation",
    href: "/services/ai-automation",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">

      <Container>

        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">

          {/* =====================================================
              COMPANY
          ====================================================== */}
          <div className="lg:col-span-1">

            <Link
              href="/"
              className="inline-block font-[var(--font-heading)] text-2xl font-bold"
            >
              JD <span className="text-blue-500">Info</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Practical digital solutions for businesses that need reliable
              data, efficient workflows, eCommerce support, and smarter
              ways to get work done.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/103660702"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="JD Info on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <SiLinkerd size={18} />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/people/JD-Infra/61560279952175/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="JD Info on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <SiFacebook size={18} />
              </a>

              {/* Instagram */}
              <a
                href="YOUR_INSTAGRAM_URL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="JD Info on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition hover:border-pink-500 hover:bg-pink-600 hover:text-white"
              >
                <SiInstagram size={18} />
              </a>

              {/* Upwork */}
              <a
                href="https://upwork.com/freelancers/pratikdesai91"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="JD Info on Upwork"
                className="flex h-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 px-4 text-sm font-semibold text-slate-400 transition hover:border-emerald-500 hover:bg-emerald-600 hover:text-white"
              >
                Upwork
              </a>

            </div>

          </div>


          {/* =====================================================
              QUICK LINKS
          ====================================================== */}
          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <Link
                  href="/"
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/team"
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  Our Team
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/case-studies"
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  Case Studies
                </Link>
              </li>

              <li>
                <Link
                  href="/portfolio"
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>


          {/* =====================================================
              SERVICES
          ====================================================== */}
          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Services
            </h3>

            <ul className="mt-5 space-y-3">

              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-slate-400 transition hover:text-blue-400"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>


          {/* =====================================================
              CONTACT
          ====================================================== */}
          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Let&apos;s Work Together
            </h3>

            <p className="mt-5 text-sm leading-6 text-slate-400">
              Have a project or need help with a repetitive workflow?
              Let&apos;s talk about how JD Info can help.
            </p>

            {/* Email */}
            <a
              href="mailto:hello@jdinfo.com"
              className="mt-5 flex items-center gap-3 text-sm text-slate-300 transition hover:text-blue-400"
            >
              <Mail size={17} />
              hello@jdinfo.com
            </a>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Start a Project
            </Link>

          </div>

        </div>


        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}
        <div className="border-t border-slate-800 py-6">

          <div className="flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">

            {/* Copyright */}
            <p>
              © {new Date().getFullYear()} JD Info. All Rights Reserved.
            </p>

            {/* Legal */}
            <div className="flex items-center gap-5">

              <Link
                href="/privacy"
                className="transition hover:text-slate-300"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-slate-300"
              >
                Terms of Service
              </Link>

            </div>

          </div>

        </div>

      </Container>

    </footer>
  );
}