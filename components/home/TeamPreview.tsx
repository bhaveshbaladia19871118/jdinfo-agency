import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Pratik Desai",
    position: "Founder & Digital Solutions Specialist",
    email: "hello@jdinfo.com",
    image: "/images/team/pratik.jpg",
  },
  {
    name: "Team Member 2",
    position: "Data & Web Scraping Specialist",
    email: "team@jdinfo.com",
    image: "/images/team/member-2.jpg",
  },
  {
    name: "Team Member 3",
    position: "eCommerce & WordPress Specialist",
    email: "team@jdinfo.com",
    image: "/images/team/member-3.jpg",
  },
];

export default function TeamPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Our Team
          </span>

          <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-bold text-slate-900 sm:text-5xl">
            Meet the People
            <span className="text-blue-600"> Behind JD Info</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            A team of skilled professionals working together to deliver
            reliable digital solutions for our clients.
          </p>
        </div>

        {/* Team Members */}
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

        {/* Button */}
        <div className="mt-12 text-center">
          <Link
            href="/team"
            className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
          >
            Meet Our Full Team
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>

      </div>
    </section>
  );
}