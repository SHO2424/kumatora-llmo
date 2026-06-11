type StoreMapProps = {
  embedUrl: string;
  directionsUrl: string;
};

export function StoreMap({ embedUrl, directionsUrl }: StoreMapProps) {
  return (
    <div className="border-t border-stone-200">
      <div className="p-8 sm:p-10">
        <h3 className="font-serif text-lg font-bold text-stone-900">
          アクセス・地図
        </h3>
        <p className="mt-2 text-sm text-stone-600">
          茅場町駅から徒歩約3分。下の地図から店舗へのルートをご確認いただけます。
        </p>
        <div className="mt-6 overflow-hidden rounded-xl border border-stone-200 shadow-sm">
          <iframe
            title="中国料理 熊虎への地図"
            src={embedUrl}
            className="aspect-[16/10] w-full border-0 sm:aspect-[21/9]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-rose-900 transition hover:text-rose-700"
        >
          Googleマップでルートを見る
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
