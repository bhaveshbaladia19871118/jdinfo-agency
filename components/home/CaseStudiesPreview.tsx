import Link from "next/link";
import { ArrowRight, ImageIcon, Zap } from "lucide-react";

const caseStudies = [
  {
    category: "Image Processing & Automation",
    title: "Processing 28,000 Travel Location Images Under 50 Days",
    description:
      "A large-scale image processing project that combined automation and an organized workflow to handle thousands of travel location images efficiently.",
    icon: ImageIcon,
    result: "28,000 Images",
    resultLabel: "Processed",
    href: "/case-studies/bulk-image-processing",
  },
];

export default function CaseStudiesPreview() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Featured Work
            </span>

            <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-bold leading-tight sm:text-5xl">
              Real Projects.
              <span className="block text-blue-400">
                Real Business Results.
              </span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Take a look at how JD Info helps businesses solve complex,
              time-consuming problems through technology and efficient
              workflows.
            </p>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex shrink-0 items-center font-semibold text-blue-400 transition hover:text-blue-300"
          >
            View All Case Studies
            <ArrowRight size={18} className="ml-2" />
          </Link>

        </div>

        {/* Case Study Card */}
        <div className="mt-14">

          {caseStudies.map((study) => {
            const Icon = study.icon;

            return (
              <Link
                key={study.title}
                href={study.href}
                className="group block overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 transition duration-500 hover:border-blue-500/40 hover:bg-white/[0.07]"
              >
                <div className="grid lg:grid-cols-2">

                  {/* Visual */}
                  <div className="relative min-h-[360px] overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-slate-900 p-8 sm:p-12">

                    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />

                    <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />

                    <div className="relative flex h-full flex-col justify-between">

                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                        <Icon size={32} />
                      </div>

                      <div>
                        <div className="flex items-center gap-2 text-sm text-blue-100">
                          <Zap size={16} />
                          Automation Project
                        </div>

                        <p className="mt-3 text-5xl font-bold sm:text-6xl">
                          28K
                        </p>

                        <p className="mt-1 text-blue-100">
                          Product Images
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center p-8 sm:p-12">

                    <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                      {study.category}
                    </span>

                    <h3 className="mt-4 font-[var(--font-heading)] text-3xl font-bold leading-tight sm:text-4xl">
                      {study.title}
                    </h3>

                    <p className="mt-5 leading-7 text-slate-300">
                      {study.description}
                    </p>

                    <div className="mt-8 grid grid-cols-2 gap-4">

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <p className="text-2xl font-bold">
                          {study.result}
                        </p>
                        <p className="mt-1 text-sm text-slate-400">
                          {study.resultLabel}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <p className="text-2xl font-bold">
                          &lt; 50
                        </p>
                        <p className="mt-1 text-sm text-slate-400">
                          Days Deadline
                        </p>
                      </div>

                    </div>

                    <div className="mt-8 inline-flex items-center font-semibold text-blue-400">
                      Read Case Study
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
  );
}