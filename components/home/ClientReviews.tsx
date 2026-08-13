"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  Maximize2,
  Star,
  X,
} from "lucide-react";

const reviews = [
  {
    title: "Find images and coordinates for travel destinations - LT",
    rating: "5.0",
    review:
      "great service. accurate and on time. will sure hire again in the future.",
    tags: [
      "Reliable",
      "Detail Oriented",
    ],
    image: "/images/reviews/find-images-and-coordinates-for-travel-destinations.jpg",
    caseStudy: "/case-studies/bulk-image-processing",
  },
  {
    title: "Data Mining Specialist for Church Websites",
    rating: "5.0",
    review:
      "Great attention to detail. Works very fast. Would hire again. Rock star.",
    tags: [
      "Committed to Quality",
      "Detail Oriented",
      "Accountable for Outcomes",
    ],
    image: "/images/reviews/data-mining-specialist-for-church-websites.jpg",
    caseStudy: "/case-studies/web-scraping",
  },
  {
    title: "Wordpress administrator | Product Pages Editing",
    rating: "5.0",
    review:
      "great service. accurate and on time. will sure hire again in the future.",
    tags: [
      "Solution Oriented",
      "Clear Communicator",
    ],
    image: "/images/reviews/wordpress-administrator-product-pages-editing.jpg",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={17}
          fill="currentColor"
          className="text-orange-500"
        />
      ))}

      <span className="ml-2 text-sm font-semibold text-slate-700">
        5.0
      </span>
    </div>
  );
}

export default function ClientReviews() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Client Reviews
            </span>

            <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-bold text-slate-900 sm:text-5xl">
              What Our Clients
              <span className="text-blue-600"> Say</span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Real feedback from clients we&apos;ve worked with through Upwork.
            </p>

          </div>

          {/* Rating Summary */}
          <div className="mx-auto mt-10 flex w-fit items-center gap-6 rounded-2xl border border-slate-200 bg-white px-7 py-4 shadow-sm">

            <div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-slate-900">
                  4.98
                </span>

                <span className="text-lg text-slate-400">
                  /5
                </span>
              </div>

              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                Upwork Rating
              </p>
            </div>

            <div className="h-10 w-px bg-slate-200" />

            <div>
              <p className="text-3xl font-bold text-slate-900">
                130+
              </p>

              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                Projects
              </p>
            </div>

          </div>

          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-2xl border border-blue-100 bg-blue-50 px-6 py-4 text-center">

  <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
    <span className="relative flex h-3 w-3">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
    </span>

    Currently working with clients
  </span>

  <span className="hidden h-5 w-px bg-blue-200 sm:block" />

  <span className="text-sm text-slate-500">
    Data • Shopify • WordPress • Image Processing • Automation
  </span>

</div>

          {/* Review Cards */}
          <div className="mt-14 -mx-6 overflow-x-auto px-6 pb-6 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10">

            <div className="flex w-max gap-6">

              {reviews.map((review) => (
                <article
                  key={review.title}
                  className="group w-[330px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[380px]"
                >

                  {/* Screenshot */}
                  <button
                    type="button"
                    onClick={() => setSelectedImage(review.image)}
                    className="relative block h-52 w-full overflow-hidden bg-slate-100 text-left"
                    aria-label={`View ${review.title} Upwork review`}
                  >

                    <Image
                      src={review.image}
                      alt={`Upwork review for ${review.title}`}
                      fill
                      sizes="380px"
                      className="object-cover object-top transition duration-500 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 transition duration-300 group-hover:bg-slate-950/40">

                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-800 opacity-0 shadow-lg transition duration-300 group-hover:opacity-100">
                        <Maximize2 size={19} />
                      </div>

                    </div>

                  </button>

                  {/* Content */}
                  <div className="p-6">

                    {/* Rating */}
                    <Stars />

                    {/* Project */}
                    <h3 className="mt-5 font-[var(--font-heading)] text-xl font-bold leading-snug text-slate-900">
                      {review.title}
                    </h3>

                    {/* Review */}
                    <blockquote className="mt-4 text-[15px] italic leading-7 text-slate-600">
                      &quot;{review.review}&quot;
                    </blockquote>

                    {/* Tags */}
                    <div className="mt-5 flex flex-wrap gap-2">

                      {review.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                        >
                          ✓ {tag}
                        </span>
                      ))}

                    </div>

                    {/* Source */}
                    <div className="mt-6 border-t border-slate-100 pt-5">
                      <div className="flex items-center justify-between gap-3">

                        <div>
                          <p className="text-xs text-slate-400">
                            Client review on
                          </p>

                          <p className="mt-1 text-sm font-semibold text-slate-700">
                            Upwork
                          </p>
                        </div>

                        {review.caseStudy && (
                          <Link
                            href={review.caseStudy}
                            onClick={(event) => event.stopPropagation()}
                            className="inline-flex items-center rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                          >
                            View Case Study
                            <ArrowRight size={14} className="ml-1.5" />
                          </Link>
                        )}

                      </div>
                    </div>

                  </div>

                </article>
              ))}

            </div>

          </div>

          {/* CTA */}
          <div className="mt-8 text-center">

            <Link
              href="YOUR_UPWORK_PROFILE_URL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-semibold text-blue-600 transition hover:text-blue-700"
            >
              View More Reviews on Upwork
              <ExternalLink size={16} className="ml-2" />
            </Link>

          </div>

        </div>
      </section>

      {/* =====================================================
          SCREENSHOT MODAL
      ====================================================== */}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >

          {/* Close */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg transition hover:bg-slate-100"
            aria-label="Close review"
          >
            <X size={22} />
          </button>

          {/* Image */}
          <div
            className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >

            <Image
              src={selectedImage}
              alt="Upwork client review"
              width={1400}
              height={1000}
              className="max-h-[90vh] w-auto object-contain"
            />

          </div>

        </div>
      )}
    </>
  );
}