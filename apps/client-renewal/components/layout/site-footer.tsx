import Image from "next/image";
import Link from "next/link";
import { Clock, Instagram, MapPin, Phone, Youtube } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[#0A1E51] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Image src="/images/logo_horizon.svg" alt="명문교회 로고" width={120} height={120} />
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              하나님의 사랑을 전하며,
              <br />
              함께 성장하는 공동체입니다.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.youtube.com/@myungmoonchurch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <Youtube className="h-7 w-7" />
              </a>
              <a
                href="https://www.instagram.com/myungmoonchurch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <Instagram className="h-7 w-7" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold tracking-wider">바로가기</h3>
            <ul className="mt-6 space-y-3">
              {[
                ["/about/vision", "교회비전"],
                ["/about/leadership", "섬기는 분들"],
                ["/sermons", "설교 & 찬양"],
                ["/news", "명문소식"],
                ["/discipleship", "훈련"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/70 transition hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold tracking-wider">예배시간</h3>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0" />
                <span>주일 1부 | 오전 7:30 | 비전채플</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0" />
                <span>주일 2부 | 오전 9:00 | 사랑채플</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0" />
                <span>주일 3부 | 오전 11:30 | 사랑채플</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0" />
                <span>주일 4부 청년 예배 | 오후 2:00 | 비전채플</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0" />
                <span>주일 오후 찬양예배 | 오후 2:00 | 사랑채플</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold tracking-wider">연락처</h3>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>서울특별시 금천구 남부순환로 1406</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>02-861-5071</span>
              </li>
            </ul>
            <Link
              href="/about/services"
              className="mt-6 inline-flex items-center text-sm font-medium text-white transition hover:text-white/80"
            >
              오시는 길 안내
              <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/50">
              &copy; {new Date().getFullYear()} 명문교회. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-white/50">
              <Link href="/policy?idx=1" className="transition hover:text-white">
                개인정보처리방침
              </Link>
              <Link href="/policy?idx=0" className="transition hover:text-white">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
