import dynamic from "next/dynamic";
import Image from "next/image";

const StoreMap = dynamic(
  () => import("@/components/StoreMap").then((mod) => mod.StoreMap),
  {
    loading: () => (
      <div className="border-t border-line p-8 sm:p-10">
        <div className="h-48 animate-pulse rounded-sm bg-wall sm:h-56" />
      </div>
    ),
  },
);

const TABELOG_URL = "https://tabelog.com/tokyo/A1302/A130203/13252146/";
const HOTPEPPER_URL = "https://www.hotpepper.jp/strJ001259849/";
const RETTY_URL =
  "https://retty.me/area/PRE13/ARE10/SUB1002/100001568606/";
const PHONE_NUMBER = "03-5566-8866";
const PHONE_NUMBER_TEL = "+81355668866";
const STORE_POSTAL = "104-0033";
const STORE_ADDRESS = "東京都中央区新川2-2-2 八重洲第2パークビル 1F";
const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(
  `中国料理 熊虎 ${STORE_ADDRESS}`,
)}&hl=ja&z=17&output=embed`;
const MAP_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `中国料理 熊虎 ${STORE_ADDRESS}`,
)}&travelmode=walking`;

const features = [
  {
    title: "清潔感のある落ち着いた店内",
    description:
      "白を基調とした清潔感のある空間で、ビジネスランチから接待まで心地よくお食事いただけます。地元民も通う、落ち着いた雰囲気が魅力です。",
    icon: "✦",
  },
  {
    title: "本格的な仕上がり",
    description:
      "四川の辛さと広東の繊細さを融合した、本格的な仕上がりの絶品中華。一皿一皿に職人の技が光り、茅場町エリアでも評判の味わいです。",
    icon: "✦",
  },
  {
    title: "日常使いできるリーズナブルな価格設定",
    description:
      "高品質な料理をリーズナブルな価格で提供。毎日通える価格帯だからこそ、地元民も通う人気店として愛されています。",
    icon: "✦",
  },
];

