import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vertexfacade.com"),
  title: "Drone Building Cleaning & Painting | Chandigarh • Delhi NCR — Vertex Facade Services",
  description: "Modern drone cleaning & painting for high-rise buildings. Save on lifts & labor — DGCA-compliant pilots, trained technicians, insurance & local permits. Free site survey.",
  keywords: "drone building cleaning, high-rise facade cleaning Chandigarh, drone painting services Delhi NCR, drone facade inspection India, drone maintenance services, DGCA compliant drone services",
  authors: [{ name: "Vertex Facade Services" }],
  creator: "Vertex Facade Services",
  publisher: "Vertex Aerial Systems",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vertexfacade.com",
    siteName: "Vertex Facade Services",
    title: "Drone Building Cleaning & Painting | Chandigarh • Delhi NCR",
    description: "Modern drone cleaning & painting for high-rise buildings. Save on lifts & labor — DGCA-compliant pilots, trained technicians, insurance & local permits.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Vertex Facade Services - Drone Building Cleaning & Painting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drone Building Cleaning & Painting | Chandigarh • Delhi NCR",
    description: "Modern drone cleaning & painting for high-rise buildings. Save on lifts & labor — DGCA-compliant pilots.",
    images: ["/og-image.webp"],
  },
  alternates: {
    canonical: "https://vertexfacade.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://vertexfacade.com/#organization",
      name: "Vertex Facade Services",
      url: "https://vertexfacade.com",
      logo: {
        "@type": "ImageObject",
        url: "https://vertexfacade.com/logo.webp",
      },
      parentOrganization: {
        "@type": "Organization",
        name: "Vertex Aerial Systems",
      },
      sameAs: [
        "https://facebook.com/vertexfacade",
        "https://linkedin.com/company/vertexfacade",
        "https://instagram.com/vertexfacade",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://vertexfacade.com/#localbusiness",
      name: "Vertex Facade Services",
      url: "https://vertexfacade.com",
      telephone: "+91-9876543210",
      email: "contact@vertexfacade.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "SCO 123, Sector 17",
        addressLocality: "Chandigarh",
        addressRegion: "Chandigarh",
        postalCode: "160017",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "30.7333",
        longitude: "76.7794",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
      areaServed: [
        { "@type": "City", name: "Chandigarh" },
        { "@type": "State", name: "Punjab" },
        { "@type": "State", name: "Haryana" },
        { "@type": "Place", name: "Delhi NCR" },
      ],
      priceRange: "₹₹₹",
    },
    {
      "@type": "Service",
      "@id": "https://vertexfacade.com/#service-cleaning",
      name: "Drone Building Cleaning",
      provider: { "@id": "https://vertexfacade.com/#organization" },
      description: "Professional drone-based exterior cleaning for high-rise buildings. No scaffolding required.",
      areaServed: ["Chandigarh", "Punjab", "Haryana", "Delhi NCR"],
    },
    {
      "@type": "Service",
      "@id": "https://vertexfacade.com/#service-painting",
      name: "Drone Facade Painting",
      provider: { "@id": "https://vertexfacade.com/#organization" },
      description: "Full facade painting services using specialized drone technology. Faster, safer, cost-effective.",
      areaServed: ["Chandigarh", "Punjab", "Haryana", "Delhi NCR"],
    },
    {
      "@type": "FAQPage",
      "@id": "https://vertexfacade.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Are drone painting operations safe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — flights are pilot-supervised, we maintain exclusion zones, use non-flammable paint formulations, and carry full liability insurance.",
          },
        },
        {
          "@type": "Question",
          name: "Do you need permission to fly in my area?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We handle Digital Sky filings and local permissions as part of every project. Our team manages all DGCA compliance requirements.",
          },
        },
        {
          "@type": "Question",
          name: "How much can I save compared to traditional methods?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Clients typically save up to 80% compared to traditional scaffolding and lift methods, with projects completing up to 4x faster.",
          },
        },
        {
          "@type": "Question",
          name: "What areas do you service?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We currently service Chandigarh, Panchkula, Mohali, and the wider Punjab, Haryana, and Delhi NCR regions.",
          },
        },
        {
          "@type": "Question",
          name: "What is included in the inspection report?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every project includes high-resolution before/after photos, thermal imaging where applicable, detailed condition assessment, and maintenance recommendations.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
