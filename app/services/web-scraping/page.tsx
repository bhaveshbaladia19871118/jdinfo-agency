import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Database,
  Globe2,
  Search,
  FileSpreadsheet,
  Settings2,
  Zap,
  BarChart3,
} from "lucide-react";

const capabilities = [
  {
    icon: Globe2,
    title: "Website Data Extraction",
    description:
      "Extract structured information from websites, directories, marketplaces, and other online sources.",
  },
  {
    icon: Database,
    title: "Product Data Scraping",
    description:
      "Collect product names, descriptions, prices, SKUs, specifications, images, categories, and other product information.",
  },
  {
    icon: Search,
    title: "Research & Lead Data",
    description:
      "Gather business information, contact details, company data, locations, and other research requirements.",
  },
  {
    icon: FileSpreadsheet,
    title: "Data Collection to Excel",
    description:
      "Receive your collected information in Excel, CSV, Google Sheets, or another structured format.",
  },
  {
    icon: Settings2,
    title: "Custom Scraping",
    description:
      "Build workflows around your specific website, fields, filters, pagination, and data requirements.",
  },
  {
    icon: Zap,
    title: "Bulk Data Processing",
    description:
      "Process large datasets efficiently with validation, cleaning, formatting, and organization.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand Your Requirements",
    description:
      "We review the target websites, required fields, output format, volume, and any specific data rules.",
  },
  {
    number: "02",
    title: "Build the Collection Workflow",
    description:
      "We create an efficient scraping and extraction workflow based on the structure and requirements of the project.",
  },
  {
    number: "03",
    title: "Collect & Process Data",
    description:
      "The required information is collected, organized, cleaned, and processed according to your specifications.",
  },
  {
    number: "04",
    title: "Quality Check",
    description:
      "We review the collected data for missing information, formatting problems, duplicates, and other issues.",
  },
  {
    number: "05",
    title: "Deliver Structured Data",
    description:
      "The final dataset is delivered in your preferred format and organized so it can be used immediately.",
  },
];

const useCases = [
  "Product & eCommerce data",
  "Competitor research",
  "Market research",
  "Business directories",
  "Real estate listings",
  "Travel & location data",
  "Lead generation",
  "Price monitoring",
  "Product catalogs",
  "Public business information",
  "Web research",
  "Large-scale data collection",
];

export default function WebScrapingPage() {
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


    {/* Two-column Hero */}
    <div className="mt-8 grid lg:grid-cols-2">

      {/* =====================================================
          LEFT — CONTENT
      ====================================================== */}

      <div className="flex items-center px-6 py-16 sm:py-20 lg:px-12 lg:py-24">

        <div className="max-w-xl">

          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-300">
            Web Scraping & Data Extraction
          </span>


          <h1 className="mt-6 font-[var(--font-heading)] text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">

            Turn Web Data Into

            <span className="block text-blue-400">
              Useful Business Information
            </span>

          </h1>


          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            We help businesses collect, structure, clean, and organize
            data from websites and online sources so you can spend less
            time collecting information and more time using it.
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
              Structured Data
            </div>


            <div className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2
                size={17}
                className="text-blue-400"
              />
              Quality Checked
            </div>


            <div className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2
                size={17}
                className="text-blue-400"
              />
              Custom Workflows
            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          RIGHT — FULL IMAGE
      ====================================================== */}

      {/* Right - Image */}
<div className="relative min-h-[500px] lg:min-h-[650px] overflow-hidden">
  <Image
    src="/images/services/web-scraping.jpg"
    alt="Web scraping and data extraction"
    fill
    priority
    sizes="(max-width: 1024px) 100vw, 50vw"
    className="object-cover object-right"
  />
</div>

    </div>

  </div>

</section>


      {/* =====================================================
          CAPABILITIES
      ====================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              What We Do
            </span>

            <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-bold text-slate-900 sm:text-5xl">
              Data Collection Built Around
              <span className="text-blue-600"> Your Requirements</span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Every project has different data requirements. We build our
              workflow around the websites, information, volume, and output
              format you actually need.
            </p>

          </div>


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
              Our Process
            </span>

            <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-bold text-slate-900 sm:text-5xl">
              From Website
              <span className="text-blue-600"> to Usable Data</span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A straightforward workflow designed to keep your project
              organized from requirements to final delivery.
            </p>

          </div>


          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">

            {process.map((step) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
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
          USE CASES
      ====================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            {/* Left */}
            <div>

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Use Cases
              </span>

              <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-bold text-slate-900 sm:text-5xl">
                What Can We
                <span className="text-blue-600"> Collect?</span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                We work with a wide range of public web data and research
                requirements. If you have a specific dataset in mind,
                we can review the requirements and determine the best
                approach.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center font-semibold text-blue-600 transition hover:text-blue-700"
              >
                Tell Us What You Need
                <ArrowRight size={18} className="ml-2" />
              </Link>

            </div>


            {/* Right */}
            <div className="grid gap-3 sm:grid-cols-2">

              {useCases.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-blue-600"
                  />

                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHY JD INFO
      ====================================================== */}

      <section className="bg-slate-950 py-24 text-white">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <div>

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Why JD Info
              </span>

              <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-bold sm:text-5xl">
                More Than Just
                <span className="text-blue-400"> Collecting Data</span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                Good data is useful only when it is organized, accurate,
                and ready for the next step. Our focus is not simply
                collecting information, but delivering data that fits
                into your workflow.
              </p>

            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <BarChart3
                  size={25}
                  className="text-blue-400"
                />

                <h3 className="mt-5 text-lg font-bold">
                  Organized Output
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Data structured according to your required fields and
                  output format.
                </p>
              </div>


              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <CheckCircle2
                  size={25}
                  className="text-blue-400"
                />

                <h3 className="mt-5 text-lg font-bold">
                  Quality Focused
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  We review datasets for missing information, duplicates,
                  and formatting issues.
                </p>
              </div>


              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Settings2
                  size={25}
                  className="text-blue-400"
                />

                <h3 className="mt-5 text-lg font-bold">
                  Flexible Workflow
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Our approach can be adapted to your website and project
                  requirements.
                </p>
              </div>


              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Zap
                  size={25}
                  className="text-blue-400"
                />

                <h3 className="mt-5 text-lg font-bold">
                  Efficient Delivery
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Efficient workflows help us handle repetitive and
                  large-volume data tasks.
                </p>
              </div>

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
            Have a Data Collection Project?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Tell us what data you need, where it comes from, and how you
            want it delivered. We&apos;ll help you determine the right workflow.
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