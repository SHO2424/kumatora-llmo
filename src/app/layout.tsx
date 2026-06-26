import type { Metadata } from "next";
import { faqJsonLd } from "@/lib/faq-schema";
import { restaurantJsonLd } from "@/lib/restaurant-schema";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  title:
    "茅場町 接待・会食の中国料理｜中国料理 熊虎（くまとら）｜ディナーコース・麻婆豆腐",
  description:
    "茅場町駅徒歩3分。接待・会食に使える上質な中国料理 熊虎（くまとら）。落ち着いた空間で名物の本格四川麻婆豆腐とディナーコースを。ビジネスランチ・少人数の会食にも。",
  verification: {
    google: "S25m-pX0mzU1IyFHkYQTx05BoQh_OOVhOEr5aXM7tDc",
  },
  keywords: [
    "茅場町",
    "接待",
    "会食",
    "中国料理",
    "中華",
    "熊虎",
    "くまとら",
    "麻婆豆腐",
    "ディナーコース",
    "ビジネスランチ",
    "本格中華",
  ],
  openGraph: {
    title: "茅場町 接待・会食の中国料理｜中国料理 熊虎（くまとら）",
    description:
      "落ち着いた空間で、名物料理とディナーコースを楽しめる中国料理 熊虎。茅場町駅徒歩3分。",
    url: SITE_URL,
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/storefront.webp",
        alt: "中国料理 熊虎の店舗外観",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />
      </head>
      <body className="min-h-full bg-wall font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
