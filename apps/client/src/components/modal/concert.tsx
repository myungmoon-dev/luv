import Image from "next/image";

const ConcertModal = () => {
  return (
    <div>
      <div className="relative h-[300px] md:h-[500px]">
        <Image src="/images/concert.jpeg" alt="가을 음악회" fill={true} className="object-contain" />
      </div>
    </div>
  );
};

export default ConcertModal;
