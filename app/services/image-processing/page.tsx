import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ImageIcon,
  Crop,
  FileImage,
  Eraser,
  Layers3,
  RefreshCw,
  Settings2,
  Zap,
  Search,
  FolderOpen,
} from "lucide-react";

const capabilities = [
  {
    icon: ImageIcon,
    title: "Bulk Image Processing",
    description:
      "Process large volumes of images efficiently with consistent sizing, formatting, naming, and organization.",
  },
  {
    icon: Layers3,
    title: "Photoshop Editing",
    description:
      "Edit product and business images using Photoshop according to your required style, dimensions, and specifications.",
  },
  {
    icon: Crop,
    title: "Image Resizing",
    description:
      "Resize images to specific dimensions while maintaining a consistent appearance across your website or store.",
  },
  {
    icon: FileImage,
    title: "Image Conversion",
    description:
      "Convert images between common formats such as JPG, PNG, WebP, and other required formats.",
  },
  {
    icon: Eraser,
    title: "Background Removal",
    description:
      "Remove backgrounds, clean up images, and prepare product photos for eCommerce and other business uses.",
  },
  {
    icon: FolderOpen,
    title: "Image Organization",
    description:
      "Rename, sort, categorize, and organize large collections of images according to your file structure.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Understand Your Requirements",
    description:
      "We review the number of images, required dimensions, formats, naming rules, editing instructions, and final output.",
  },
  {
    number: "02",
    title: "Prepare the Images",
    description:
      "Images are organized and prepared before processing to maintain a consistent workflow.",
  },
  {
    number: "03",
    title: "Process & Edit",
    description:
      "We resize, edit, rename, convert, clean, or otherwise process the images according to your instructions.",
  },
  {
    number: "04",
    title: "Quality Check",
    description:
      "Processed images are reviewed for dimensions, format, naming, visual quality, and other project requirements.",
  },
  {
    number: "05",
    title: "Final Delivery",
    description:
      "The completed image files are organized and delivered in the structure and format you require.",
  },
];

const services = [
  "Bulk image processing",
  "Photoshop editing",
  "Image resizing",
  "Image compression",
  "JPG / PNG conversion",
  "WebP conversion",
  "Background removal",
  "Image cleanup",
  "Product photo editing",
  "Image renaming",
  "File organization",
  "eCommerce image preparation",
];

export default function ImageProcessingPage() {
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
                  Image Processing & Photoshop
                </span>


                <h1 className="mt-6 font-[var(--font-heading)] text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">

                  Process Thousands of
                  <span className="block text-blue-400">
                    Images Efficiently
                  </span>

                </h1>


                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  Process, edit, resize, rename, convert, and organize
                  large volumes of images efficiently with a consistent
                  workflow built around your requirements.
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
                    Bulk Processing
                  </div>


                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2
                      size={17}
                      className="text-blue-400"
                    />
                    Photoshop Editing
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
                src="/images/services/image-processing.jpg"
                alt="Image processing and Photoshop services"
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

              Image Processing Built Around
              <span className="text-blue-600">
                {" "}Your Requirements
              </span>

            </h2>


            <p className="mt-5 text-lg leading-8 text-slate-600">
              Whether you need a few professional edits or thousands
              of images processed in bulk, we can follow your required
              specifications and workflow.
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

              From Raw Images
              <span className="text-blue-600">
                {" "}to Ready-to-Use Files
              </span>

            </h2>


            <p className="mt-5 text-lg leading-8 text-slate-600">
              A structured workflow helps us maintain consistency when
              processing large numbers of images.
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
                Image Services
              </span>


              <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-bold text-slate-900 sm:text-5xl">

                From Simple Edits
                <span className="text-blue-600">
                  {" "}to Large-Scale Processing
                </span>

              </h2>


              <p className="mt-5 text-lg leading-8 text-slate-600">
                We can handle individual editing requirements as well as
                repetitive, high-volume image processing projects.
              </p>


              <Link
                href="/contact"
                className="mt-8 inline-flex items-center font-semibold text-blue-600 transition hover:text-blue-700"
              >
                Discuss Your Image Project
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
          FEATURED CASE STUDY
      ====================================================== */}

      <section className="bg-slate-950 py-24 text-white">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Image */}

            <div className="relative min-h-[400px] overflow-hidden rounded-3xl">

              <Image
                src="/images/case-studies/bulk-image-processing.jpg"
                alt="Bulk image processing case study"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

            </div>


            {/* Content */}

            <div>

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Featured Case Study
              </span>


              <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-bold sm:text-5xl">

                Processing 28,000 Travel
                <span className="text-blue-400">
                  {" "}Location Images
                </span>

              </h2>


              <p className="mt-5 text-lg leading-8 text-slate-300">
                See how JD Info organized and streamlined a large-scale
                image processing project using a structured workflow
                designed for high-volume production.
              </p>


              <div className="mt-7 space-y-3">

                <div className="flex items-center gap-3">

                  <CheckCircle2
                    size={18}
                    className="text-blue-400"
                  />

                  <span className="text-slate-300">
                    28,000 images processed
                  </span>

                </div>


                <div className="flex items-center gap-3">

                  <CheckCircle2
                    size={18}
                    className="text-blue-400"
                  />

                  <span className="text-slate-300">
                    Structured production workflow
                  </span>

                </div>


                <div className="flex items-center gap-3">

                  <CheckCircle2
                    size={18}
                    className="text-blue-400"
                  />

                  <span className="text-slate-300">
                    Completed within the required timeline
                  </span>

                </div>

              </div>


              <Link
                href="/case-studies/bulk-image-processing"
                className="mt-8 inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                View Full Case Study
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

              Efficient Image Processing
              <span className="text-blue-600">
                {" "}Without the Chaos
              </span>

            </h2>


            <p className="mt-5 text-lg leading-8 text-slate-600">
              Large image projects can quickly become difficult to manage.
              We use a structured process to keep files, instructions,
              and outputs organized.
            </p>

          </div>


          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* Card 1 */}

            <div className="rounded-2xl border border-slate-200 p-7">

              <FolderOpen
                size={25}
                className="text-blue-600"
              />

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Organized Files
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Images are processed and organized according to your
                required structure.
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
                We review processed images for common errors and
                project-specific requirements.
              </p>

            </div>


            {/* Card 3 */}

            <div className="rounded-2xl border border-slate-200 p-7">

              <Settings2
                size={25}
                className="text-blue-600"
              />

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Consistent Results
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Defined instructions help maintain consistency across
                large batches of images.
              </p>

            </div>


            {/* Card 4 */}

            <div className="rounded-2xl border border-slate-200 p-7">

              <Zap
                size={25}
                className="text-blue-600"
              />

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                High-Volume Ready
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Structured workflows make repetitive image projects
                easier to manage.
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
            Have a Large Image Project?
          </h2>


          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Tell us how many images you have, what needs to be done,
            and your required output. We&apos;ll help you plan the workflow.
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