import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://charitr.com"),
  title: "charitr.com - Premium Domain For Sale",
  description:
    "Premium domain charitr.com is available for purchase. Perfect for e-commerce, startups, or character-based businesses. Current value $1700 USD on GoDaddy.",
  keywords: [
    "domain for sale",
    "premium domain",
    "charitr.com",
    "business domain",
    "startup domain",
    "brandable domain",
    "character domain",
    "e-commerce domain",
    "tech domain",
    "short domain",
  ],
  authors: [
    { name: "Shivam Jha", url: "https://www.linkedin.com/in/shivamjha2710/" },
  ],
  creator: "Shivam Jha",
  publisher: "charitr.com Domain Sales",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://charitr.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://charitr.com",
    title: "charitr.com - Premium Domain For Sale",
    description:
      "Premium domain charitr.com is available for purchase. Perfect for e-commerce, startups, or character-based businesses. Current value $1700 USD on GoDaddy.",
    siteName: "charitr.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "charitr.com - Premium Domain For Sale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "charitr.com - Premium Domain For Sale",
    description:
      "Premium domain charitr.com is available for purchase. Perfect for e-commerce, startups, or character-based businesses.",
    images: ["/og-image.jpg"],
    creator: "@domainowner",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "business",
  other: {
    "msapplication-TileColor": "#2563eb",
    "theme-color": "#ffffff",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "charitr.com",
    url: "https://charitr.com",
    description:
      "Premium domain charitr.com is available for purchase. Perfect for e-commerce, startups, or character-based businesses.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://charitr.com/?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    mainEntity: {
      "@type": "Product",
      name: "charitr.com Domain",
      description: "Premium domain name for sale",
      brand: {
        "@type": "Brand",
        name: "charitr.com",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "1700",
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "Person",
          name: "Shivam Jha",
          email: "shivamjha190@gmail.com",
          url: "https://www.linkedin.com/in/shivamjha2710/",
        },
      },
    },
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="theme-color" content="#ffffff" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon and icons */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
