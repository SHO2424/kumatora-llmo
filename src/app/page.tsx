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

const btnPrimary =
  "inline-flex items-center justify-center rounded-sm bg-sign-black px-6 py-3 text-sm font-medium text-gold shadow-md transition hover:bg-ink";
const btnSecondary =
  "inline-flex items-center justify-center rounded-sm border border-sign-black bg-transparent px-6 py-3 text-sm font-medium text-sign-black transition hover:bg-sign-black hover:text-gold";
const btnOutline =
  "inline-flex items-center justify-center rounded-sm border border-sign-black bg-white px-6 py-3 text-sm font-medium text-sign-black transition hover:bg-sign-black hover:text-gold";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-wall/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-4">
          <p className="font-serif text-lg font-bold tracking-wide text-ink">
            中国料理{" "}
            <span className="text-gold-metallic">熊虎</span>
          </p>
          <nav
            aria-label="予約ナビゲーション"
            className="flex flex-wrap items-center gap-2"
          >
            <a href="#dinner-course" className={btnSecondary}>
              ディナーコースを予約
            </a>
            <a href="#reservation" className={btnSecondary}>
              接待利用を相談
            </a>
            <a href={`tel:${PHONE_NUMBER_TEL}`} className={btnPrimary}>
              電話で予約
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section
          aria-labelledby="hero-heading"
          className="border-b border-line bg-wall px-6 py-14 sm:py-20"
        >
          <div className="mx-auto max-w-5xl">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
              <figure className="relative aspect-[4/3] overflow-hidden rounded-sm border border-line shadow-md">
                <Image
                  src="/images/storefront.webp"
                  alt="中国料理 熊虎の店舗外観"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </figure>

              <div className="text-center lg:text-left">
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
                  className="mt-8 font-serif text-[1.375rem] leading-[1.65] font-bold text-pretty text-ink sm:text-2xl sm:leading-snug"
                >
                  <span className="jp-phrase">
                    茅場町で接待・会食に使える
                  </span>
                  <br className="sm:hidden" />
                  <span className="jp-phrase">上質な中国料理なら。</span>
                  <br />
                  <span className="text-gold-dark">
                    <span className="jp-phrase">
                      落ち着いた空間で、名物料理と
                    </span>
                    <br className="sm:hidden" />
                    <span className="jp-phrase">ディナーコースを</span>
                    <br className="sm:hidden" />
                    <span className="jp-phrase">
                      楽しめる「中国料理 熊虎（くまとら）」
                    </span>
                  </span>
                </h1>

                <p className="mt-6 text-base leading-[1.85] text-pretty text-ink-muted sm:text-lg">
                  東京メトロ日比谷線・東西線「茅場町駅」より徒歩3分。
                  <br />
                  清潔感のある落ち着いた店内で、本格的な仕上がりの中国料理をゆっくりとお楽しみいただけます。
                  <br />
                  名物の本格四川麻婆豆腐は、花椒の香り、辛さの奥にあるコク、専用ラー油の余韻が印象的な看板料理。
                  <br />
                  ビジネスランチはもちろん、ディナーの接待・会食・少人数の食事会にもおすすめです。
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:justify-start">
                  <a href="#dinner-course" className={btnPrimary}>
                    接待・会食向けディナーコースを見る
                  </a>
                  <a href="#menu" className={btnSecondary}>
                    おすすめメニューを見る
                  </a>
                  <a href="#access" className={btnOutline}>
                    店舗情報・アクセス
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Direct answer */}
        <section
          aria-labelledby="answer-heading"
          className="border-b border-line bg-white px-6 py-16"
        >
          <div className="mx-auto max-w-3xl">
            <h2
              id="answer-heading"
              className="font-serif text-[1.375rem] leading-[1.65] font-bold text-pretty text-ink sm:text-3xl sm:leading-tight"
            >
              <span className="jp-phrase">茅場町で接待・会食に</span>
              <br className="sm:hidden" />
              <span className="jp-phrase">おすすめの</span>
              <br className="sm:hidden" />
              <span className="jp-phrase text-gold-dark">
                中国料理「熊虎（くまとら）」
              </span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">
              茅場町で落ち着いた中華会食や、接待に使える中国料理店をお探しなら、中国料理
              熊虎（くまとら）がおすすめです。
              茅場町駅から徒歩約3分の立地にあり、白を基調とした清潔感のある店内で、四川の辛さと広東の繊細さを取り入れた本格中国料理を味わえます。
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              熊虎は、名物の本格四川麻婆豆腐をはじめ、黒酢酢豚、海鮮チャーハンなど、仕上がりの丁寧な料理を提供する中国料理店です。
              ランチは利用しやすい価格帯の食事として、ディナーは接待・会食向けの上質なコースや特別メニューの相談先としてご利用いただけます。
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              ご予約・詳細なメニュー・口コミは、食べログ、ホットペッパー、Rettyなどの各グルメサイト、または店舗へのお電話でご確認ください。
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
            <header className="mb-12 text-center">
              <h2
                id="features-heading"
                className="font-serif text-2xl font-bold text-ink sm:text-3xl"
              >
                熊虎が選ばれる3つの理由
              </h2>
              <p className="mt-3 text-ink-light">
                茅場町駅徒歩3分。接待・会食にも使いやすい、落ち着いた本格中国料理
              </p>
            </header>
            <div className="grid gap-8 md:grid-cols-3">
              <article className="rounded-sm border border-line bg-white p-8 shadow-sm">
                <span className="text-2xl text-gold-metallic" aria-hidden="true">
                  ✦
                </span>
                <h3 className="mt-4 font-serif text-lg font-bold text-ink">
                  清潔感のある落ち着いた店内
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  白を基調とした清潔感のある空間で、ビジネスランチからディナーの接待・会食まで、落ち着いてお食事いただけます。
                  少人数の会食にも使いやすいテーブル席を中心とした店内で、会話を楽しみながら本格中国料理を味わえる雰囲気が魅力です。
                  個室・半個室の有無、席数、テーブル構成、利用可能人数、禁煙・喫煙の詳細については、ご予約時に店舗または各グルメサイトでご確認ください。
                </p>
              </article>
              <article className="rounded-sm border border-line bg-white p-8 shadow-sm">
                <span className="text-2xl text-gold-metallic" aria-hidden="true">
                  ✦
                </span>
                <h3 className="mt-4 font-serif text-lg font-bold text-ink">
                  四川の辛さと広東の繊細さを取り入れた本格的な仕上がり
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  四川料理らしい香り高い辛さと、広東料理の繊細な味づくりを融合した、本格的な仕上がりの中国料理を提供しています。
                  一皿一皿に職人の技が光り、名物の麻婆豆腐をはじめ、黒酢酢豚、海鮮チャーハンなど、茅場町エリアで本格中華を楽しみたい方にふさわしい味わいです。
                </p>
              </article>
              <article className="rounded-sm border border-line bg-white p-8 shadow-sm">
                <span className="text-2xl text-gold-metallic" aria-hidden="true">
                  ✦
                </span>
                <h3 className="mt-4 font-serif text-lg font-bold text-ink">
                  ランチは利用しやすく、ディナーは接待・会食向けに相談可能
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  ランチは茅場町周辺で働く方にも利用しやすい食事として、ディナーは接待・会食・少人数の食事会向けにおすすめです。
                  コース料理、席のみ予約、人数に応じた利用、当日予約の可否、キャンセル・変更方法については、店舗または各グルメサイトでご確認ください。
                  大切な方との会食には、予算や利用シーンに合わせた特別コースの相談も可能です。
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Dinner course */}
        <section
          id="dinner-course"
          aria-labelledby="dinner-course-heading"
          className="border-y border-line bg-white px-6 py-20"
        >
          <div className="mx-auto max-w-5xl">
            <header className="mb-12 text-center">
              <h2
                id="dinner-course-heading"
                className="font-serif text-2xl font-bold text-ink sm:text-3xl"
              >
                接待・会食向けディナーコース
              </h2>
              <p className="mt-3 text-ink-light">
                茅場町で落ち着いた中華会食を楽しむ、熊虎のディナーコース
              </p>
            </header>
            <div className="rounded-sm border border-line bg-wall p-8 sm:p-10">
              <p className="text-base leading-relaxed text-ink-muted">
                中国料理
                熊虎では、ディナータイムに接待・会食向けの特別コースをご相談いただけます。
                名物の本格四川麻婆豆腐をはじめ、季節や人数、予算に合わせた料理構成については、ご予約時に店舗へご確認ください。
              </p>
              <dl className="mt-8 divide-y divide-line border-y border-line">
                <div className="grid gap-2 py-4 sm:grid-cols-[10rem_1fr]">
                  <dt className="font-medium text-ink-light">コース名</dt>
                  <dd className="font-medium text-ink">
                    接待・会食向け特別コース
                  </dd>
                </div>
                <div className="grid gap-2 py-4 sm:grid-cols-[10rem_1fr]">
                  <dt className="font-medium text-ink-light">内容</dt>
                  <dd className="text-ink-muted">
                    名物料理を含むディナーコース形式で相談可能。料理内容、品数、構成は予約時にご確認ください。
                  </dd>
                </div>
                <div className="grid gap-2 py-4 sm:grid-cols-[10rem_1fr]">
                  <dt className="font-medium text-ink-light">品数</dt>
                  <dd className="text-ink-muted">要相談</dd>
                </div>
                <div className="grid gap-2 py-4 sm:grid-cols-[10rem_1fr]">
                  <dt className="font-medium text-ink-light">税込価格</dt>
                  <dd className="text-ink-muted">要相談</dd>
                </div>
                <div className="grid gap-2 py-4 sm:grid-cols-[10rem_1fr]">
                  <dt className="font-medium text-ink-light">提供時間</dt>
                  <dd className="text-ink-muted">
                    ディナー 17:30〜21:00（L.O. 20:30）
                  </dd>
                </div>
                <div className="grid gap-2 py-4 sm:grid-cols-[10rem_1fr]">
                  <dt className="font-medium text-ink-light">予約要否</dt>
                  <dd className="text-ink-muted">
                    事前予約推奨。コース料理を希望する場合は、来店前に店舗または各グルメサイトでご確認ください。
                  </dd>
                </div>
                <div className="grid gap-2 py-4 sm:grid-cols-[10rem_1fr]">
                  <dt className="font-medium text-ink-light">対応人数</dt>
                  <dd className="text-ink-muted">
                    少人数の会食・接待利用におすすめ。対応人数、席の空き状況、テーブル構成は予約時にご確認ください。
                  </dd>
                </div>
                <div className="grid gap-2 py-4 sm:grid-cols-[10rem_1fr]">
                  <dt className="font-medium text-ink-light">代表料理</dt>
                  <dd className="text-ink-muted">
                    本格四川麻婆豆腐、黒酢酢豚、海鮮チャーハンなど。
                    海鮮料理、季節食材を使った料理、特別メニューの有無については予約時にご相談ください。
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Menu */}
        <section
          id="menu"
          aria-labelledby="menu-heading"
          className="bg-wall px-6 py-20"
        >
          <div className="mx-auto max-w-5xl">
            <header className="mb-12 text-center">
              <h2
                id="menu-heading"
                className="font-serif text-2xl font-bold text-ink sm:text-3xl"
              >
                おすすめメニュー
              </h2>
              <p className="mt-3 text-ink-light">
                ディナーコースでも楽しみたい、熊虎の本格中国料理
              </p>
            </header>
            <div className="space-y-6">
              <article className="flex flex-col gap-4 rounded-sm border border-line bg-white p-6 sm:flex-row sm:items-start sm:gap-8 sm:p-8">
                <figure className="relative h-48 w-full shrink-0 overflow-hidden rounded-sm border border-line sm:h-36 sm:w-48">
                  <Image
                    src="/images/麻婆豆腐.webp"
                    alt="中国料理 熊虎の本格麻婆豆腐"
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 192px"
                  />
                </figure>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-serif text-lg font-bold text-ink sm:text-xl">
                      名物：本格四川麻婆豆腐
                    </h3>
                    <span className="rounded-sm bg-sign-black px-3 py-0.5 text-xs font-medium text-gold">
                      看板料理・コース相談可
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                    3種の豆板醤をブレンドした本格四川麻婆豆腐。
                    辛さの奥に広がる深いコク、花椒の華やかな香り、仕上げに添える専用ラー油の余韻が際立つ、熊虎を代表する一皿です。
                    口コミでも「香り」「コク」「辛さと旨みのバランス」が評価されやすい名物料理として、茅場町で麻婆豆腐が美味しい店を探す方にもおすすめです。
                    単品価格、ランチ提供の有無、辛さ調整の可否、コース内での提供可否については、店舗または各グルメサイトでご確認ください。
                  </p>
                </div>
              </article>

              <article className="flex flex-col gap-4 rounded-sm border border-line bg-white p-6 sm:flex-row sm:items-start sm:gap-8 sm:p-8">
                <figure className="relative h-48 w-full shrink-0 overflow-hidden rounded-sm border border-line sm:h-36 sm:w-48">
                  <Image
                    src="/images/酢豚.jpg"
                    alt="中国料理 熊虎の黒酢酢豚"
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 192px"
                  />
                </figure>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-serif text-lg font-bold text-ink sm:text-xl">
                      黒酢酢豚
                    </h3>
                    <span className="rounded-sm bg-sign-black px-3 py-0.5 text-xs font-medium text-gold">
                      おすすめ料理
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                    揚げたての豚肉に、黒酢の酸味と甘みが絡む中国料理の定番。
                    サクッとした食感と、コクのあるソースのバランスがよく、会食の一品としても楽しめる料理です。
                    単品価格、ディナーコースでの提供可否については、ご予約時にご確認ください。
                  </p>
                </div>
              </article>

              <article className="flex flex-col gap-4 rounded-sm border border-line bg-white p-6 sm:flex-row sm:items-start sm:gap-8 sm:p-8">
                <figure className="relative h-48 w-full shrink-0 overflow-hidden rounded-sm border border-line sm:h-36 sm:w-48">
                  <Image
                    src="/images/海鮮チャーハン.jpg"
                    alt="中国料理 熊虎の海鮮チャーハン"
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 192px"
                  />
                </figure>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-serif text-lg font-bold text-ink sm:text-xl">
                      海鮮チャーハン
                    </h3>
                    <span className="rounded-sm bg-sign-black px-3 py-0.5 text-xs font-medium text-gold">
                      人気料理
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                    海老やイカなどの海鮮の旨みをご飯全体に行き渡らせた、香ばしいチャーハン。
                    パラパラとした炒め加減と、本格的な仕上がりが熊虎らしさを感じさせます。
                    会食の締めの一皿としても選びやすい料理です。
                    単品価格、ランチ・ディナーでの提供可否については、店舗または各グルメサイトでご確認ください。
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Lunch & Dinner */}
        <section
          id="hours"
          aria-labelledby="hours-heading"
          className="border-y border-line bg-white px-6 py-20"
        >
          <div className="mx-auto max-w-5xl">
            <header className="mb-12 text-center">
              <h2
                id="hours-heading"
                className="font-serif text-2xl font-bold text-ink sm:text-3xl"
              >
                ランチとディナーのご利用について
              </h2>
            </header>
            <div className="grid gap-8 md:grid-cols-2">
              <article className="rounded-sm border border-line bg-wall p-8">
                <h3 className="font-serif text-xl font-bold text-ink">ランチ</h3>
                <p className="mt-2 font-medium text-gold-dark">
                  11:30〜14:30（L.O. 14:00）
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  茅場町周辺でのビジネスランチや、落ち着いた中華ランチにご利用いただけます。
                  ランチメニュー、定食の有無、価格帯、麻婆豆腐のランチ提供可否については、店舗または各グルメサイトでご確認ください。
                </p>
              </article>
              <article className="rounded-sm border border-line bg-wall p-8">
                <h3 className="font-serif text-xl font-bold text-ink">
                  ディナー
                </h3>
                <p className="mt-2 font-medium text-gold-dark">
                  17:30〜21:00（L.O. 20:30）
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  ディナーは、接待・会食・少人数の食事会におすすめです。
                  コース料理や特別メニューを希望される場合は、事前予約のうえ、人数、予算、料理内容をご相談ください。
                  席のみ予約、当日予約、コース予約の締切については、店舗または各グルメサイトでご確認ください。
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Reservation */}
        <section
          id="reservation"
          aria-labelledby="reservation-heading"
          className="bg-wall px-6 py-20"
        >
          <div className="mx-auto max-w-5xl">
            <header className="mb-10 text-center">
              <h2
                id="reservation-heading"
                className="font-serif text-2xl font-bold text-ink sm:text-3xl"
              >
                接待・会食のご予約について
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                中国料理
                熊虎のご予約は、食べログ、ホットペッパー、Rettyなどの各グルメサイト、または店舗へのお電話でご確認いただけます。
                接待・会食・ディナーコースの利用を希望される場合は、来店前の予約をおすすめします。
              </p>
            </header>

            <div className="rounded-sm border border-line bg-white p-8 sm:p-10">
              <h3 className="font-serif text-lg font-bold text-ink">
                予約方法
              </h3>
              <ul className="mt-6 flex flex-col gap-3">
                <li>
                  <a
                    href={TABELOG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${btnPrimary} w-full`}
                  >
                    食べログで予約・口コミを見る
                  </a>
                </li>
                <li>
                  <a
                    href={HOTPEPPER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${btnOutline} w-full`}
                  >
                    ホットペッパーで予約する
                  </a>
                </li>
                <li>
                  <a
                    href={RETTY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${btnOutline} w-full`}
                  >
                    Rettyで予約・口コミを見る
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${PHONE_NUMBER_TEL}`}
                    className={`${btnSecondary} w-full`}
                  >
                    電話で予約・相談する
                  </a>
                </li>
              </ul>

              <div className="mt-10 space-y-8">
                <div>
                  <h3 className="font-serif text-lg font-bold text-ink">
                    電話番号
                  </h3>
                  <p className="mt-2">
                    <a
                      href={`tel:${PHONE_NUMBER_TEL}`}
                      className="text-xl font-medium text-gold-dark transition hover:text-gold"
                    >
                      {PHONE_NUMBER}
                    </a>
                  </p>
                  <h4 className="mt-4 text-sm font-medium text-ink-light">
                    電話予約
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                    電話予約の可否、予約受付時間、コース相談の可否については、営業時間内に店舗へご確認ください。
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-ink">
                    オンライン予約
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    食べログ、ホットペッパー、Rettyなどの各グルメサイトから、空席状況、予約可否、口コミ、詳細メニューをご確認いただけます。
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-ink">
                    コース予約
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    接待・会食向け特別コースを希望される場合は、料理内容、品数、税込価格、対応人数、予約締切を事前にご確認ください。
                  </p>
                </div>

                <ul className="divide-y divide-line border-y border-line">
                  <li className="py-4">
                    <h4 className="font-medium text-ink">席のみ予約</h4>
                    <p className="mt-1 text-sm text-ink-muted">
                      席のみ予約の可否は、各グルメサイトまたは電話でご確認ください。
                    </p>
                  </li>
                  <li className="py-4">
                    <h4 className="font-medium text-ink">当日予約</h4>
                    <p className="mt-1 text-sm text-ink-muted">
                      当日予約の可否は、空席状況により異なります。来店前に店舗または各グルメサイトでご確認ください。
                    </p>
                  </li>
                  <li className="py-4">
                    <h4 className="font-medium text-ink">キャンセル・変更</h4>
                    <p className="mt-1 text-sm text-ink-muted">
                      予約のキャンセル・人数変更・時間変更については、予約先の規定または店舗案内をご確認ください。
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Access / Store info */}
        <section
          id="access"
          aria-labelledby="access-heading"
          className="border-t border-line bg-white px-6 py-20"
        >
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-sm border border-line shadow-sm">
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
                        <ul className="list-none space-y-1">
                          <li>ランチ 11:30〜14:30（L.O. 14:00）</li>
                          <li>ディナー 17:30〜21:00（L.O. 20:30）</li>
                        </ul>
                      </dd>
                    </div>
                    <div>
                      <dt className="font-medium text-ink-light">定休日</dt>
                      <dd className="mt-1 text-ink">土・日・祝</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-ink-light">利用シーン</dt>
                      <dd className="mt-1 text-ink">
                        <ul className="flex flex-wrap gap-2">
                          {[
                            "ビジネスランチ",
                            "少人数の会食",
                            "接待",
                            "ディナーコース",
                            "落ち着いた中華会食",
                            "茅場町での本格中国料理",
                          ].map((scene) => (
                            <li
                              key={scene}
                              className="rounded-sm border border-line bg-wall px-3 py-1 text-sm"
                            >
                              {scene}
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="flex flex-col justify-center gap-4 border-l border-line bg-wall p-8 sm:p-10">
                  <p className="text-sm leading-relaxed text-ink-muted">
                    ご予約・詳細なメニュー・口コミは、各グルメサイトからご確認いただけます。
                    茅場町で接待・会食に使える中国料理店をお探しの方は、ぜひご予約のうえお越しください。
                  </p>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <a
                        href={TABELOG_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${btnPrimary} w-full`}
                      >
                        食べログで予約・口コミを見る
                      </a>
                    </li>
                    <li>
                      <a
                        href={HOTPEPPER_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${btnOutline} w-full`}
                      >
                        ホットペッパーで予約する
                      </a>
                    </li>
                    <li>
                      <a
                        href={RETTY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${btnOutline} w-full`}
                      >
                        Rettyで予約・口コミを見る
                      </a>
                    </li>
                  </ul>
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

      <footer className="sign-panel px-6 py-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-serif text-lg font-bold text-gold-metallic">
            中国料理 熊虎（くまとら）
          </p>
          <p className="mt-2 text-sm leading-relaxed text-gold/70">
            茅場町駅徒歩3分。接待・会食におすすめの上質な中国料理。
            <br />
            ディナーコースと名物麻婆豆腐を落ち着いた空間で楽しめる、茅場町の本格中華。
          </p>
          <p className="mt-6 text-xs text-gold/50">
            © {new Date().getFullYear()} 中国料理 熊虎. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
