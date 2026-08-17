import Link from "next/link";
import {
  Bot,
  Database,
  ImageIcon,
  ShoppingCart,
  Search,
  Globe,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Scraping & Data Extraction",
    description:
      "Collect accurate and structured data from websites, marketplaces, directories and other online sources.",
    features: [
      "Product & marketplace data",
      "Business directory scraping",
      "Price & competitor research",
      "Custom data extraction",
    ],
    href: "/services/web-scraping",
  },
  {
    icon: ShoppingCart,
    title: "Shopify & eCommerce",
    description:
      "Build, manage, migrate and optimize eCommerce stores while keeping product data organized and accurate.",
    features: [
      "Shopify store management",
      "Product uploads",
      "WordPress to Shopify migration",
      "Product data management",
    ],
    href: "/services/shopify",
  },
  {
    icon: Bot,
    title: "AI & Business Automation",
    description:
      "Reduce repetitive manual work with practical AI-powered workflows and custom business automation.",
    features: [
      "AI workflow automation",
      "Data processing automation",
      "Bulk image automation",
      "Custom automation solutions",
    ],
    href: "/services/ai-automation",
  },
  {
    icon: Globe,
    title: "WordPress Solutions",
    description:
      "Reliable WordPress support for websites, content management, product data and ongoing improvements.",
    features: [
      "Website management",
      "Product uploads",
      "Content management",
      "Ongoing WordPress support",
    ],
    href: "/services/wordpress",
  },
  {
    icon: ImageIcon,
    title: "Image Processing & Photoshop",
    description:
      "Process, edit, resize, rename, convert and organize large volumes of images efficiently.",
    features: [
      "Bulk image processing",
      "Photoshop editing",
      "Image resizing & conversion",
      "Background removal & cleanup",
    ],
    href: "/services/image-processing",
  },
  {
    icon: Database,
    title: "Data Research & Processing",
    description:
      "Transform raw information into clean, organized and useful datasets for your business.",
    features: [
      "Web research",
      "Excel & CSV processing",
      "Data cleaning",
      "Data entry & organization",
    ],
    href: "/services/data-research",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Our Services
            </span>

            <h1 className="mt-5 font-[var(--font-heading)] text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Digital Solutions Built Around Your Business
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              From data extraction and eCommerce to AI automation and image
              processing, JD Info helps businesses reduce manual work,
              improve efficiency and scale with confidence.
            </p>

          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
                >
                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  {/* Title */}
                  <h2 className="mt-6 font-[var(--font-heading)] text-2xl font-bold text-slate-900">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <span className="mt-0.5 text-blue-600">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <div className="mt-auto pt-8">
                    <Link
                      href={service.href}
                      className="inline-flex items-center font-semibold text-blue-600 transition group-hover:text-blue-700"
                    >
                      Explore Service
                      <ArrowRight
                        size={18}
                        className="ml-2 transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </article>
              );
            })}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Have a project in mind?
          </span>

          <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-bold text-slate-900 sm:text-4xl">
            Let&apos;s find the right solution for your business.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Tell us what you&apos;re trying to accomplish and we&apos;ll help you
            determine the best way to get there.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Start a Conversation
            <ArrowRight size={18} className="ml-2" />
          </Link>

        </div>
      </section>
    </main>
  );
}