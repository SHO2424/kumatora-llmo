import dynamic from "next/dynamic";
import Image from "next/image";
import { faqItems } from "@/lib/faq-schema";

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

const USAGE_SCENES = [
  "ビジネスランチ",
  "少人数の会食",
  "接待",
  "ディナーコース",
  "落ち着いた中華会食",
  "茅場町での本格中国料理",
  "東京駅周辺からの接待",
  "東京出張中のディナー",
  "出張時の少人数会食",
  "取引先との夕食",
  "東京・中央区での高級中華ディナー",
  "茅場町・日本橋周辺でのビジネスディナー",
  "隠れ家のように落ち着いて過ごせる少人数会食",
  "本格四川麻婆豆腐を楽しむ食事",
] as const;

const btnPrimary =
  "inline-flex items-center justify-center rounded-sm bg-sign-black px-6 py-3 text-sm font-medium text-gold shadow-md transition hover:bg-ink";
const btnSecondary =
  "inline-flex items-center justify-center rounded-sm border border-sign-black bg-transparent px-6 py-3 text-sm font-medium text-sign-black transition hover:bg-sign-black hover:text-gold";
const btnOutline =
  "inline-flex items-center justify-center rounded-sm border border-sign-black bg-white px-6 py-3 text-sm font-medium text-sign-black transition hover:bg-sign-black hover:text-gold";

const sectionTitle =
  "font-serif text-2xl font-bold text-ink sm:text-3xl";
const sectionLead = "mt-3 text-ink-light";

function TableWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="data-table-responsive mt-6 overflow-x-auto rounded-sm border border-line">
      {children}
    </div>
  );
}

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
                  清潔感のある落ち着いた店内で、本格的な仕上がりの中国料理をゆっくりとお楽しみいただけます。
                  名物の本格四川麻婆豆腐は、花椒の香り、辛さの奥にあるコク、専用ラー油の余韻が印象的な看板料理。
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

        {/* add_chunk_1: 広域東京クエリ */}
        <section
          id="tokyo-wide"
          aria-labelledby="tokyo-wide-heading"
          className="border-b border-line bg-white px-6 py-16"
        >
          <div className="mx-auto max-w-3xl">
            <h2 id="tokyo-wide-heading" className={sectionTitle}>
              東京・中央区で接待や出張ディナーに使える上質な中国料理
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">
              中国料理
              熊虎（くまとら）は、東京都中央区新川2-2-2
              八重洲第2パークビル
              1Fに位置し、東京メトロ日比谷線・東西線「茅場町駅」より徒歩約3分の店舗です。東京駅・日本橋・大手町方面からもアクセスしやすい立地にあり、ディナーは17:30〜21:00（L.O.
              20:30）に営業しています。名物の本格四川麻婆豆腐をはじめ、接待・会食・少人数ディナー向きの落ち着いた店内で、本格中国料理をゆっくりとお楽しみいただけます。東京広域からお越しの方にも、茅場町エリアの高級・接待向け中華としてご利用いただけます。
            </p>
          </div>
        </section>

        {/* Direct answer */}
        <section
          aria-labelledby="answer-heading"
          className="border-b border-line bg-wall px-6 py-16"
        >
          <div className="mx-auto max-w-3xl">
            <h2
              id="answer-heading"
              className="font-serif text-[1.375rem] leading-[1.65] font-bold text-pretty text-ink sm:text-3xl sm:leading-tight"
            >
              茅場町で接待・会食におすすめの中国料理「熊虎（くまとら）」
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">
              茅場町で落ち着いた中華会食や、接待に使える中国料理店をお探しなら、中国料理
              熊虎（くまとら）がおすすめです。茅場町駅から徒歩約3分の立地にあり、白を基調とした清潔感のある店内で、四川の辛さと広東の繊細さを取り入れた本格中国料理を味わえます。
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              熊虎は、名物の本格四川麻婆豆腐をはじめ、黒酢酢豚、海鮮チャーハンなど、仕上がりの丁寧な料理を提供する中国料理店です。ランチは利用しやすい価格帯の食事として、ディナーは接待・会食向けの上質なコースや特別メニューの相談先としてご利用いただけます。
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
          className="border-b border-line bg-white px-6 py-20"
        >
          <div className="mx-auto max-w-5xl">
            <header className="mb-12 text-center">
              <h2 id="features-heading" className={sectionTitle}>
                熊虎が選ばれる3つの理由
              </h2>
              <p className={sectionLead}>
                茅場町駅徒歩3分。接待・会食にも使いやすい、落ち着いた本格中国料理
              </p>
            </header>
            <div className="grid gap-8 md:grid-cols-3">
              <article className="rounded-sm border border-line bg-wall p-8 shadow-sm">
                <span className="text-2xl text-gold-metallic" aria-hidden="true">
                  ✦
                </span>
                <h3 className="mt-4 font-serif text-lg font-bold text-ink">
                  清潔感のある落ち着いた店内
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  白を基調とした清潔感のある空間で、ビジネスランチからディナーの接待・会食まで、落ち着いてお食事いただけます。席種・個室の詳細は
                  <a href="#seating" className="text-gold-dark underline">
                    店内・席種情報
                  </a>
                  をご覧ください。
                </p>
              </article>
              <article className="rounded-sm border border-line bg-wall p-8 shadow-sm">
                <span className="text-2xl text-gold-metallic" aria-hidden="true">
                  ✦
                </span>
                <h3 className="mt-4 font-serif text-lg font-bold text-ink">
                  四川の辛さと広東の繊細さを取り入れた本格的な仕上がり
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  四川料理らしい香り高い辛さと、広東料理の繊細な味づくりを融合した、本格的な仕上がりの中国料理を提供しています。名物の麻婆豆腐の詳細は
                  <a href="#mapo-tofu-specialty" className="text-gold-dark underline">
                    本格四川麻婆豆腐
                  </a>
                  のページをご覧ください。
                </p>
              </article>
              <article className="rounded-sm border border-line bg-wall p-8 shadow-sm">
                <span className="text-2xl text-gold-metallic" aria-hidden="true">
                  ✦
                </span>
                <h3 className="mt-4 font-serif text-lg font-bold text-ink">
                  ランチは利用しやすく、ディナーは接待・会食向けに相談可能
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  ディナーは接待・会食・少人数の食事会向けにおすすめです。コース詳細は
                  <a href="#dinner-course" className="text-gold-dark underline">
                    ディナーコース
                  </a>
                  、予約条件は
                  <a href="#reservation" className="text-gold-dark underline">
                    ご予約について
                  </a>
                  をご確認ください。
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* add_chunk_4: 店内・席種 */}
        <section
          id="seating"
          aria-labelledby="seating-heading"
          className="border-b border-line bg-wall px-6 py-20"
        >
          <div className="mx-auto max-w-5xl">
            <header className="mb-8 text-center">
              <h2 id="seating-heading" className={sectionTitle}>
                店内・席種・個室情報
              </h2>
              <p className={sectionLead}>
                清潔感のある落ち着いた店内。少人数会食に適した空間
              </p>
            </header>
            <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-ink-muted">
              白を基調とした清潔感のある店内で、会話を楽しみながら本格中国料理を味わえる落ち着いた空間です。完全個室はございませんが、半個室および少人数向けテーブル席をご用意しております。
            </p>
            <TableWrap>
              <table className="data-table">
                <caption className="sr-only">
                  中国料理 熊虎の店内・席種・個室情報
                </caption>
                <tbody>
                  <tr>
                    <th scope="row">個室</th>
                    <td>
                      完全個室はありません。半個室あり（4名・6名・8名向け）。詳細・利用条件はご予約時にご確認ください。
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">席数</th>
                    <td>18席（着席時18名）</td>
                  </tr>
                  <tr>
                    <th scope="row">テーブル席</th>
                    <td>
                      少人数会食向けテーブル席を中心に配置。会話のしやすい落ち着いたレイアウト。
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">利用可能人数</th>
                    <td>
                      最大18名（宴会・貸切は要相談）。4〜8名の半個室利用が可能。
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">予約要否</th>
                    <td>ディナー・コース利用は事前予約推奨</td>
                  </tr>
                  <tr>
                    <th scope="row">禁煙・喫煙</th>
                    <td>全席禁煙</td>
                  </tr>
                  <tr>
                    <th scope="row">テーブル間隔・会話</th>
                    <td>
                      落ち着いた照明と清潔感のある空間で、会食・接待時の会話を楽しみやすい雰囲気。
                      {/* TODO: 実数値を入力 — テーブル間隔の具体的数値 */}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">少人数会食への適性</th>
                    <td>
                      2〜8名程度の会食・接待・取引先との夕食に適したテーブル席・半個室をご用意。
                    </td>
                  </tr>
                </tbody>
              </table>
            </TableWrap>
          </div>
        </section>

        {/* add_chunk_5: 隠れ家 */}
        <section
          id="hidden-gem"
          aria-labelledby="hidden-gem-heading"
          className="border-b border-line bg-white px-6 py-16"
        >
          <div className="mx-auto max-w-3xl">
            <h2 id="hidden-gem-heading" className={sectionTitle}>
              東京・茅場町で落ち着いた隠れ家中華を探す方へ
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">
              中国料理
              熊虎（くまとら）は、東京都中央区新川2-2-2
              八重洲第2パークビル
              1F、茅場町駅徒歩約3分に位置する中国料理店です。白を基調とした清潔感のある店内は、少人数会食に向く落ち着いたテーブル席を中心とした空間で、駅近ながら静かで落ち着いて食事しやすい雰囲気が魅力です。隠れ家のように落ち着いて過ごせる空間で、本格中国料理をゆっくりとお楽しみいただけます。
            </p>
          </div>
        </section>

        {/* add_chunk_6: 麻婆豆腐 */}
        <section
          id="mapo-tofu-specialty"
          aria-labelledby="mapo-tofu-heading"
          className="border-b border-line bg-wall px-6 py-20"
        >
          <div className="mx-auto max-w-5xl">
            <div className="grid items-start gap-10 lg:grid-cols-2">
              <figure className="relative aspect-[4/3] overflow-hidden rounded-sm border border-line shadow-md">
                <Image
                  src="/images/麻婆豆腐.webp"
                  alt="中国料理 熊虎の本格麻婆豆腐"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </figure>
              <div>
                <h2 id="mapo-tofu-heading" className={sectionTitle}>
                  東京・中央区で本格四川麻婆豆腐を味わうなら
                </h2>
                <p className="mt-6 text-base leading-relaxed text-ink-muted">
                  中国料理
                  熊虎（くまとら）は、東京都中央区新川、茅場町駅徒歩約3分に位置し、名物が本格四川麻婆豆腐である中国料理店です。3種の豆板醤をブレンドし、花椒の香りと専用ラー油を仕上げに添えた、辛さ・痺れ・香り・コクが調和した看板料理を提供しています。
                </p>
                <TableWrap>
                  <table className="data-table">
                    <caption className="sr-only">
                      本格四川麻婆豆腐の詳細情報
                    </caption>
                    <tbody>
                      <tr>
                        <th scope="row">辛さ・痺れ・香り</th>
                        <td>
                          花椒の華やかな香り、辛さの奥の深いコク、専用ラー油の余韻
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">調理の特徴</th>
                        <td>3種の豆板醤ブレンド、肉味噌、豆腐の食感</td>
                      </tr>
                      <tr>
                        <th scope="row">辛さ調整</th>
                        <td>予約時・注文時にご相談ください</td>
                      </tr>
                      <tr>
                        <th scope="row">ランチ提供</th>
                        <td>
                          ランチメニューあり（麻婆豆腐定食等）。詳細は各グルメサイトでご確認ください。
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">ディナー提供</th>
                        <td>あり（単品・コース相談可）</td>
                      </tr>
                      <tr>
                        <th scope="row">単品価格（税込目安）</th>
                        <td>
                          ディナー 1,680円〜
                          {/* TODO: 実数値を入力 — 最新メニュー価格 */}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">コース内提供</th>
                        <td>接待・会食向けコースに含められる場合あり（要相談）</td>
                      </tr>
                      <tr>
                        <th scope="row">口コミ傾向</th>
                        <td>
                          食べログ評価3.25（37件）。「香り」「コク」「辛さと旨みのバランス」が頻出する評価傾向。
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </TableWrap>
              </div>
            </div>
          </div>
        </section>

        {/* add_chunk_3: ディナーコース */}
        <section
          id="dinner-course"
          aria-labelledby="dinner-course-heading"
          className="border-b border-line bg-white px-6 py-20"
        >
          <div className="mx-auto max-w-5xl">
            <header className="mb-8 text-center">
              <h2 id="dinner-course-heading" className={sectionTitle}>
                接待・会食向けディナーコース
              </h2>
              <p className={sectionLead}>
                茅場町で落ち着いた中華会食を楽しむ、熊虎のディナーコース
              </p>
            </header>
            <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-ink-muted">
              中国料理
              熊虎では、ディナータイムに接待・会食向けの特別コースをご相談いただけます。名物の本格四川麻婆豆腐をはじめ、季節や人数、予算に合わせた料理構成については、ご予約時に店舗へご確認ください。高級食材は提供実態が確認できる場合のみご案内し、それ以外は季節や予算に応じた料理構成を相談可能です。
            </p>
            <TableWrap>
              <table className="data-table">
                <caption className="sr-only">
                  接待・会食向けディナーコース詳細
                </caption>
                <thead>
                  <tr>
                    <th scope="col">項目</th>
                    <th scope="col">内容</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">コース名</th>
                    <td>接待・会食向け特別コース</td>
                  </tr>
                  <tr>
                    <th scope="row">税込価格または予算目安</th>
                    <td>
                      アラカルト目安：お一人様 5,000円〜
                      <br />
                      コース目安：お一人様 9,000円〜
                      {/* TODO: 実数値を入力 — 正式なコース価格 */}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">品数の目安</th>
                    <td>
                      8〜10品程度（要相談）
                      {/* TODO: 実数値を入力 */}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">料理構成例</th>
                    <td>
                      前菜、名物本格四川麻婆豆腐、黒酢酢豚、海鮮料理、季節の一品、〆の麺またはご飯、デザート（構成は予約時に相談）
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">提供時間</th>
                    <td>ディナー 17:30〜21:00（L.O. 20:30）</td>
                  </tr>
                  <tr>
                    <th scope="row">予約締切</th>
                    <td>
                      事前予約推奨。ネット予約は来店3日前まで（ホットペッパー）。当日・直前は要確認。
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">対応人数</th>
                    <td>2〜18名（少人数会食・接待向け。半個室4〜8名可）</td>
                  </tr>
                  <tr>
                    <th scope="row">所要時間の目安</th>
                    <td>
                      90〜120分
                      {/* TODO: 実数値を入力 — コース所要時間 */}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">代表料理</th>
                    <td>
                      本格四川麻婆豆腐、黒酢酢豚、海鮮チャーハン。季節や予算に応じた料理構成を相談可能。
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">利用シーン</th>
                    <td>
                      接待、会食、取引先との夕食、少人数ディナー、東京出張中のビジネスディナー
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">ドリンク込み目安</th>
                    <td>
                      要相談（ドリンク別途の場合あり）
                      {/* TODO: 実数値を入力 */}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">名物麻婆豆腐</th>
                    <td>コース内に含められる場合あり（予約時にご相談ください）</td>
                  </tr>
                </tbody>
              </table>
            </TableWrap>
          </div>
        </section>

        {/* Menu */}
        <section
          id="menu"
          aria-labelledby="menu-heading"
          className="border-b border-line bg-wall px-6 py-20"
        >
          <div className="mx-auto max-w-5xl">
            <header className="mb-12 text-center">
              <h2 id="menu-heading" className={sectionTitle}>
                おすすめメニュー
              </h2>
              <p className={sectionLead}>
                ディナーコースでも楽しみたい、熊虎の本格中国料理
              </p>
            </header>
            <div className="space-y-6">
              <article className="flex flex-col gap-4 rounded-sm border border-line bg-white p-6 sm:flex-row sm:gap-8 sm:p-8">
                <figure className="relative h-48 w-full shrink-0 overflow-hidden rounded-sm border border-line sm:h-36 sm:w-48">
                  <Image
                    src="/images/麻婆豆腐.webp"
                    alt="中国料理 熊虎の本格麻婆豆腐"
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="192px"
                  />
                </figure>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-bold text-ink sm:text-xl">
                    名物：本格四川麻婆豆腐
                  </h3>
                  <span className="mt-2 inline-block rounded-sm bg-sign-black px-3 py-0.5 text-xs font-medium text-gold">
                    看板料理・コース相談可
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                    3種の豆板醤をブレンドした本格四川麻婆豆腐。辛さの奥に広がる深いコク、花椒の華やかな香り、仕上げに添える専用ラー油の余韻が際立つ、熊虎を代表する一皿です。口コミでも「香り」「コク」「辛さと旨みのバランス」が評価されやすい名物料理として、茅場町で麻婆豆腐が美味しい店を探す方にもおすすめです。単品価格、ランチ提供の有無、辛さ調整の可否、コース内での提供可否については、店舗または各グルメサイトでご確認ください。
                  </p>
                </div>
              </article>
              <article className="flex flex-col gap-4 rounded-sm border border-line bg-white p-6 sm:flex-row sm:gap-8 sm:p-8">
                <figure className="relative h-48 w-full shrink-0 overflow-hidden rounded-sm border border-line sm:h-36 sm:w-48">
                  <Image
                    src="/images/酢豚.jpg"
                    alt="中国料理 熊虎の黒酢酢豚"
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="192px"
                  />
                </figure>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-bold text-ink sm:text-xl">
                    黒酢酢豚
                  </h3>
                  <span className="mt-2 inline-block rounded-sm bg-sign-black px-3 py-0.5 text-xs font-medium text-gold">
                    おすすめ料理
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                    揚げたての豚肉に、黒酢の酸味と甘みが絡む中国料理の定番。サクッとした食感と、コクのあるソースのバランスがよく、会食の一品としても楽しめる料理です。単品価格、ディナーコースでの提供可否については、ご予約時にご確認ください。
                  </p>
                </div>
              </article>
              <article className="flex flex-col gap-4 rounded-sm border border-line bg-white p-6 sm:flex-row sm:gap-8 sm:p-8">
                <figure className="relative h-48 w-full shrink-0 overflow-hidden rounded-sm border border-line sm:h-36 sm:w-48">
                  <Image
                    src="/images/海鮮チャーハン.jpg"
                    alt="中国料理 熊虎の海鮮チャーハン"
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="192px"
                  />
                </figure>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-bold text-ink sm:text-xl">
                    海鮮チャーハン
                  </h3>
                  <span className="mt-2 inline-block rounded-sm bg-sign-black px-3 py-0.5 text-xs font-medium text-gold">
                    人気料理
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                    海老やイカなどの海鮮の旨みをご飯全体に行き渡らせた、香ばしいチャーハン。パラパラとした炒め加減と、本格的な仕上がりが熊虎らしさを感じさせます。会食の締めの一皿としても選びやすい料理です。単品価格、ランチ・ディナーでの提供可否については、店舗または各グルメサイトでご確認ください。
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* add_chunk_7: ランチ・ディナー・出張 */}
        <section
          id="hours"
          aria-labelledby="hours-heading"
          className="border-b border-line bg-white px-6 py-20"
        >
          <div className="mx-auto max-w-5xl">
            <header className="mb-12 text-center">
              <h2 id="hours-heading" className={sectionTitle}>
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
                  茅場町周辺でのビジネスランチや、落ち着いた中華ランチにご利用いただけます。ランチメニュー、定食の有無、価格帯、麻婆豆腐のランチ提供可否については、店舗または各グルメサイトでご確認ください。
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
                  ディナーは、接待・会食・少人数の食事会におすすめです。コース料理や特別メニューを希望される場合は、事前予約のうえ、人数、予算、料理内容をご相談ください。席のみ予約、当日予約、コース予約の締切については、店舗または各グルメサイトでご確認ください。
                </p>
              </article>
            </div>

            <article
              id="business-trip-dinner"
              aria-labelledby="business-trip-heading"
              className="mt-12 rounded-sm border border-line bg-wall p-8 sm:p-10"
            >
              <h3
                id="business-trip-heading"
                className="font-serif text-xl font-bold text-ink"
              >
                東京出張のディナー利用
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                東京出張中の方にも、茅場町駅徒歩3分・東京駅・日本橋・大手町方面からアクセスしやすい立地でご利用いただけます。ディナーは接待・会食・取引先との夕食・少人数会食に適しており、名物麻婆豆腐や接待向けコースの相談が可能です。定休日は土・日・祝のため、出張スケジュールに合わせて平日のご予約をおすすめします。
              </p>
              <TableWrap>
                <table className="data-table">
                  <caption className="sr-only">
                    東京出張ディナー利用の実用情報
                  </caption>
                  <tbody>
                    <tr>
                      <th scope="row">ディナー営業時間</th>
                      <td>17:30〜21:00（L.O. 20:30）</td>
                    </tr>
                    <tr>
                      <th scope="row">定休日</th>
                      <td>土・日・祝</td>
                    </tr>
                    <tr>
                      <th scope="row">事前予約</th>
                      <td>推奨（コース・会食利用時は必須に近い）</td>
                    </tr>
                    <tr>
                      <th scope="row">平均滞在時間</th>
                      <td>
                        90〜120分（目安）
                        {/* TODO: 実数値を入力 */}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">コース所要時間</th>
                      <td>
                        90〜120分（目安）
                        {/* TODO: 実数値を入力 */}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">当日予約</th>
                      <td>空席状況により異なる。来店前にご確認ください。</td>
                    </tr>
                    <tr>
                      <th scope="row">席のみ予約</th>
                      <td>各グルメサイトまたは電話で相談可能</td>
                    </tr>
                    <tr>
                      <th scope="row">支払い方法</th>
                      <td>
                        クレジット可（VISA/Master/JCB/AMEX/Diners）。ランチは現金のみの場合あり。
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">領収書対応</th>
                      <td>適格請求書（インボイス）対応の領収書発行可</td>
                    </tr>
                    <tr>
                      <th scope="row">禁煙・喫煙</th>
                      <td>全席禁煙</td>
                    </tr>
                    <tr>
                      <th scope="row">荷物を持った来店</th>
                      <td>予約時にご相談ください</td>
                    </tr>
                  </tbody>
                </table>
              </TableWrap>
            </article>
          </div>
        </section>

        {/* add_chunk_8: 予約 */}
        <section
          id="reservation"
          aria-labelledby="reservation-heading"
          className="border-b border-line bg-wall px-6 py-20"
        >
          <div className="mx-auto max-w-5xl">
            <header className="mb-10 text-center">
              <h2 id="reservation-heading" className={sectionTitle}>
                接待・会食のご予約について
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                接待・会食・ディナーコース予約時に確認すべき項目をまとめました。中国料理
                熊虎のご予約は、食べログ、ホットペッパー、Retty、または店舗へのお電話で承ります。
              </p>
            </header>

            <ul className="mb-8 flex flex-col gap-3">
              <li>
                <a href={TABELOG_URL} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} w-full`}>
                  食べログで予約・口コミを見る
                </a>
              </li>
              <li>
                <a href={HOTPEPPER_URL} target="_blank" rel="noopener noreferrer" className={`${btnOutline} w-full`}>
                  ホットペッパーで予約する
                </a>
              </li>
              <li>
                <a href={RETTY_URL} target="_blank" rel="noopener noreferrer" className={`${btnOutline} w-full`}>
                  Rettyで予約・口コミを見る
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE_NUMBER_TEL}`} className={`${btnSecondary} w-full`}>
                  電話で予約・相談する（{PHONE_NUMBER}）
                </a>
              </li>
            </ul>

            <TableWrap>
              <table className="data-table">
                <caption className="sr-only">
                  接待・会食・ディナーコース予約時の確認項目
                </caption>
                <thead>
                  <tr>
                    <th scope="col">項目</th>
                    <th scope="col">内容</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">電話番号</th>
                    <td>
                      <a href={`tel:${PHONE_NUMBER_TEL}`} className="text-gold-dark">
                        {PHONE_NUMBER}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">電話予約</th>
                    <td>可能。お問い合わせ時間 15:00〜17:30（要確認）</td>
                  </tr>
                  <tr>
                    <th scope="row">予約受付時間</th>
                    <td>営業時間内（詳細は店舗へ）</td>
                  </tr>
                  <tr>
                    <th scope="row">オンライン予約</th>
                    <td>
                      <ul className="list-disc space-y-1 pl-4">
                        <li>
                          <a href={TABELOG_URL} className="text-gold-dark underline">
                            食べログ
                          </a>
                        </li>
                        <li>
                          <a href={HOTPEPPER_URL} className="text-gold-dark underline">
                            ホットペッパー
                          </a>
                        </li>
                        <li>
                          <a href={RETTY_URL} className="text-gold-dark underline">
                            Retty
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">席のみ予約</th>
                    <td>各グルメサイトで「お席のみのご予約」可能な場合あり</td>
                  </tr>
                  <tr>
                    <th scope="row">当日予約</th>
                    <td>空席状況により異なる。来店前にご確認ください。</td>
                  </tr>
                  <tr>
                    <th scope="row">コース予約締切</th>
                    <td>ネット予約：来店3日前まで（ホットペッパー）。7名以上はコース料理必須。</td>
                  </tr>
                  <tr>
                    <th scope="row">対応人数</th>
                    <td>2〜18名（半個室4〜8名）</td>
                  </tr>
                  <tr>
                    <th scope="row">予算相談</th>
                    <td>接待・会食向け特別コースは予算・人数に応じて相談可能</td>
                  </tr>
                  <tr>
                    <th scope="row">希望料理</th>
                    <td>名物麻婆豆腐、季節料理等は予約時にご相談ください</td>
                  </tr>
                  <tr>
                    <th scope="row">アレルギー対応</th>
                    <td>予約時にご相談ください</td>
                  </tr>
                  <tr>
                    <th scope="row">変更・キャンセル</th>
                    <td>
                      前日17:00まで（コース利用時）。以降はキャンセル料100%の場合あり。詳細は予約先規定をご確認ください。
                    </td>
                  </tr>
                </tbody>
              </table>
            </TableWrap>
          </div>
        </section>

        {/* add_chunk_2 + add_chunk_9: アクセス・店舗情報 */}
        <section
          id="access"
          aria-labelledby="access-heading"
          className="border-b border-line bg-white px-6 py-20"
        >
          <div className="mx-auto max-w-5xl">
            <header className="mb-10 text-center">
              <h2 id="access-heading" className={sectionTitle}>
                店舗情報・アクセス
              </h2>
            </header>

            <article
              id="access-routes"
              aria-labelledby="access-routes-heading"
              className="rounded-sm border border-line bg-wall p-8 sm:p-10"
            >
              <h3
                id="access-routes-heading"
                className="font-serif text-xl font-bold text-ink"
              >
                東京駅・日本橋・大手町方面からのアクセス
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                〒{STORE_POSTAL} {STORE_ADDRESS}
                <br />
                最寄り駅：東京メトロ日比谷線・東西線「茅場町駅」より徒歩約3分
              </p>
              <TableWrap>
                <table className="data-table">
                  <caption className="sr-only">
                    東京駅・日本橋・大手町方面から中国料理熊虎へのアクセス
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">出発地</th>
                      <th scope="col">移動手段</th>
                      <th scope="col">目安・備考</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">茅場町駅</th>
                      <td>徒歩</td>
                      <td>徒歩約3分</td>
                    </tr>
                    <tr>
                      <th scope="row">東京駅</th>
                      <td>電車・タクシー・徒歩</td>
                      <td>
                        東京駅からの所要時間はルートにより異なるため、
                        <a
                          href={MAP_DIRECTIONS_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold-dark underline"
                        >
                          Googleマップ
                        </a>
                        で経路をご確認ください。
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">日本橋・八重洲方面</th>
                      <td>徒歩・電車</td>
                      <td>
                        ルートにより異なるため、Googleマップで経路をご確認ください。
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">大手町方面</th>
                      <td>徒歩・電車</td>
                      <td>
                        ルートにより異なるため、Googleマップで経路をご確認ください。
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">八丁堀方面</th>
                      <td>徒歩</td>
                      <td>八丁堀駅B4出口より徒歩約4分（グルメサイト掲載情報）</td>
                    </tr>
                  </tbody>
                </table>
              </TableWrap>
              <p className="mt-4">
                <a
                  href={MAP_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${btnSecondary} inline-flex`}
                >
                  Googleマップでルートを見る
                </a>
              </p>
            </article>

            <div className="mt-10 overflow-hidden rounded-sm border border-line shadow-sm">
              <div className="grid md:grid-cols-2">
                <div className="p-8 sm:p-10">
                  <h3 className="font-serif text-xl font-bold text-ink">
                    店舗情報
                  </h3>
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
                          {USAGE_SCENES.map((scene) => (
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
                    ご予約・詳細なメニュー・口コミは、各グルメサイトからご確認いただけます。茅場町で接待・会食に使える中国料理店をお探しの方は、ぜひご予約のうえお越しください。
                  </p>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <a href={TABELOG_URL} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} w-full`}>
                        食べログで予約・口コミを見る
                      </a>
                    </li>
                    <li>
                      <a href={HOTPEPPER_URL} target="_blank" rel="noopener noreferrer" className={`${btnOutline} w-full`}>
                        ホットペッパーで予約する
                      </a>
                    </li>
                    <li>
                      <a href={RETTY_URL} target="_blank" rel="noopener noreferrer" className={`${btnOutline} w-full`}>
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

        {/* add_chunk_10: FAQ */}
        <section
          id="faq"
          aria-labelledby="faq-heading"
          className="bg-wall px-6 py-20"
        >
          <div className="mx-auto max-w-3xl">
            <header className="mb-12 text-center">
              <h2 id="faq-heading" className={sectionTitle}>
                よくあるご質問
              </h2>
              <p className={sectionLead}>
                東京広域クエリ・アクセス・個室・コース・出張ディナー・麻婆豆腐について
              </p>
            </header>
            <div className="space-y-6">
              {faqItems.map((item) => (
                <article
                  key={item.question}
                  className="rounded-sm border border-line bg-white p-6 sm:p-8"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <h3
                    className="font-serif text-lg font-bold text-ink"
                    itemProp="name"
                  >
                    {item.question}
                  </h3>
                  <div
                    className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base"
                    itemScope
                    itemType="https://schema.org/Answer"
                    itemProp="acceptedAnswer"
                  >
                    <p itemProp="text">{item.answer}</p>
                  </div>
                </article>
              ))}
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
