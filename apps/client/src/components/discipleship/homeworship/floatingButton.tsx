interface IHomeworshipFloatingButtonProps {
  onClick: () => void;
}
const HomeworshipFloatingButton = ({ onClick }: IHomeworshipFloatingButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 z-40 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-blue-950 text-white shadow-lg transition-all hover:scale-110 hover:bg-[#2d4a6f]"
      aria-label="예배 인증하기"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    </button>
  );
};

export default HomeworshipFloatingButton;