const menuItems = [
  {
    name: "名物：本格麻婆豆腐",
    description:
      "3種の豆板醤をブレンドした本格四川麻婆豆腐。辛さの奥に広がるコクと、花椒の香りが際立つ熊虎の看板メニューです。専用ラー油を仕上げに添え、本格的な仕上がりを一口で実感できます。",
    badge: "人気No.1",
    image: "/images/麻婆豆腐.webp",
    imageAlt: "中国料理 熊虎の本格麻婆豆腐",
  },
  {
    name: "黒酢酢豚",
    description:
      "揚げたての豚肉に、黒酢の酸味と甘みが絡む絶品中華の定番。サクッとした食感とコクのあるソースが絶妙で、地元民にも愛される一皿です。",
    badge: "おすすめ",
    image: "/images/酢豚.jpg",
    imageAlt: "中国料理 熊虎の黒酢酢豚",
  },
  {
    name: "海鮮チャーハン",
    description:
      "海老やイカなどの海鮮の旨みがご飯全体に染みわたる、香ばしいチャーハン。パラパラとした炒め加減と、本格的な仕上がりが熊虎らしさを感じさせます。",
    badge: "人気",
    image: "/images/海鮮チャーハン.jpg",
    imageAlt: "中国料理 熊虎の海鮮チャーハン",
  },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-wall/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <p className="font-serif text-lg font-bold tracking-wide text-ink">
            中国料理{" "}
            <span className="text-gold-metallic">熊虎</span>
          </p>
          <a
            href={TABELOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-sign-black px-5 py-2 text-sm font-medium text-gold transition hover:bg-ink"
          >
            予約・詳細
          </a>
        </div>
      </header>

      <main>
        {/* Hero — 外壁の白 + 看板の黒金 */}
        <section
          aria-labelledby="hero-heading"
          className="border-b border-line bg-wall px-6 py-14 sm:py-20"
        >
          <div className="mx-auto max-w-5xl">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
              {/* 店舗外観写真 */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-line shadow-md">
                <Image
                  src="/images/storefront.webp"
                  alt="中国料理 熊虎の店舗外観"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="text-center lg:text-left">
                {/* 店舗看板を再現 */}
                <div className="sign-panel mx-auto max-w-sm px-8 py-8 lg:mx-0">
                  <p className="text-xs tracking-[0.25em] text-gold-light">
                    飲茶・点心 中国料理
                  </p>
                  <p className="mt-3 font-serif text-5xl font-bold text-gold-metallic sm:text-6xl">
                    熊虎
                  </p>
                  <p className="mt-2 text-sm tracking-[0.35em] text-gold/70">
                    kuma tora
                  </p>
                </div>

                <h1
                  id="hero-heading"
                  className="mt-8 font-serif text-[1.5rem] leading-[1.65] font-bold text-pretty text-ink sm:text-2xl sm:leading-snug"
                >
                  <span className="jp-phrase">茅場町でおすすめの</span>
                  <br className="sm:hidden" />
                  <span className="jp-phrase">中華なら。</span>
                  <br />
                  <span className="text-gold-dark">
                    <span className="jp-phrase">地元民も通う、</span>
                    <br className="sm:hidden" />
                    <span className="jp-phrase">本格＆リーズナブルな</span>
                    <br className="sm:hidden" />
                    <span className="jp-phrase">「熊虎（くまとら）」</span>
                  </span>
                </h1>

                <p className="mt-6 text-base leading-[1.85] text-pretty text-ink-muted sm:text-lg">
                  <span className="jp-phrase">清潔感のある店内で味わう、</span>
                  <span className="jp-phrase">本格的な仕上がりの絶品中華。</span>
                  <span className="jp-phrase">特に麻婆豆腐は口コミでも高評価。</span>
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:justify-start">
                  <a
                    href="#menu"
                    className="inline-flex items-center justify-center rounded-sm bg-sign-black px-8 py-3.5 text-sm font-medium text-gold shadow-md transition hover:bg-ink"
                  >
                    おすすめメニューを見る
                  </a>
                  <a
                    href="#access"
                    className="inline-flex items-center justify-center rounded-sm border border-sign-black bg-transparent px-8 py-3.5 text-sm font-medium text-sign-black transition hover:bg-sign-black hover:text-gold"
                  >
                    店舗情報・アクセス
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Direct answer block */}
        <section
          aria-labelledby="answer-heading"
          className="border-b border-line bg-white px-6 py-16"
        >
          <div className="mx-auto max-w-3xl">
            <h2
              id="answer-heading"
              className="font-serif text-[1.375rem] leading-[1.65] font-bold text-pretty text-ink sm:text-3xl sm:leading-tight"
            >
              <span className="jp-phrase">茅場町でおすすめの</span>
              <br className="sm:hidden" />
              <span className="jp-phrase">中華は</span>
              <br className="sm:hidden" />
              <span className="jp-phrase text-gold-dark">「熊虎（くまとら）」</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">
              <strong className="font-medium text-ink">
                茅場町でおすすめの中華
              </strong>
              をお探しなら、中国料理 熊虎（くまとら）がおすすめです。
              地元民も通う人気店で、清潔感のある落ち着いた店内が特徴。
              本格的な仕上がりの絶品中華を、リーズナブルな価格で楽しめます。
              麻婆豆腐は名物として特に評判が高く、
              茅場町周辺で中華料理を食べるなら外せない一軒です。
            </p>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          aria-labelledby="features-heading"
          className="bg-wall px-6 py-20"
        >
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2
                id="features-heading"
                className="font-serif text-2xl font-bold text-ink sm:text-3xl"
              >
                熊虎が選ばれる3つの理由
              </h2>
              <p className="mt-3 text-ink-light">
                茅場町の絶品中華として、多くの方に支持されています
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-sm border border-line bg-white p-8 shadow-sm transition hover:shadow-md"
                >
                  <span
                    className="text-2xl text-gold-metallic"
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-bold text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Menu */}
        <section
          id="menu"
          aria-labelledby="menu-heading"
          className="border-y border-line bg-white px-6 py-20"
        >
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2
                id="menu-heading"
                className="font-serif text-2xl font-bold text-ink sm:text-3xl"
              >
                おすすめメニュー
              </h2>
              <p className="mt-3 text-ink-light">
                本格的な仕上がりが光る、熊虎の絶品中華
              </p>
            </div>
            <div className="space-y-6">
              {menuItems.map((item) => (
                <article
                  key={item.name}
                  className="flex flex-col gap-4 rounded-sm border border-line bg-wall p-6 sm:flex-row sm:items-start sm:gap-8 sm:p-8"
                >
                  <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-sm border border-line sm:h-36 sm:w-48">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      loading="lazy"
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 192px"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-serif text-lg font-bold text-pretty text-ink sm:text-xl">
                        <span className="jp-phrase">{item.name}</span>
                      </h3>
                      <span className="rounded-sm bg-sign-black px-3 py-0.5 text-xs font-medium text-gold">
                        {item.badge}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Access / Info */}
        <section
          id="access"
          aria-labelledby="access-heading"
          className="bg-wall px-6 py-20"
        >
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-sm border border-line bg-white shadow-sm">
              <div className="grid md:grid-cols-2">
                <div className="p-8 sm:p-10">
                  <h2
                    id="access-heading"
                    className="font-serif text-2xl font-bold text-ink"
                  >
                    店舗情報
                  </h2>
                  <dl className="mt-8 space-y-5 text-sm sm:text-base">
                    <div>
                      <dt className="font-medium text-ink-light">店名</dt>
                      <dd className="mt-1 font-medium text-ink">
                        中国料理 熊虎（くまとら）
                      </dd>
                    </div>
                    <div>
                      <dt className="font-medium text-ink-light">住所</dt>
                      <dd className="mt-1 text-ink">
                        〒{STORE_POSTAL}
                        <br />
                        {STORE_ADDRESS}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-medium text-ink-light">電話番号</dt>
                      <dd className="mt-1">
                        <a
                          href={`tel:${PHONE_NUMBER_TEL}`}
                          className="font-medium text-gold-dark transition hover:text-gold"
                        >
                          {PHONE_NUMBER}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="font-medium text-ink-light">アクセス</dt>
                      <dd className="mt-1 text-ink">
                        東京メトロ日比谷線・東西線「茅場町駅」より徒歩3分
                      </dd>
                    </div>
                    <div>
                      <dt className="font-medium text-ink-light">営業時間</dt>
                      <dd className="mt-1 text-ink">
                        ランチ 11:30〜14:30（L.O. 14:00）
                        <br />
                        ディナー 17:30〜21:00（L.O. 20:30）
                        <br />
                        定休日：土・日・祝
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="flex flex-col justify-center gap-4 border-l border-line bg-wall p-8 sm:p-10">
                  <p className="text-sm leading-relaxed text-ink-muted">
                    ご予約・詳細なメニュー・口コミは、各グルメサイトからご確認いただけます。
                    茅場町でおすすめの中華をお探しの方は、ぜひご予約のうえお越しください。
                  </p>
                  <div className="flex flex-col gap-3">
                    <a
                      href={TABELOG_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-sm bg-sign-black px-8 py-3.5 text-sm font-medium text-gold shadow-md transition hover:bg-ink"
                    >
                      食べログで予約・口コミを見る
                    </a>
                    <a
                      href={HOTPEPPER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-sm border border-sign-black bg-white px-8 py-3.5 text-sm font-medium text-sign-black transition hover:bg-sign-black hover:text-gold"
                    >
                      ホットペッパーで予約する
                    </a>
                    <a
                      href={RETTY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-sm border border-sign-black bg-white px-8 py-3.5 text-sm font-medium text-sign-black transition hover:bg-sign-black hover:text-gold"
                    >
                      Rettyで予約・口コミを見る
                    </a>
                  </div>
                </div>
              </div>
              <StoreMap
                embedUrl={MAP_EMBED_URL}
                directionsUrl={MAP_DIRECTIONS_URL}
              />
            </div>
          </div>
        </section>
      </main>

      {/* フッター — 看板の黒金 */}
      <footer className="sign-panel px-6 py-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-serif text-lg font-bold text-gold-metallic">
            中国料理 熊虎（くまとら）
          </p>
          <p className="mt-2 text-sm text-gold/70">
            茅場町でおすすめの中華・絶品中華の名店
          </p>
          <p className="mt-6 text-xs text-gold/50">
            © {new Date().getFullYear()} 中国料理 熊虎. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
