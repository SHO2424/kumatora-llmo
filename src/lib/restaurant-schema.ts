import { SITE_URL } from "@/lib/site";

export const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "中国料理 熊虎",
  alternateName: ["熊虎", "くまとら", "クマトラ", "kuma tora"],
  description:
    "茅場町駅徒歩3分。接待・会食に使える上質な中国料理店。清潔感のある落ち着いた店内で、名物の本格四川麻婆豆腐をはじめ、ディナーコースや特別メニューの相談が可能。",
  url: SITE_URL,
  image: [
    `${SITE_URL}/images/storefront.webp`,
    `${SITE_URL}/images/麻婆豆腐.webp`,
  ],
  servesCuisine: ["Chinese", "中華料理", "四川料理", "広東料理", "飲茶", "点心"],
  priceRange: "¥¥¥",
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
    "https://r.gnavi.co.jp/bh51m0eu0000/",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "3.25",
    reviewCount: "37",
    bestRating: "5",
    worstRating: "1",
  },
  hasMenu: {
    "@type": "Menu",
    name: "おすすめメニュー",
    hasMenuSection: {
      "@type": "MenuSection",
      name: "看板料理",
      hasMenuItem: [
        {
          "@type": "MenuItem",
          name: "名物：本格四川麻婆豆腐",
          description:
            "3種の豆板醤をブレンドした本格四川麻婆豆腐。花椒の香り、辛さの奥にあるコク、専用ラー油の余韻が印象的な看板料理。",
        },
        {
          "@type": "MenuItem",
          name: "黒酢酢豚",
          description:
            "揚げたての豚肉に、黒酢の酸味と甘みが絡む中国料理の定番。",
        },
        {
          "@type": "MenuItem",
          name: "海鮮チャーハン",
          description:
            "海老やイカなどの海鮮の旨みをご飯全体に行き渡らせた、香ばしいチャーハン。",
        },
      ],
    },
  },
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "MenuItem",
      name: "接待・会食向け特別コース",
      description:
        "名物料理を含むディナーコース形式で相談可能。料理内容、品数、構成は予約時にご確認ください。",
    },
    availabilityStarts: "17:30",
    availabilityEnds: "21:00",
  },
} as const;
