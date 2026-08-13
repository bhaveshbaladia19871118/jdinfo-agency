import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Pratik Desai",
    position: "Founder & Digital Solutions Specialist",
    email: "hello@jdinfo.com",
    image: "/images/team/pratik.jpg",
  },

  {
    name: "Tejal Desai",
    position: "Co-Founder & Operations Specialist",
    email: "team@jdinfo.com",
    image: "/images/team/tejal.jpg",
  },

  {
    name: "Amisha Rana",
    position: "eCommerce & WordPress Specialist",
    email: "team@jdinfo.com",
    image: "/images/team/amisha.jpg",
  },
  {
    name: "Mahek Shaikh",
    position: "Data Mining & Web Research Specialist",
    email: "team@jdinfo.com",
    image: "/images/team/mahek.jpg",
  },
  {
    name: "Devang Modi",
    position: "AI Image and Video Specialist",
    email: "team@jdinfo.com",
    image: "/images/team/devang.jpg",
  },
];

export default function TeamPage() {
  return (
    <main className="bg-slate-50">

      {/* Hero */}
      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Our Team
            </span>

            <h1 className="mt-5 font-[var(--font-heading)] text-4xl font-bold sm:text-5xl lg:text-6xl">
              Meet the People
              <span className="block text-blue-400">
                Behind JD Info
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Our team combines technical expertise, creativity and
              practical business experience to help clients get things done.
            </p>

          </div>

        </div>
      </section>

      {/* Team Members */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                {/* Photo */}
                <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="112px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Name */}
                <h3 className="mt-4 font-[var(--font-heading)] text-base font-bold text-slate-900">
                  {member.name}
                </h3>

                {/* Position */}
                <p className="mt-1 text-xs font-semibold leading-5 text-blue-600">
                  {member.position}
                </p>

                {/* Email */}
                <a
                  href={`mailto:${member.email}`}
                  className="mx-auto mt-3 inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                >
                  <Mail size={13} />
                  Email
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back / CTA */}
      <section className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">

          <h2 className="font-[var(--font-heading)] text-3xl font-bold text-slate-900">
            Want to work with us?
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Tell us about your project and let&apos;s find the right solution
            for your business.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-4">

            <Link
              href="/contact"
              className="rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
            >
              Start a Project
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center rounded-xl border border-slate-300 px-7 py-3.5 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              <ArrowLeft size={17} className="mr-2" />
              About JD Info
            </Link>

          </div>

        </div>
      </section>

    </main>
  );}