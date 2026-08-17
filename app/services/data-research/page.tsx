import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Search,
  FileSpreadsheet,
  Database,
  ClipboardList,
  Filter,
  Table2,
  FolderOpen,
  Settings2,
  Zap,
  BarChart3,
} from "lucide-react";

const capabilities = [
  {
    icon: Search,
    title: "Web Research",
    description:
      "Find, collect, and organize information from websites and online sources according to your specific requirements.",
  },
  {
    icon: FileSpreadsheet,
    title: "Excel & CSV Processing",
    description:
      "Process spreadsheets and CSV files, organize columns, update records, and prepare structured datasets.",
  },
  {
    icon: Filter,
    title: "Data Cleaning",
    description:
      "Identify duplicates, missing information, inconsistent formatting, and other common data quality issues.",
  },
  {
    icon: ClipboardList,
    title: "Data Entry",
    description:
      "Enter information accurately into spreadsheets, databases, websites, and other systems.",
  },
  {
    icon: Table2,
    title: "Data Organization",
    description:
      "Transform scattered information into clearly structured tables, spreadsheets, and organized datasets.",
  },
  {
    icon: Database,
    title: "Dataset Preparation",
    description:
      "Prepare clean, structured, and business-ready datasets for research, analysis, eCommerce, or other workflows.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Understand the Requirements",
    description:
      "We review what information you need, where it should come from, and how the final dataset should be structured.",
  },
  {
    number: "02",
    title: "Collect the Information",
    description:
      "Data is researched and collected from the sources or files provided according to your requirements.",
  },
  {
    number: "03",
    title: "Clean & Process",
    description:
      "We remove duplicates, correct formatting issues, organize fields, and process the information as required.",
  },
  {
    number: "04",
    title: "Quality Check",
    description:
      "The completed dataset is reviewed for missing information, inconsistencies, duplicates, and other common errors.",
  },
  {
    number: "05",
    title: "Deliver Organized Data",
    description:
      "The final information is delivered in the requested Excel, CSV, spreadsheet, or other required format.",
  },
];

const services = [
  "Web research",
  "Online data collection",
  "Excel data processing",
  "CSV processing",
  "Data cleaning",
  "Duplicate removal",
  "Data entry",
  "Data verification",
  "Data formatting",
  "Data organization",
  "Product data research",
  "Business data research",
];

export default function DataResearchPage() {
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

          {/* Back */}
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
                  Data Research & Processing
                </span>


                <h1 className="mt-6 font-[var(--font-heading)] text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">

                  Turn Raw Information Into
                  <span className="block text-blue-400">
                    Useful Business Data
                  </span>

                </h1>


                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  Transform raw information into clean, organized, and
                  useful datasets for your business through careful
                  research, data processing, cleaning, and organization.
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
                    Research & Collection
                  </div>


                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2
                      size={17}
                      className="text-blue-400"
                    />
                    Clean Data
                  </div>


                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2
                      size={17}
                      className="text-blue-400"
                    />
                    Organized Datasets
                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                RIGHT — IMAGE
            ================================================== */}

            <div className="relative min-h-[500px] overflow-hidden lg:min-h-[650px]">

              <Image
                src="/images/services/data-research.jpg"
                alt="Data research and processing services"
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

              From Scattered Information
              <span className="text-blue-600">
                {" "}to Structured Data
              </span>

            </h2>


            <p className="mt-5 text-lg leading-8 text-slate-600">
              Good decisions depend on good information. We help collect,
              clean, verify, and organize data so it is easier for your
              team to use.
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

              From Raw Information
              <span className="text-blue-600">
                {" "}to Business-Ready Data
              </span>

            </h2>


            <p className="mt-5 text-lg leading-8 text-slate-600">
              A structured process helps keep research, data entry,
              cleaning, and organization accurate and consistent.
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
          SERVICES
      ====================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            {/* Left */}

            <div>

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Data Services
              </span>


              <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-bold text-slate-900 sm:text-5xl">

                Research, Process,
                <span className="text-blue-600">
                  {" "}Clean & Organize
                </span>

              </h2>


              <p className="mt-5 text-lg leading-8 text-slate-600">
                Whether you need a targeted research project or a large
                dataset cleaned and organized, we can adapt the workflow
                to your requirements.
              </p>


              <Link
                href="/contact"
                className="mt-8 inline-flex items-center font-semibold text-blue-600 transition hover:text-blue-700"
              >
                Discuss Your Data Project
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
          FEATURED DATA WORKFLOW
      ====================================================== */}

      <section className="bg-slate-950 py-24 text-white">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Image */}

            <div className="relative min-h-[400px] overflow-hidden rounded-3xl">

              <Image
                src="/images/services/data-research-workflow.jpg"
                alt="Data research and processing workflow"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

            </div>


            {/* Content */}

            <div>

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Data Quality
              </span>


              <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-bold sm:text-5xl">

                Clean Data Is
                <span className="text-blue-400">
                  {" "}More Useful Data
                </span>

              </h2>


              <p className="mt-5 text-lg leading-8 text-slate-300">
                Raw datasets can contain duplicates, inconsistent
                formatting, missing values, or information stored in
                different structures. We help turn that information
                into a cleaner and more manageable dataset.
              </p>


              <div className="mt-7 space-y-4">

                <div className="flex items-start gap-3">

                  <Filter
                    size={20}
                    className="mt-1 shrink-0 text-blue-400"
                  />

                  <div>

                    <h3 className="font-semibold">
                      Remove Unnecessary Data
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      Identify duplicates and unwanted records according
                      to your project requirements.
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
                      Improve Consistency
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      Standardize formatting and organize information
                      into clearly defined fields.
                    </p>

                  </div>

                </div>


                <div className="flex items-start gap-3">

                  <BarChart3
                    size={20}
                    className="mt-1 shrink-0 text-blue-400"
                  />

                  <div>

                    <h3 className="font-semibold">
                      Prepare for Business Use
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      Deliver information in a format that is easier
                      for your team to review, analyze, or process.
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

              Reliable Data Work
              <span className="text-blue-600">
                {" "}With Attention to Detail
              </span>

            </h2>


            <p className="mt-5 text-lg leading-8 text-slate-600">
              We focus on accuracy, organization, and clear project
              requirements so your final dataset is easier to use.
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
                Research Focus
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Information is collected according to the sources and
                requirements defined for your project.
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
                We review data for common issues such as duplicates,
                missing information, and inconsistent formatting.
              </p>

            </div>


            {/* Card 3 */}

            <div className="rounded-2xl border border-slate-200 p-7">

              <Settings2
                size={25}
                className="text-blue-600"
              />

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Structured Workflow
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Defined steps help keep large research and processing
                projects organized.
              </p>

            </div>


            {/* Card 4 */}

            <div className="rounded-2xl border border-slate-200 p-7">

              <Zap
                size={25}
                className="text-blue-600"
              />

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Efficient Delivery
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                We focus on delivering clean and organized information
                in the format your workflow requires.
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
            Have a Data Research Project?
          </h2>


          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Tell us what information you need, where it should come
            from, and how you want the final data organized.
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