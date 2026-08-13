import Container from "../ui/Container";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-500 via-blue-500 to-blue-50">
      <Container>
        <div className="grid min-h-[85vh] items-center gap-12 py-20 lg:grid-cols-2">

          {/* Left Content */}
          <div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              🚀 Top Rated Plus | $100K+ Earned on Upwork
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-50 lg:text-6xl">
              Helping Businesses
              <span className="block text-black">
                Automate & Scale
              </span>
              Through Smart Digital Solutions
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-900">
              JD Info helps businesses streamline operations with web scraping,
              AI automation, Shopify solutions, WordPress development and
              custom workflows that save time and increase productivity.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="rounded-xl border-black bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700"
              >
                Get Free Consultation
              </Link>

              <Link
                href="/services"
                className="rounded-xl border bg-white px-8 py-4 font-semibold hover:bg-slate-100"
              >
                Our Services
              </Link>
              
            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <div className="grid w-full max-w-md grid-cols-2 gap-5">

              <StatCard number="139+" label="Clients" />
              <StatCard number="70%" label="Automation" />
              <StatCard number="12" label="Years of Experience" />
              <StatCard number="4.98★" label="Rating" />

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}

function StatCard({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-900 bg-green-600 p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <h2 className="text-3xl font-bold text-blue-100">
        {number}
      </h2>

      <p className="mt-2 text-slate-100">
        {label}
      </p>
    </div>
  );
}