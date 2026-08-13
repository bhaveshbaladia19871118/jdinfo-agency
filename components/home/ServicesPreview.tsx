import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Database,
  ImageIcon,
  ShoppingCart,
  Globe,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Scraping & Data",
    description:
      "Extract, organize and deliver valuable data from websites, marketplaces, directories and other online sources.",
    href: "/services/web-scraping",
  },
  {
    icon: ShoppingCart,
    title: "Shopify & eCommerce",
    description:
      "Shopify store management, product uploads, migrations, catalog management and eCommerce support.",
    href: "/services/shopify",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "Automate repetitive business processes with practical AI-powered workflows and custom automation.",
    href: "/services/automation",
  },
  {
    icon: Globe,
    title: "WordPress Solutions",
    description:
      "WordPress development, content management, product uploads, maintenance and website support.",
    href: "/services/wordpress",
  },
  {
    icon: ImageIcon,
    title: "Image Processing",
    description:
      "Bulk image editing, resizing, renaming, conversion, optimization and Photoshop-based image solutions.",
    href: "/services/image-processing",
  },
  {
    icon: Database,
    title: "Data Research & Processing",
    description:
      "Research, data entry, Excel processing, data cleaning and structured datasets for business needs.",
    href: "/services/data-research",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            What We Do
          </span>

          <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            Solutions That Help Your
            <span className="block text-blue-600">
              Business Move Forward
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            From data and eCommerce to automation and digital solutions,
            we help businesses reduce manual work, improve efficiency,
            and get more done.
          </p>

        </div>

        {/* Service Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={27} />
                </div>

                {/* Title */}
                <h3 className="mt-6 font-[var(--font-heading)] text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>

                {/* Link */}
                <div className="mt-6 flex items-center font-semibold text-blue-600">
                  Explore Service

                  <ArrowRight
                    size={18}
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>

              </Link>
            );
          })}

        </div>

        {/* View All */}
        <div className="mt-12 text-center">

          <Link
            href="/services"
            className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-700 shadow-sm transition hover:border-blue-600 hover:text-blue-600"
          >
            View All Services
            <ArrowRight size={18} className="ml-2" />
          </Link>

        </div>

      </div>
    </section>
  );
}