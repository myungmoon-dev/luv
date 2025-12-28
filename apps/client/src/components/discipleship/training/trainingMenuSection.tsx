import { useRouter } from "next/router";

const TRAINING_MENUS = [
  {
    title: "신혼가정",
    url: "/discipleship/training/newlyweds",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        {/* 의자 왼쪽 */}
        <rect x="5" y="8" width="2" height="4" strokeWidth={1.5} />
        <line x1="5" y1="12" x2="5" y2="16" strokeWidth={1.5} strokeLinecap="round" />
        {/* 의자 오른쪽 */}
        <rect x="17" y="8" width="2" height="4" strokeWidth={1.5} />
        <line x1="19" y1="12" x2="19" y2="16" strokeWidth={1.5} strokeLinecap="round" />
        {/* 테이블 */}
        <rect x="7" y="10" width="10" height="1.5" strokeWidth={1.5} />
        <line x1="8" y1="11.5" x2="8" y2="16" strokeWidth={1.5} strokeLinecap="round" />
        <line x1="16" y1="11.5" x2="16" y2="16" strokeWidth={1.5} strokeLinecap="round" />
        {/* 하트 */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.5 4.5c-.5 0-.9.4-.9.9 0 .7.5 1.2 1.4 2 .9-.8 1.4-1.3 1.4-2 0-.5-.4-.9-.9-.9-.2 0-.4.1-.5.3-.1-.2-.3-.3-.5-.3z"
          transform="translate(1.5, 0)"
        />
      </svg>
    ),
  },
  {
    title: "3040",
    url: "/discipleship/training/3040",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "시니어",
    url: "/discipleship/training/senior",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="9" cy="7" r="3" strokeWidth={1.5} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 21v-4c0-2.2 1.8-4 4-4h4c2.2 0 4 1.8 4 4v4"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 9v12M17 9l2-2"
        />
      </svg>
    ),
  },
];

const TrainingMenuSection = () => {
  const { push } = useRouter();

  return (
    <div className="mx-auto grid max-w-3xl grid-cols-3 gap-8 sm:gap-10 md:gap-12">
      {TRAINING_MENUS.map((menu, index) => (
        <button
          key={index}
          onClick={() => push(menu.url)}
          className="flex flex-col items-center gap-2 transition-all sm:gap-3"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#001F54] text-white sm:h-20 sm:w-20">
            {menu.icon}
          </div>
          <p className="text-center text-sm font-medium text-gray-900 sm:text-base">{menu.title}</p>
        </button>
      ))}
    </div>
  );
};

export default TrainingMenuSection;
