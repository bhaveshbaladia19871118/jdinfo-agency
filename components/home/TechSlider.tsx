"use client";

import Image from "next/image";
import Link from "next/link";

const technologies = [
  {
    name: "Shopify",
    logo: "/logos/shopify.png",
    href: "/services/shopify",
  },
  {
    name: "WordPress",
    logo: "/logos/wordpress.png",
    href: "/services/wordpress",
  },
  {
    name: "WooCommerce",
    logo: "/logos/woocommerce.png",
    href: "/services/wordpress",
  },
  {
    name: "Google",
    logo: "/logos/google.png",
    href: "/services",
  },
  {
    name: "Google Chrome",
    logo: "/logos/chrome.png",
    href: "/services",
  },
  {
    name: "Microsoft Office",
    logo: "/logos/office.png",
    href: "/services/data-processing",
  },
  {
    name: "Adobe Photoshop",
    logo: "/logos/photoshop.png",
    href: "/services/image-editing",
  },
  {
    name: "ChatGPT",
    logo: "/logos/chatgpt.png",
    href: "/services/ai-automation",
  },
  {
    name: "Midjourney",
    logo: "/logos/midjourney.png",
    href: "/services/ai-automation",
  },
  {
    name: "Octoparse",
    logo: "/logos/octoparse.png",
    href: "/services/web-scraping",
  },
  {
    name: "Python",
    logo: "/logos/python.png",
    href: "/services/automation",
  },
  {
    name: "Amazon",
    logo: "/logos/amazon.png",
    href: "/services/web-scraping",
  },
];

export default function TechSlider() {
  const items = [...technologies, ...technologies];

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-3xl font-bold">
          Technologies We Work With
        </h2>

        <p className="mt-3 text-center text-slate-500">
          Trusted tools powering our client projects
        </p>

        <div className="tech-slider mt-12">

          <div className="tech-track">

            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="tech-item"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={70}
                  height={70}
                  className="logo"
                />

                <span>{item.name}</span>

              </Link>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}