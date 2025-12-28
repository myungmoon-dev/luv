import { useRouter } from "next/router";

const FAITH_MENUS = [
  {
    title: "성경파노라마",
    url: "/discipleship/faith/panorama",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "큐티 세미나",
    url: "/discipleship/faith/qt",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    ),
  },
  {
    title: "성경통독",
    url: "/discipleship/faith/bibleReading",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
];

const FaithMenuSection = () => {
  const { push } = useRouter();

  return (
    <div className="mx-auto grid max-w-3xl grid-cols-3 gap-8 sm:gap-10 md:gap-12">
      {FAITH_MENUS.map((menu, index) => (
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

export default FaithMenuSection;
