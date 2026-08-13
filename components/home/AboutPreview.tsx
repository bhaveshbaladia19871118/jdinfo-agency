import Link from "next/link";

const services = [
  {
    icon: "📊",
    title: "Data Solutions",
    description:
      "Web scraping, data research, extraction, cleaning and processing.",
  },
  {
    icon: "🛒",
    title: "eCommerce Solutions",
    description:
      "Shopify, WordPress, product uploads, catalog management and migration.",
  },
  {
    icon: "⚙️",
    title: "Automation & AI",
    description:
      "Smart workflows that reduce repetitive work and improve productivity.",
  },
];

export default function AboutPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Left Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Welcome to JD Info
            </span>

            <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Smart Digital Solutions
              <span className="block text-blue-600">
                Built for Business Growth
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              JD Info is a digital solutions agency helping businesses
              simplify, automate and grow. We combine data, technology,
              eCommerce and creative solutions to solve real business
              challenges.
            </p>

            <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
              From web scraping and data processing to Shopify, WordPress,
              image automation and AI-powered workflows, we deliver reliable
              solutions designed to save time and improve productivity.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Learn More About Us
              <span className="ml-2">→</span>
            </Link>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="rounded-[2rem] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-2 shadow-2xl shadow-blue-900/20">

              <div className="rounded-[1.7rem] bg-white/10 p-7 backdrop-blur-sm sm:p-9">

                <div className="mb-8">
                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-blue-100">
                    What We Do
                  </span>

                  <h3 className="mt-4 font-[var(--font-heading)] text-2xl font-bold text-white">
                    Helping businesses work smarter.
                  </h3>
                </div>

                <div className="space-y-4">
                  {services.map((service) => (
                    <div
                      key={service.title}
                      className="group rounded-2xl border border-white/10 bg-white/10 p-5 transition duration-300 hover:bg-white/15"
                    >
                      <div className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-2xl shadow-sm">
                          {service.icon}
                        </div>

                        <div>
                          <h4 className="font-semibold text-white">
                            {service.title}
                          </h4>

                          <p className="mt-1 text-sm leading-6 text-blue-100">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-5 -right-5 -z-10 h-32 w-32 rounded-full bg-blue-100 blur-2xl" />
          </div>

        </div>
      </div>
    </section>
  );
}