import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Bot,
  Workflow,
  Zap,
  Database,
  FileText,
  RefreshCw,
  Settings2,
  Clock3,
  BarChart3,
} from "lucide-react";

const capabilities = [
  {
    icon: Bot,
    title: "AI-Powered Workflows",
    description:
      "Use AI to assist with repetitive business tasks such as content processing, classification, summarization, and information handling.",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description:
      "Connect repetitive steps into structured workflows that reduce manual work and make everyday operations easier to manage.",
  },
  {
    icon: Database,
    title: "Data Processing Automation",
    description:
      "Automate repetitive data collection, transformation, cleaning, organization, and processing tasks.",
  },
  {
    icon: FileText,
    title: "Content & Document Processing",
    description:
      "Process documents, spreadsheets, product information, and other business content using efficient automated workflows.",
  },
  {
    icon: RefreshCw,
    title: "Repetitive Task Automation",
    description:
      "Identify time-consuming manual tasks and turn repeatable processes into more efficient workflows.",
  },
  {
    icon: Settings2,
    title: "Custom Automation",
    description:
      "Build workflows around your existing tools, processes, data sources, and specific business requirements.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Understand the Process",
    description:
      "We review how the task is currently performed and identify the repetitive steps, inputs, outputs, and decision points.",
  },
  {
    number: "02",
    title: "Identify Automation Opportunities",
    description:
      "We determine which parts of the workflow can be automated and where human review may still be useful.",
  },
  {
    number: "03",
    title: "Design the Workflow",
    description:
      "We structure the automation around your tools, data, business rules, and desired outcome.",
  },
  {
    number: "04",
    title: "Test & Refine",
    description:
      "The workflow is tested against real examples and adjusted to improve consistency and reliability.",
  },
  {
    number: "05",
    title: "Deploy & Improve",
    description:
      "Once the workflow is working as expected, it can become part of your regular business process.",
  },
];

const automationAreas = [
  "Data collection workflows",
  "AI-assisted data processing",
  "Product data processing",
  "Content generation workflows",
  "Document processing",
  "Spreadsheet automation",
  "Data cleaning & transformation",
  "Information classification",
  "Email & notification workflows",
  "Repetitive research tasks",
  "eCommerce workflows",
  "Custom business processes",
];

export default function AIAutomationPage() {
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
                  AI & Business Automation
                </span>


                <h1 className="mt-6 font-[var(--font-heading)] text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">

                  Make Repetitive Work
                  <span className="block text-blue-400">
                    Easier to Manage
                  </span>

                </h1>


                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  We help businesses turn repetitive manual processes into
                  structured workflows using AI, automation, and practical
                  digital tools.
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
                    Practical Automation
                  </div>


                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2
                      size={17}
                      className="text-blue-400"
                    />
                    AI-Assisted Workflows
                  </div>


                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2
                      size={17}
                      className="text-blue-400"
                    />
                    Custom Processes
                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                RIGHT — IMAGE
            ================================================== */}

            <div className="relative min-h-[500px] overflow-hidden lg:min-h-[650px]">

              <Image
                src="/images/services/ai-automation.jpg"
                alt="AI and business automation"
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

              Practical AI & Automation
              <span className="text-blue-600">
                {" "}for Everyday Business Tasks
              </span>

            </h2>


            <p className="mt-5 text-lg leading-8 text-slate-600">
              Not every business needs a complicated AI system. Sometimes
              the biggest improvement comes from automating a repetitive
              task that your team performs every day.
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
              Our Approach
            </span>


            <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-bold text-slate-900 sm:text-5xl">

              From Manual Task
              <span className="text-blue-600">
                {" "}to Smarter Workflow
              </span>

            </h2>


            <p className="mt-5 text-lg leading-8 text-slate-600">
              We start with the process, not the technology. The goal is
              to create automation that actually fits the way your
              business works.
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
          AUTOMATION AREAS
      ====================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            {/* Left */}
            <div>

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Automation Opportunities
              </span>


              <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-bold text-slate-900 sm:text-5xl">

                What Can We
                <span className="text-blue-600">
                  {" "}Automate?
                </span>

              </h2>


              <p className="mt-5 text-lg leading-8 text-slate-600">
                Automation opportunities can be found across data,
                research, eCommerce, content, documents, and many
                other repetitive business processes.
              </p>


              <Link
                href="/contact"
                className="mt-8 inline-flex items-center font-semibold text-blue-600 transition hover:text-blue-700"
              >
                Tell Us About Your Workflow
                <ArrowRight size={18} className="ml-2" />
              </Link>

            </div>


            {/* Right */}
            <div className="grid gap-3 sm:grid-cols-2">

              {automationAreas.map((item) => (

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
          FEATURED AUTOMATION
      ====================================================== */}

      <section className="bg-slate-950 py-24 text-white">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Image */}

            <div className="relative min-h-[400px] overflow-hidden rounded-3xl">

              <Image
                src="/images/services/ai-automation-workflow.jpg"
                alt="Business automation workflow"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

            </div>


            {/* Content */}

            <div>

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Smarter Workflows
              </span>


              <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-bold sm:text-5xl">

                Reduce Repetitive Work
                <span className="text-blue-400">
                  {" "}Without Losing Control
                </span>

              </h2>


              <p className="mt-5 text-lg leading-8 text-slate-300">
                The goal isn&lsquo;t to remove people from the process. It&lsquo;s
                to reduce unnecessary manual steps and allow your team
                to spend more time on work that actually requires
                human judgment.
              </p>


              <div className="mt-7 space-y-4">

                <div className="flex items-start gap-3">

                  <Clock3
                    size={20}
                    className="mt-1 shrink-0 text-blue-400"
                  />

                  <div>

                    <h3 className="font-semibold">
                      Save Time
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      Reduce repetitive steps that consume valuable
                      working hours.
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
                      Repeat structured tasks using a defined workflow
                      instead of starting from scratch every time.
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
                      Scale Repetitive Work
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      Handle growing volumes without simply adding
                      more manual steps.
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

              Automation That Starts
              <span className="text-blue-600">
                {" "}With Your Business
              </span>

            </h2>


            <p className="mt-5 text-lg leading-8 text-slate-600">
              We focus on solving the actual workflow problem instead of
              adding technology simply because it is available.
            </p>

          </div>


          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-slate-200 p-7">

              <Workflow
                size={25}
                className="text-blue-600"
              />

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Process First
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                We understand the existing workflow before deciding
                what should be automated.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 p-7">

              <Bot
                size={25}
                className="text-blue-600"
              />

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Practical AI
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                AI is used where it can provide a meaningful advantage
                to the workflow.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 p-7">

              <Settings2
                size={25}
                className="text-blue-600"
              />

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Custom Approach
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Workflows are adapted to your tools, requirements,
                and business processes.
              </p>

            </div>


            <div className="rounded-2xl border border-slate-200 p-7">

              <Zap
                size={25}
                className="text-blue-600"
              />

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Efficiency Focus
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                The objective is simple: make repetitive work easier
                and more manageable.
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
            Have a Repetitive Business Process?
          </h2>


          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Tell us what your team is doing manually today. We can
            help identify opportunities to simplify the workflow with
            AI and automation.
          </p>


          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-600 shadow-lg transition hover:bg-slate-100"
          >
            Discuss Your Workflow
            <ArrowRight size={18} className="ml-2" />
          </Link>

        </div>

      </section>

    </main>
  );
}