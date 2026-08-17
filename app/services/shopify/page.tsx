import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShoppingBag,
  ImageIcon,
  FileSpreadsheet,
  Tags,
  Upload,
  Settings2,
  Zap,
  Database,
  Search,
} from "lucide-react";

const capabilities = [
  {
    icon: ShoppingBag,
    title: "Shopify Store Management",
    description:
      "Help with day-to-day Shopify store tasks, product updates, collections, and catalog management.",
  },
  {
    icon: Database,
    title: "Product Data Management",
    description:
      "Organize product titles, descriptions, SKUs, variants, prices, categories, tags, and other product information.",
  },
  {
    icon: ImageIcon,
    title: "Product Image Processing",
    description:
      "Resize, rename, compress, organize, and prepare large volumes of product images for your store.",
  },
  {
    icon: FileSpreadsheet,
    title: "Bulk Product Uploads",
    description:
      "Prepare and manage product information using CSV files and structured spreadsheets for efficient bulk updates.",
  },
  {
    icon: Tags,
    title: "Collections & Organization",
    description:
      "Help organize products into collections, categories, tags, and other store structures.",
  },
  {
    icon: Settings2,
    title: "Custom eCommerce Tasks",
    description:
      "Handle repetitive Shopify and eCommerce tasks based on your specific workflow and requirements.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Understand Your Store",
    description:
      "We review your store structure, products, workflow, and the specific tasks you need help with.",
  },
  {
    number: "02",
    title: "Prepare the Data",
    description:
      "Product information, images, spreadsheets, and other required assets are organized before processing.",
  },
  {
    number: "03",
    title: "Process & Update",
    description:
      "We carry out the required Shopify or eCommerce tasks using an organized and repeatable workflow.",
  },
  {
    number: "04",
    title: "Quality Check",
    description:
      "We review products, images, fields, variants, and other relevant information to identify errors or missing data.",
  },
  {
    number: "05",
    title: "Final Delivery",
    description:
      "The completed work is delivered or updated in your store according to your requirements.",
  },
];

const services = [
  "Shopify product listing",
  "Product title & description updates",
  "Product image resizing",
  "Image renaming & compression",
  "Bulk product updates",
  "CSV product processing",
  "Product categorization",
  "Collections & tags",
  "SKU & variant management",
  "Product data cleanup",
  "eCommerce data entry",
  "Store content updates",
];

export default function ShopifyPage() {
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
                LEFT
            ================================================== */}

            <div className="flex items-center px-6 py-20 sm:py-24 lg:px-12 lg:py-28">

              <div className="max-w-xl">

                <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-300">
                  Shopify & eCommerce
                </span>


                <h1 className="mt-6 font-[var(--font-heading)] text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">

                  Keep Your
                  <span className="block text-blue-400">
                    eCommerce Operations Moving
                  </span>

                </h1>


                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  We help eCommerce businesses manage product data, images,
                  listings, collections, and repetitive Shopify tasks so
                  your store stays organized and up to date.
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
                    Organized Product Data
                  </div>


                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2
                      size={17}
                      className="text-blue-400"
                    />
                    Bulk Processing
                  </div>


                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2
                      size={17}
                      className="text-blue-400"
                    />
                    Quality Checked
                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                RIGHT — IMAGE
            ================================================== */}

            <div className="relative min-h-[500px] overflow-hidden lg:min-h-[650px]">

              <Image
                src="/images/services/shopify.jpg"
                alt="Shopify and eCommerce services"
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
              Practical Support for
              <span className="text-blue-600">
                {" "}Growing eCommerce Stores
              </span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Managing an online store involves many repetitive tasks.
              We help take those tasks off your plate so you can focus
              on your products, customers, and business.
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
          WORKFLOW
      ====================================================== */}

      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Our Workflow
            </span>

            <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-bold text-slate-900 sm:text-5xl">
              From Product Data
              <span className="text-blue-600">
                {" "}to Store-Ready Content
              </span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We use a structured workflow to keep large product and
              eCommerce tasks organized and consistent.
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
          SHOPIFY SERVICES
      ====================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            {/* Left */}
            <div>

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Shopify Services
              </span>


              <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-bold text-slate-900 sm:text-5xl">

                Help With the Tasks
                <span className="text-blue-600">
                  {" "}That Take Time
                </span>

              </h2>


              <p className="mt-5 text-lg leading-8 text-slate-600">
                From product uploads to image processing and catalog
                organization, we can help with repetitive operational
                tasks that keep your store running.
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
          IMAGE PROCESSING FEATURE
      ====================================================== */}

      <section className="bg-slate-950 py-24 text-white">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Image */}
            <div className="relative min-h-[400px] overflow-hidden rounded-3xl">

              <Image
                src="/images/case-studies/bulk-image-processing.jpg"
                alt="Bulk product image processing"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

            </div>


            {/* Content */}
            <div>

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Featured Work
              </span>


              <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-bold sm:text-5xl">

                Large-Scale Product
                <span className="text-blue-400">
                  {" "}Image Processing
                </span>

              </h2>


              <p className="mt-5 text-lg leading-8 text-slate-300">
                Need thousands of product images resized, renamed,
                compressed, organized, or prepared for your store?
                We can build a repeatable workflow for large image
                processing projects.
              </p>


              <div className="mt-7 space-y-3">

                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-blue-400"
                  />
                  <span className="text-slate-300">
                    Bulk image processing
                  </span>
                </div>


                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-blue-400"
                  />
                  <span className="text-slate-300">
                    Image resizing and compression
                  </span>
                </div>


                <div className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-blue-400"
                  />
                  <span className="text-slate-300">
                    File naming and organization
                  </span>
                </div>

              </div>


              <Link
                href="/case-studies/bulk-image-processing"
                className="mt-8 inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                View Case Study
                <ArrowRight size={18} className="ml-2" />
              </Link>

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

              Reliable Support for
              <span className="text-blue-600">
                {" "}Your Store
              </span>

            </h2>


            <p className="mt-5 text-lg leading-8 text-slate-600">
              We focus on organized workflows, careful data handling,
              and consistent delivery so your eCommerce operations
              don&apos;t become another daily headache.
            </p>

          </div>


          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-slate-200 p-7">

              <Upload
                size={25}
                className="text-blue-600"
              />

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Bulk Tasks
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Handle repetitive product and image tasks efficiently.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 p-7">

              <CheckCircle2
                size={25}
                className="text-blue-600"
              />

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Quality Focus
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Review work carefully to reduce missing or incorrect data.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 p-7">

              <Settings2
                size={25}
                className="text-blue-600"
              />

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Flexible
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Workflows can be adapted to your existing process.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 p-7">

              <Zap
                size={25}
                className="text-blue-600"
              />

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Efficient
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Designed to make repetitive store operations easier.
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
            Need Help Managing Your Store?
          </h2>


          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Tell us what you&lsquo;re working on, how many products or images
            you&lsquo;re dealing with, and what needs to be done. We&lsquo;ll help
            you plan the workflow.
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