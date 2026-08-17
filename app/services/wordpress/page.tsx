import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Globe2,
  FileText,
  ShoppingBag,
  Settings2,
  RefreshCw,
  Database,
  LayoutDashboard,
  Search,
  Zap,
} from "lucide-react";

const capabilities = [
  {
    icon: Globe2,
    title: "Website Management",
    description:
      "Keep your WordPress website updated, organized, and running smoothly with reliable day-to-day support.",
  },
  {
    icon: ShoppingBag,
    title: "Product Uploads",
    description:
      "Add and update products, product information, images, categories, prices, and other required fields.",
  },
  {
    icon: FileText,
    title: "Content Management",
    description:
      "Update pages, posts, images, text, links, and other website content according to your requirements.",
  },
  {
    icon: Database,
    title: "Product Data Management",
    description:
      "Organize product information, categories, attributes, SKUs, descriptions, and other structured data.",
  },
  {
    icon: Settings2,
    title: "WordPress Updates",
    description:
      "Help manage routine website updates and repetitive administrative tasks across your WordPress site.",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Support",
    description:
      "Get reliable assistance with recurring WordPress tasks and ongoing website content requirements.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Understand Your Website",
    description:
      "We review your WordPress website, content structure, products, and the tasks you need completed.",
  },
  {
    number: "02",
    title: "Prepare the Content",
    description:
      "We organize the required text, images, product data, spreadsheets, and other website assets.",
  },
  {
    number: "03",
    title: "Update Your Website",
    description:
      "We complete the requested WordPress tasks while following your existing website structure and instructions.",
  },
  {
    number: "04",
    title: "Review the Work",
    description:
      "We check pages, products, images, links, formatting, and other relevant information before completion.",
  },
  {
    number: "05",
    title: "Ongoing Support",
    description:
      "For recurring requirements, we can continue helping with regular website and content management tasks.",
  },
];

const services = [
  "WordPress website management",
  "Product uploads",
  "Product data updates",
  "Product image uploads",
  "Content updates",
  "Page creation & updates",
  "Blog post management",
  "Categories & tags",
  "Product categorization",
  "Content formatting",
  "Image management",
  "Ongoing WordPress support",
];

