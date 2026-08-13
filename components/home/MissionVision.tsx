import {
  ArrowRight,
  Lightbulb,
  Target,
} from "lucide-react";

const sections = [
  {
    icon: Target,
    label: "Our Mission",
    title: "Making Business Work Simpler",
    description:
      "Our mission is to help businesses reduce repetitive work, organize their operations and solve everyday challenges through practical technology, data and automation.",
  },
  {
    icon: Lightbulb,
    label: "Our Vision",
    title: "Building Smarter Digital Workflows",
    description:
      "Our vision is to become a trusted digital solutions partner for businesses worldwide by combining human expertise with modern technology to create smarter, more efficient workflows.",
  },
];

export default function MissionVision() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            What Drives Us
          </span>

          <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-bold text-slate-900 sm:text-5xl">
            Purpose Behind
            <span className="text-blue-600"> JD Info</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We believe technology should make business easier, not more
            complicated.
          </p>

        </div>

        {/* Mission / Vision */}
        <div className="mt-14 grid gap-7 lg:grid-cols-2">

          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <div
                key={section.label}
                className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:p-10"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={27} />
                </div>

                <p className="mt-7 text-sm font-semibold uppercase tracking-[0.15em] text-blue-600">
                  {section.label}
                </p>

                <h3 className="mt-3 font-[var(--font-heading)] text-2xl font-bold text-slate-900 sm:text-3xl">
                  {section.title}
                </h3>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  {section.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}