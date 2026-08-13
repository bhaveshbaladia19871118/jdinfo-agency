import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Rocket,
  Search,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Understand",
    description:
      "We start by understanding your business, requirements, goals and the problem you want to solve.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Plan",
    description:
      "We define the right approach, tools, timeline and workflow before starting the actual work.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Execute",
    description:
      "Our team gets to work, keeping you updated and making sure the project stays aligned with your requirements.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Deliver",
    description:
      "We review the final result, make necessary adjustments and deliver a solution ready for your business.",
  },
];

export default function Process() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            How We Work
          </span>

          <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            A Simple Process.
            <span className="block text-blue-600">
              Reliable Results.
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We keep the process straightforward, transparent and focused on
            delivering results that actually help your business.
          </p>
        </div>

        {/* Process */}
        <div className="relative mt-16">

          {/* Connecting Line - Desktop */}
          <div className="absolute left-[12%] right-[12%] top-12 hidden h-px bg-slate-200 lg:block" />

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative text-center"
                >
                  {/* Number + Icon */}
                  <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border-8 border-slate-50 bg-white shadow-md transition duration-300 group-hover:border-blue-50 group-hover:bg-blue-600 group-hover:text-white">

                    <Icon size={28} />

                    <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white shadow-sm">
                      {step.number}
                    </span>

                  </div>

                  {/* Content */}
                  <h3 className="mt-7 font-[var(--font-heading)] text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </div>
              );
            })}

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Start Your Project
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>

      </div>
    </section>
  );
}