import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Youtube, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A1E51] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Church Info */}
          <div className="lg:col-span-1">
            <Image src="/images/logo_horizon.svg" alt="명문교회 로고" width={120} height={120} />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              하나님의 사랑을 전하며,
              <br />
              함께 성장하는 공동체입니다.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.youtube.com/@myungmoonchurch"
                target="_blank"
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 flex h-10 w-10 items-center justify-center rounded-full transition"
              >
                <Youtube className="h-7 w-7" />
              </a>
              <a
                href="https://www.instagram.com/myungmoonchurch"
                target="_blank"
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 flex h-10 w-10 items-center justify-center rounded-full transition"
              >
                <Instagram className="h-7 w-7" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold tracking-wider">바로가기</h3>
            <ul className="mt-6 space-y-3">
              <li>
                <Link
                  href="/about/vision"
                  className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition"
                >
                  교회비전
                </Link>
              </li>
              <li>
                <Link
                  href="/about/leadership"
                  className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition"
                >
                  섬기는 분들
                </Link>
              </li>
              <li>
                <Link
                  href="/sermons"
                  className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition"
                >
                  설교 & 찬양
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition"
                >
                  명문소식
                </Link>
              </li>
              <li>
                <Link
                  href="/discipleship/newFamily"
                  className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition"
                >
                  훈련
                </Link>
              </li>
            </ul>
          </div>

          {/* Worship Times */}
          <div>
            <h3 className="text-lg font-semibold tracking-wider">예배시간</h3>
            <ul className="text-primary-foreground/70 mt-6 space-y-3 text-sm">
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

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold tracking-wider">연락처</h3>
            <ul className="text-primary-foreground/70 mt-6 space-y-3 text-sm">
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
              className="text-primary-foreground hover:text-primary-foreground/80 mt-6 inline-flex items-center text-sm font-medium transition"
            >
              오시는 길 안내
              <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
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

      {/* Bottom Bar */}
      <div className="border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-primary-foreground/50 text-xs">
              &copy; {new Date().getFullYear()} 명문교회. All rights reserved.
            </p>
            <div className="text-primary-foreground/50 flex gap-6 text-xs">
              <Link href="/policy?idx=1" className="hover:text-primary-foreground transition">
                개인정보처리방침
              </Link>
              <Link href="/policy?idx=0" className="hover:text-primary-foreground transition">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
