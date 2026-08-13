import Link from "next/link";
import Image from "next/image";
import {ArrowRight} from "lucide-react";

const caseStudies = [
  {
    category: "Image Processing",
    title: "28K Travel Location Images < 50 Days",
    image: "/images/services/bulk-image-processing.png",
    description:
      "Processing and organizing 28,000 product images within a tight project deadline using an efficient workflow.",
    result: "28,000+ Images",
    resultLabel: "Processed",
    href: "/case-studies/bulk-image-processing",
  },

  {
    category: "Web Scraping",
    title: "Large-Scale Web Data Extraction",
    image: "/images/case-studies/web-data-extraction.jpg",
    description:
      "Collecting and organizing large volumes of structured data from online sources for business research and analysis.",
    result: "Large Dataset",
    resultLabel: "Delivered",
    href: "/case-studies/web-scraping",
  },

  {
    category: "eCommerce",
    title: "Shopify & Product Data Management",
    image: "/images/case-studies/shopify-product-management.jpg",
    description:
      "Helping an eCommerce business manage product information, catalogs and store operations efficiently.",
    result: "eCommerce",
    resultLabel: "Solution",
    href: "/case-studies/shopify",
  },

  {
    category: "AI & Automation",
    title: "AI-Powered Business Workflow",
    image: "/images/case-studies/ai-business-automation.jpg",
    description:
      "Using automation and AI tools to reduce repetitive manual tasks and streamline a business workflow.",
    result: "Automated",
    resultLabel: "Workflow",
    href: "/case-studies/ai-automation",
  },
];

export default function CaseStudiesPage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Our Work
            </span>

            <h1 className="mt-5 font-[var(--font-heading)] text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Real Projects.
              <span className="block text-blue-400">
                Real Solutions.
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Explore some of the projects we&apos;ve worked on and discover how
              JD Info helps businesses solve complex problems through data,
              automation, eCommerce and digital solutions.
            </p>

          </div>

        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Section Heading */}
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Featured Case Studies
              </span>

              <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold text-slate-900 sm:text-4xl">
                Work we&apos;re proud of
              </h2>
            </div>

            <p className="max-w-xl text-slate-600 md:text-right">
              Browse our projects to see how we approach real-world business
              challenges.
            </p>

          </div>

          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-2">

            {caseStudies.map((study) => {
              return (
                <Link
                  key={study.title}
                  href={study.href}
                  className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >

                  {/* Thumbnail */}
                  {/* Thumbnail */}
<div className="relative h-72 overflow-hidden bg-slate-200">

  {/* Case Study Image */}
  <Image
    src={study.image}
    alt={study.title}
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover transition duration-700 group-hover:scale-105"
  />

  {/* Dark Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

  {/* Category */}
  <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-slate-950/50 px-4 py-2 text-xs font-semibold text-white shadow-sm backdrop-blur-md">
    {study.category}
  </div>

</div>

                  {/* Content */}
                  <div className="p-7 sm:p-8">

                    <h3 className="font-[var(--font-heading)] text-2xl font-bold text-slate-900 transition group-hover:text-blue-600">
                      {study.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {study.description}
                    </p>

                    {/* Result */}
                    <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-6">

                      <div>
                        <p className="text-xl font-bold text-slate-900">
                          {study.result}
                        </p>

                        <p className="text-sm text-slate-500">
                          {study.resultLabel}
                        </p>
                      </div>

                      <div className="flex items-center font-semibold text-blue-600">
                        View Case Study

                        <ArrowRight
                          size={18}
                          className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
                        />
                      </div>

                    </div>

                  </div>

                </Link>
              );
            })}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Your Project Could Be Next
          </span>

          <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-bold text-slate-900 sm:text-4xl">
            Have a challenging project?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Tell us what you&apos;re trying to accomplish. We&apos;ll help you find
            a practical and efficient way to get it done.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Discuss Your Project
            <ArrowRight size={18} className="ml-2" />
          </Link>

        </div>
      </section>

    </main>
  );
}