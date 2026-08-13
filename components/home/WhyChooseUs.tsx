import Link from "next/link";
import {
  BadgeCheck,
  Clock3,
  MessageCircle,
  ShieldCheck,
  Users,
  Target,
  ArrowRight,
} from "lucide-react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Proven Track Record",
    description:
      "Our experience is backed by 130+ completed projects, 14,750+ hours and a 4.98 client rating on Upwork.",
  },
  {
    icon: Target,
    title: "Business-Focused Solutions",
    description:
      "We focus on solving real business problems—not simply delivering technical work. Every solution is designed around your goals.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description:
      "You stay informed throughout the project with clear communication, regular updates and straightforward collaboration.",
  },
  {
    icon: Clock3,
    title: "Reliable Delivery",
    description:
      "We understand that deadlines matter. Our processes are built around organized execution and dependable delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Accuracy",
    description:
      "Whether it's thousands of records, product data, images, or automation workflows, we focus on accuracy and consistency.",
  },
  {
    icon: Users,
    title: "Long-Term Partnership",
    description:
      "We're interested in building lasting client relationships—not just completing one project and disappearing.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Why JD Info
            </span>

            <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              A Reliable Partner
              <span className="block text-blue-600">
                Behind Your Business
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:ml-auto">
            From the first conversation to final delivery, we focus on
            understanding your requirements, solving the right problems,
            and delivering work you can rely on.
          </p>

        </div>

        {/* Main Content */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Trust Card */}
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl sm:p-10">

            {/* Decorative circles */}
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-600/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-indigo-600/20 blur-3xl" />

            <div className="relative">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">
                <BadgeCheck size={28} />
              </div>

              <h3 className="mt-7 font-[var(--font-heading)] text-2xl font-bold">
                Experience that speaks for itself.
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                JD Info brings years of hands-on experience across data,
                eCommerce, automation, image processing and digital
                solutions.
              </p>

              {/* Trust Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-2xl font-bold text-white">
                    $100K+
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Earned on Upwork
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-2xl font-bold text-white">
                    130+
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Projects
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-2xl font-bold text-white">
                    14,750+
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Hours Worked
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-2xl font-bold text-white">
                    4.98★
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Client Rating
                  </p>
                </div>

              </div>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center font-semibold text-blue-400 transition hover:text-blue-300"
              >
                Learn more about JD Info
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Link>

            </div>
          </div>

          {/* Reasons */}
          <div className="grid gap-5 sm:grid-cols-2">

            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-5 font-[var(--font-heading)] text-lg font-bold text-slate-900">
                    {reason.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {reason.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}