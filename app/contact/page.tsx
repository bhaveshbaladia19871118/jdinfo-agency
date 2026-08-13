import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="bg-slate-950 py-24 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Get In Touch
            </span>

            <h1 className="mt-5 font-[var(--font-heading)] text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Let&apos;s Talk About
              <span className="block text-blue-400">
                Your Project
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Have a project, a challenge, or simply an idea you&apos;d like to
              discuss? Tell us what you need and we&apos;ll get back to you.
            </p>

          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CONTENT
      ====================================================== */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">

            {/* =================================================
                CONTACT INFORMATION
            ================================================== */}
            <div>

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Contact JD Info
              </span>

              <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-bold text-slate-900 sm:text-4xl">
                Tell us what you&apos;re
                <span className="block text-blue-600">
                  working on.
                </span>
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                The more information you provide, the better we can
                understand your requirements and suggest the right approach.
              </p>

              {/* Contact Cards */}
              <div className="mt-8 space-y-4">

                {/* Email */}
                <a
                  href="mailto:hello@jdinfo.com"
                  className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Mail size={21} />
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900">
                      Email Us
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      hello@jdinfo.com
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <MapPin size={21} />
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900">
                      Location
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      4/3851, JD Info, Mumbaivad, Begampura, Surat, 395003
                    </p>
                  </div>
                </div>

                {/* Response */}
                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Clock3 size={21} />
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900">
                      Response Time
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      We aim to respond within 1 business day.
                    </p>
                  </div>
                </div>

              </div>

              {/* Small message */}
              <div className="mt-8 rounded-2xl bg-slate-950 p-6 text-white">
                <MessageCircle size={24} className="text-blue-400" />

                <p className="mt-4 text-sm leading-6 text-slate-300">
                  Not sure exactly what you need? That&apos;s okay. Tell us about
                  the problem you&apos;re trying to solve and we&apos;ll help you
                  figure out the next step.
                </p>
              </div>

            </div>


            {/* =================================================
                CONTACT FORM
            ================================================== */}
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9">

              <div className="mb-8">
                <h2 className="font-[var(--font-heading)] text-2xl font-bold text-slate-900">
                  Project Inquiry
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Share a few details about your project.
                </p>
              </div>

              <form className="space-y-6">

                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Your Name *
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Smith"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Email Address *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                </div>


                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Company
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company name"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>


                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    What do you need help with? *
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="web-scraping">
                      Web Scraping & Data Extraction
                    </option>

                    <option value="data-research">
                      Data Research & Processing
                    </option>

                    <option value="shopify">
                      Shopify & eCommerce
                    </option>

                    <option value="wordpress">
                      WordPress
                    </option>

                    <option value="image-processing">
                      Image Processing & Photoshop
                    </option>

                    <option value="automation">
                      AI & Automation
                    </option>

                    <option value="other">
                      Other / Not Sure
                    </option>
                  </select>
                </div>


                {/* Budget */}
                <div>
                  <label
                    htmlFor="budget"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Estimated Budget
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    defaultValue=""
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="" disabled>
                      Select a budget range
                    </option>

                    <option value="under-500">
                      Under $500
                    </option>

                    <option value="500-1000">
                      $500 – $1,000
                    </option>

                    <option value="1000-2500">
                      $1,000 – $2,500
                    </option>

                    <option value="2500-5000">
                      $2,500 – $5,000
                    </option>

                    <option value="5000-plus">
                      $5,000+
                    </option>

                    <option value="not-sure">
                      Not sure yet
                    </option>
                  </select>
                </div>


                {/* Project Details */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Tell us about your project *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us what you're trying to accomplish, the approximate volume of work, deadline and any other useful details..."
                    className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>


                {/* Submit */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  Send Project Inquiry
                  <Send size={18} className="ml-2" />
                </button>

                <p className="text-center text-xs leading-5 text-slate-400">
                  By submitting this form, you agree that JD Info may contact
                  you regarding your inquiry.
                </p>

              </form>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">

          <h2 className="font-[var(--font-heading)] text-3xl font-bold text-slate-900">
            Prefer to start with a conversation?
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            No long forms. Just tell us what you&apos;re working on and we&apos;ll
            take it from there.
          </p>

          <Link
            href="/about"
            className="mt-7 inline-flex items-center font-semibold text-blue-600 transition hover:text-blue-700"
          >
            Learn More About JD Info
            <ArrowRight size={18} className="ml-2" />
          </Link>

        </div>
      </section>

    </main>
  );
}