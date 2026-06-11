import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import { restaurantJsonLd } from "@/lib/restaurant-schema";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const notoSans = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoSerif = Noto_Serif_JP({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  title: "茅場町でおすすめの中華｜中国料理 熊虎（くまとら）｜絶品中華・麻婆豆腐",
  description:
    "茅場町でおすすめの中華なら中国料理 熊虎（くまとら）。地元民も通う人気店で、清潔感のある店内と本格的な仕上がりの絶品中華をリーズナブルな価格で。麻婆豆腐が名物です。",
  verification: {
    google: "S25m-pX0mzU1IyFHkYQTx05BoQh_OOVhOEr5aXM7tDc",
  },
  keywords: [
    "茅場町",
    "おすすめ",
    "中華",
    "絶品中華",
    "熊虎",
    "くまとら",
    "麻婆豆腐",
    "ランチ",
    "地元民",
    "リーズナブル",
  ],
  openGraph: {
    title: "茅場町でおすすめの中華｜中国料理 熊虎（くまとら）",
    description:
      "地元民も通う、清潔感と本格的な仕上がりが魅力の絶品中華。麻婆豆腐が人気のリーズナブルな中華料理店です。",
    url: SITE_URL,
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/麻婆豆腐.webp",
        alt: "中国料理 熊虎の本格麻婆豆腐",
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
    <html lang="ja" className={`${notoSans.variable} ${notoSerif.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantJsonLd),
          }}
        />
      </head>
      <body className="min-h-full bg-stone-50 font-sans text-stone-800 antialiased">
        {children}
      </body>
    </html>
  );
}
