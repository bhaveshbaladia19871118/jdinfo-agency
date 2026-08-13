/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  CheckCircle2,
  Code2,
  Database,
  ImageIcon,
  Lightbulb,
  MessageCircle,
  Rocket,
  ShoppingCart,
  Target,
  Users,
} from "lucide-react";

const expertise = [
  {
    icon: Database,
    title: "Data Solutions",
    description:
      "Web scraping, data extraction, research, cleaning and structured data processing.",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce",
    description:
      "Shopify, WordPress, product data, catalog management and eCommerce operations.",
  },
  {
    icon: Bot,
    title: "Automation & AI",
    description:
      "Practical automation and AI-powered workflows that reduce repetitive manual work.",
  },
  {
    icon: ImageIcon,
    title: "Image Solutions",
    description:
      "Bulk image processing, Photoshop, image conversion, resizing and optimization.",
  },
  {
    icon: Code2,
    title: "Web Solutions",
    description:
      "WordPress, Next.js, websites, integrations and custom digital solutions.",
  },
  {
    icon: BarChart3,
    title: "Business Support",
    description:
      "Research, Excel, data processing, product management and operational support.",
  },
];

const values = [
  {
    icon: Target,
    title: "Results First",
    description:
      "We focus on the outcome your business needs rather than simply completing a task.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Matters",
    description:
      "Accuracy, consistency and attention to detail are part of every project we undertake.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description:
      "We believe good communication is essential to successful long-term client relationships.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We aim to become a reliable extension of your team, not just another service provider.",
  },
];

export default function AboutPage() {
  return (
    <main>

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white lg:py-32">

        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-4xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              About JD Info
            </span>

            <h1 className="mt-5 font-[var(--font-heading)] text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Technology That Helps
              <span className="block text-blue-400">
                Businesses Work Smarter
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              JD Info is a digital solutions agency helping businesses
              simplify complex tasks, automate repetitive work, manage
              eCommerce operations and turn data into useful business
              solutions.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHO WE ARE
      ====================================================== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Content */}
            <div>

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Who We Are
              </span>

              <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                More than a service provider.
                <span className="block text-blue-600">
                  A partner for your business.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                JD Info works with businesses that need reliable support
                across data, eCommerce, automation, image processing and
                digital operations.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                We understand that every business has different challenges.
                That&apos;s why we don&apos;t believe in one-size-fits-all solutions.
                We take the time to understand the workflow, identify
                opportunities to improve it and deliver practical solutions
                that fit the way your business operates.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Whether you need thousands of product images processed,
                structured web data collected, an eCommerce store managed,
                or a repetitive workflow automated, our goal is simple:
                make your work easier and more efficient.
              </p>

            </div>

            {/* Visual */}
            <div className="relative">

              <div className="rounded-[2rem] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-2 shadow-2xl">

                <div className="rounded-[1.7rem] bg-slate-950/30 p-8 sm:p-10">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    <Rocket size={30} />
                  </div>

                  <h3 className="mt-8 font-[var(--font-heading)] text-3xl font-bold text-white">
                    Simplify.
                    <br />
                    Automate.
                    <br />
                    Grow.
                  </h3>

                  <p className="mt-6 leading-7 text-blue-100">
                    We combine technology, experience and practical
                    workflows to help businesses spend less time on
                    repetitive tasks and more time on what matters.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-4">

                    <div className="rounded-2xl bg-white/10 p-5">
                      <p className="text-3xl font-bold text-white">
                        130+
                      </p>
                      <p className="mt-1 text-sm text-blue-100">
                        Projects
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-5">
                      <p className="text-3xl font-bold text-white">
                        4.98★
                      </p>
                      <p className="mt-1 text-sm text-blue-100">
                        Rating
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          OUR EXPERTISE
      ====================================================== */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Expertise
            </span>

            <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-bold text-slate-900 sm:text-4xl">
              Solutions Across Data,
              <span className="text-blue-600">
                {" "}Technology & eCommerce
              </span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our experience spans multiple areas, allowing us to support
              businesses with both specialized tasks and broader digital
              workflows.
            </p>

          </div>


          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {expertise.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-6 font-[var(--font-heading)] text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          EXPERIENCE
      ====================================================== */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <div>

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Proven Experience
              </span>

              <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                Experience built through
                <span className="block text-blue-600">
                  real client projects.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Our experience has been built by working on real-world
                projects with different requirements, industries, deadlines,
                and challenges.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                From large-scale image processing and web scraping to
                eCommerce management and automation, we&apos;ve developed
                workflows designed around accuracy, efficiency and
                dependable delivery.
              </p>

              <Link
                href="/case-studies"
                className="mt-8 inline-flex items-center rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Explore Our Case Studies
                <ArrowRight size={18} className="ml-2" />
              </Link>

            </div>


            <div className="grid grid-cols-2 gap-5">

              <div className="rounded-3xl bg-slate-950 p-7 text-white">
                <p className="text-4xl font-bold">
                  $100K+
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Earned on Upwork
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                <p className="text-4xl font-bold text-slate-900">
                  130+
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Projects Completed
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                <p className="text-4xl font-bold text-slate-900">
                  14,750+
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Hours Worked
                </p>
              </div>

              <div className="rounded-3xl bg-blue-600 p-7 text-white">
                <p className="text-4xl font-bold">
                  4.98★
                </p>
                <p className="mt-2 text-sm text-blue-100">
                  Client Rating
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          VALUES
      ====================================================== */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Values
            </span>

            <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-bold text-slate-900 sm:text-4xl">
              How We Work With Clients
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Good technology is only part of a successful project.
              Communication, reliability and trust matter just as much.
            </p>

          </div>


          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm"
                >

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-6 font-[var(--font-heading)] text-lg font-bold text-slate-900">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {value.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">
            <Lightbulb size={30} />
          </div>

          <h2 className="mt-7 font-[var(--font-heading)] text-3xl font-bold sm:text-4xl">
            Have a project in mind?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Tell us what you&apos;re trying to accomplish. Whether you need
            data, automation, eCommerce support, or a custom digital
            solution, we&apos;d love to hear about it.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Let&apos;s Talk About Your Project
            <ArrowRight size={18} className="ml-2" />
          </Link>

        </div>
      </section>

    </main>
  );
}