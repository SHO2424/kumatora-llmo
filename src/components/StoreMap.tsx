"use client";

import { useEffect, useRef, useState } from "react";

type StoreMapProps = {
  embedUrl: string;
  directionsUrl: string;
};

export function StoreMap({ embedUrl, directionsUrl }: StoreMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="border-t border-stone-200">
      <div className="p-8 sm:p-10">
        <h3 className="font-serif text-lg font-bold text-stone-900">
          アクセス・地図
        </h3>
        <p className="mt-2 text-sm text-stone-600">
          茅場町駅から徒歩約3分。下の地図から店舗へのルートをご確認いただけます。
        </p>
        <div
          ref={containerRef}
          className="mt-6 overflow-hidden rounded-xl border border-stone-200 shadow-sm"
        >
          {shouldLoad ? (
            <iframe
              title="中国料理 熊虎への地図"
              src={embedUrl}
              className="aspect-[16/10] w-full border-0 sm:aspect-[21/9]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : (
            <div className="flex aspect-[16/10] w-full items-center justify-center bg-stone-100 sm:aspect-[21/9]">
              <p className="text-sm text-stone-500">地図を読み込み中...</p>
            </div>
          )}
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
