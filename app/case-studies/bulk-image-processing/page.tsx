import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ImageIcon,
  Zap,
} from "lucide-react";
import Image from "next/image";

export default function BulkImageProcessingCaseStudy() {
  return (
    <main>

      {/* Hero */}
      <section className="">
  <div className="mx-auto max-w-5xl px-6 lg:px-8">

    {/* Back */}
    <Link
      href="/case-studies"
      className="inline-flex items-center text-sm font-medium text-slate-400 transition hover:text-white"
    >
      <ArrowLeft size={16} className="mr-2" />
      Back to Case Studies
    </Link>

    {/* Hero Image */}
    <div className="relative mt-10 h-[300px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl sm:h-[400px]">

      <Image
        src="/images/services/bulk-image-processing.png"
        alt="Bulk Image Processing & Automation"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 1024px"
        className="object-cover transition duration-700 hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

    </div>

    {/* Case Study Heading */}
    <div className="mt-10">

      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
        Image Processing & Automation
      </span>

      <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-3xl">
        Processing 28,000 Travel Location Images Under 50 Days
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        How JD Info organized and streamlined a large-scale location
        image processing project using automation and an efficient
        production workflow.
      </p>

    </div>

  </div>
</section>

      {/* Project Stats */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-slate-200 lg:grid-cols-4">

          <div className="p-7 text-center">
            <p className="text-3xl font-bold text-slate-900">
              28K
            </p>
            <p className="mt-2 text-sm text-slate-500">
              location Images
            </p>
          </div>

          <div className="p-7 text-center">
            <p className="text-3xl font-bold text-slate-900">
              &lt;50
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Days Deadline
            </p>
          </div>

          <div className="p-7 text-center">
            <p className="text-3xl font-bold text-slate-900">
              Automation
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Workflow
            </p>
          </div>

          <div className="p-7 text-center">
            <p className="text-3xl font-bold text-slate-900">
              Delivered
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Before Deadline
            </p>
          </div>

        </div>
      </section>

      {/* Challenge */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                The Challenge
              </span>

              <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-bold text-slate-900 sm:text-4xl">
                A large volume of images. A tight deadline.
              </h2>
            </div>

            <div className="text-lg leading-8 text-slate-600">
              <p>
                The project involved processing approximately 28,000 location
                images within a deadline of less than 50 days.
              </p>

              <p className="mt-5">
                Handling this volume manually would require a significant
                amount of repetitive work and make maintaining consistency
                across thousands of files challenging.
              </p>

              <p className="mt-5">
                The key requirement was to create an efficient workflow that
                could handle the volume while maintaining accuracy and keeping
                the project on schedule.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Solution */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                The Solution
              </span>

              <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-bold text-slate-900 sm:text-4xl">
                Combining automation with an organized workflow.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                JD Info developed a structured workflow around the image
                processing requirements and used automation to reduce
                repetitive manual tasks.
              </p>

              <ul className="mt-7 space-y-4">

                {[
                  "Structured the image processing workflow",
                  "Automated repetitive image-related tasks",
                  "Organized large volumes of location images",
                  "Maintained consistency across the workflow",
                  "Coordinated the work to meet the project deadline",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-slate-700"
                  >
                    <CheckCircle2
                      size={22}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />
                    <span>{item}</span>
                  </li>
                ))}

              </ul>
            </div>

            {/* Visual */}
            <div className="rounded-[2rem] bg-gradient-to-br from-blue-600 to-indigo-800 p-8 shadow-xl">

              <div className="rounded-2xl border border-white/10 bg-white/10 p-8 backdrop-blur">

                <ImageIcon
                  size={42}
                  className="text-white"
                />

                <p className="mt-8 text-6xl font-bold text-white">
                  28K
                </p>

                <p className="mt-2 text-blue-100">
                  Location images processed
                </p>

                <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/20">
                  <div className="h-full w-full rounded-full bg-white" />
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-blue-100">
                  <Zap size={16} />
                  Optimized workflow
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Results */}
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              The Result
            </span>

            <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-bold sm:text-4xl">
              Delivered at scale and on schedule.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              The optimized workflow allowed the project to handle a large
              volume of location images efficiently and helped keep delivery
              on track.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center">
              <p className="text-4xl font-bold">
                28K
              </p>
              <p className="mt-2 text-slate-400">
                Images processed
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center">
              <p className="text-4xl font-bold">
                &lt;50
              </p>
              <p className="mt-2 text-slate-400">
                Days deadline
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center">
              <p className="text-4xl font-bold">
                ✓
              </p>
              <p className="mt-2 text-slate-400">
                Delivered before deadline
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Have a large project?
          </span>

          <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-bold text-slate-900 sm:text-4xl">
            Let&apos;s build a smarter workflow for it.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Tell us about your project, volume and deadline. We&apos;ll help
            you find an efficient way to get the work done.
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