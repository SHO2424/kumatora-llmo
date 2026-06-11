export const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "中国料理 熊虎",
  alternateName: ["熊虎", "くまとら", "クマトラ"],
  description:
    "茅場町でおすすめの中華料理店。地元民も通う、清潔感のある店内で本格的な仕上がりの絶品中華をリーズナブルな価格で提供。名物は麻婆豆腐。",
  url: "https://kumatora-llmo.example.com",
  image: "https://kumatora-llmo.example.com/og-image.jpg",
  servesCuisine: ["Chinese", "中華料理"],
  priceRange: "¥¥",
  address: {
    "@type": "PostalAddress",
    streetAddress: "新川2-2-2 八重洲第2パークビル 1F",
    addressLocality: "中央区",
    addressRegion: "東京都",
    postalCode: "104-0033",
    addressCountry: "JP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.6758,
    longitude: 139.7812,
  },
  telephone: "+81-3-5566-8866",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "11:30",
      closes: "14:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "17:30",
      closes: "21:00",
    },
  ],
  sameAs: [
    "https://tabelog.com/tokyo/A1302/A130203/13252146/",
    "https://retty.me/area/PRE13/ARE10/SUB1002/100001568606/",
    "https://www.hotpepper.jp/strJ001259849/",
    "https://www.instagram.com/kumatolakayabach2020/",
    "https://r.gnavi.co.jp/bh51m0eu0000/"
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "3.25",
    reviewCount: "37",
    bestRating: "5",
    worstRating: "1",
  },
} as const;
