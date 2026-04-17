import { Download, FileText } from "lucide-react";

import { NewsNavStrip } from "@/components/news/news-section-nav";
import { newsResourceList } from "@/lib/data/news-resources";

export function ResourcesSection() {
  return (
    <>
      <NewsNavStrip />
      <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-[#1e2a4a] sm:text-3xl">자료함</h1>
        <p className="mt-2 text-sm text-[#496674]">필요한 파일을 내려받을 수 있습니다.</p>
      </header>

      <ul className="flex flex-col gap-4">
        {newsResourceList.map((item) => (
          <li
            key={item.id}
            className="rounded-2xl border border-[#E6E6E6] bg-white p-5 shadow-sm sm:p-6"
          >
            <div className="flex items-start gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#1e2a4a]/[0.08] text-[#1e2a4a]">
                <FileText className="size-5" strokeWidth={1.75} aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="font-bold text-[#1e2a4a]">{item.title}</h2>
                <ul className="mt-3 space-y-2">
                  {item.fileList.map((f) => (
                    <li key={f.download}>
                      <a
                        href={f.download}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#1e2a4a] underline-offset-2 hover:underline"
                      >
                        <Download className="size-4 shrink-0 opacity-70" aria-hidden />
                        {f.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </>
  );
}