export default function WordPressPage() {
  return (
    <main>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-slate-950 text-white">

        {/* Background glow */}
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          {/* Back to Services */}
          <div className="px-6 pt-8 lg:px-8">

            <Link
              href="/services"
              className="inline-flex items-center text-sm font-medium text-slate-400 transition hover:text-white"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Services
            </Link>

          </div>


          {/* Two-column hero */}
          <div className="mt-8 grid lg:grid-cols-2">

            {/* =================================================
                LEFT — CONTENT
            ================================================== */}

            <div className="flex items-center px-6 py-20 sm:py-24 lg:px-12 lg:py-28">

              <div className="max-w-xl">

                <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-300">
                  WordPress Solutions
                </span>


                <h1 className="mt-6 font-[var(--font-heading)] text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">

                  Reliable Support
                  <span className="block text-blue-400">
                    For Your WordPress Website
                  </span>

                </h1>


                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  We help businesses manage websites, update content,
                  upload products, organize data, and handle ongoing
                  WordPress tasks so you can focus on your business.
                </p>


                {/* Buttons */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500"
                  >
                    Discuss Your Project
                    <ArrowRight size={18} className="ml-2" />
                  </Link>


                  <Link
                    href="/case-studies"
                    className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                  >
                    View Case Studies
                  </Link>

                </div>


                {/* Trust points */}
                <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">

                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2
                      size={17}
                      className="text-blue-400"
                    />
                    Website Management
                  </div>


                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2
                      size={17}
                      className="text-blue-400"
                    />
                    Product Updates
                  </div>


                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2
                      size={17}
                      className="text-blue-400"
                    />
                    Ongoing Support
                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                RIGHT — IMAGE
            ================================================== */}

            <div className="relative min-h-[500px] overflow-hidden lg:min-h-[650px]">

              <Image
                src="/images/services/wordpress.jpg"
                alt="WordPress website management and support"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT WE DO
      ====================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              What We Do
            </span>


            <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-bold text-slate-900 sm:text-5xl">

              Practical WordPress Support
              <span className="text-blue-600">
                {" "}for Your Everyday Tasks
              </span>

            </h2>


            <p className="mt-5 text-lg leading-8 text-slate-600">
              WordPress websites often require regular updates and
              repetitive administrative work. We help take care of
              those tasks with a structured and reliable workflow.
            </p>

          </div>


          {/* Capability Cards */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {capabilities.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={23} />
                  </div>


                  <h3 className="mt-6 text-xl font-bold text-slate-900">
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
          PROCESS
      ====================================================== */}

      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Workflow
            </span>


            <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-bold text-slate-900 sm:text-5xl">

              From Your Requirements
              <span className="text-blue-600">
                {" "}to a Completed Website
              </span>

            </h2>


            <p className="mt-5 text-lg leading-8 text-slate-600">
              A straightforward process designed to keep your WordPress
              tasks organized and your website content consistent.
            </p>

          </div>


          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">

            {workflow.map((step) => (

              <div
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >

                <span className="text-4xl font-bold text-blue-100">
                  {step.number}
                </span>


                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>


                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WORDPRESS SERVICES
      ====================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            {/* Left */}
            <div>

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                WordPress Services
              </span>


              <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-bold text-slate-900 sm:text-5xl">

                Help With the Tasks
                <span className="text-blue-600">
                  {" "}That Keep Your Website Updated
                </span>

              </h2>


              <p className="mt-5 text-lg leading-8 text-slate-600">
                From product uploads and content updates to image
                management and recurring website tasks, we can help
                keep your WordPress site organized.
              </p>


              <Link
                href="/contact"
                className="mt-8 inline-flex items-center font-semibold text-blue-600 transition hover:text-blue-700"
              >
                Discuss Your Requirements
                <ArrowRight size={18} className="ml-2" />
              </Link>

            </div>


            {/* Right */}
            <div className="grid gap-3 sm:grid-cols-2">

              {services.map((service) => (

                <div
                  key={service}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4"
                >

                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-blue-600"
                  />

                  <span className="text-sm font-medium text-slate-700">
                    {service}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURED WORDPRESS SUPPORT
      ====================================================== */}

      <section className="bg-slate-950 py-24 text-white">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Image */}

            <div className="relative min-h-[400px] overflow-hidden rounded-3xl">

              <Image
                src="/images/services/wordpress-support.jpg"
                alt="WordPress website support"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

            </div>


            {/* Content */}

            <div>

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Ongoing Support
              </span>


              <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-bold sm:text-5xl">

                Keep Your Website
                <span className="text-blue-400">
                  {" "}Moving Forward
                </span>

              </h2>


              <p className="mt-5 text-lg leading-8 text-slate-300">
                WordPress work doesn&lsquo;t always end after a website is
                launched. New products need to be added, content needs
                updating, images need replacing, and small changes
                come up regularly.
              </p>


              <div className="mt-7 space-y-4">

                <div className="flex items-start gap-3">

                  <LayoutDashboard
                    size={20}
                    className="mt-1 shrink-0 text-blue-400"
                  />

                  <div>

                    <h3 className="font-semibold">
                      Website Administration
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      Help manage recurring content and website tasks.
                    </p>

                  </div>

                </div>


                <div className="flex items-start gap-3">

                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-blue-400"
                  />

                  <div>

                    <h3 className="font-semibold">
                      Consistent Updates
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      Keep product and website information organized
                      and up to date.
                    </p>

                  </div>

                </div>


                <div className="flex items-start gap-3">

                  <Zap
                    size={20}
                    className="mt-1 shrink-0 text-blue-400"
                  />

                  <div>

                    <h3 className="font-semibold">
                      Less Manual Work
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      Let your team focus on important business tasks
                      while repetitive website work gets handled.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY JD INFO
      ====================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Why JD Info
            </span>


            <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-bold text-slate-900 sm:text-5xl">

              WordPress Support Built Around
              <span className="text-blue-600">
                {" "}Your Workflow
              </span>

            </h2>


            <p className="mt-5 text-lg leading-8 text-slate-600">
              We focus on careful execution, organized data, and clear
              instructions so your website tasks are completed the way
              you need them.
            </p>

          </div>


          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* Card 1 */}

            <div className="rounded-2xl border border-slate-200 p-7">

              <Search
                size={25}
                className="text-blue-600"
              />

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Detail Focused
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                We carefully follow your instructions and website
                structure.
              </p>

            </div>


            {/* Card 2 */}

            <div className="rounded-2xl border border-slate-200 p-7">

              <CheckCircle2
                size={25}
                className="text-blue-600"
              />

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Quality Checked
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Completed work is reviewed for formatting, missing
                information, and common errors.
              </p>

            </div>


            {/* Card 3 */}

            <div className="rounded-2xl border border-slate-200 p-7">

              <Settings2
                size={25}
                className="text-blue-600"
              />

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Flexible Support
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Tasks can be adapted to your website and existing
                processes.
              </p>

            </div>


            {/* Card 4 */}

            <div className="rounded-2xl border border-slate-200 p-7">

              <RefreshCw
                size={25}
                className="text-blue-600"
              />

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Ongoing Help
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Get support for recurring website and content
                management requirements.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-blue-600 py-20 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <h2 className="font-[var(--font-heading)] text-4xl font-bold sm:text-5xl">
            Need Help With Your WordPress Website?
          </h2>


          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Tell us what you need help with — website management,
            product uploads, content updates, or ongoing support.
          </p>


          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-600 shadow-lg transition hover:bg-slate-100"
          >
            Start a Conversation
            <ArrowRight size={18} className="ml-2" />
          </Link>

        </div>

      </section>

    </main>
  );
}