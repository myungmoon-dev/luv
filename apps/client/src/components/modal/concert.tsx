import Image from "next/image";

const ConcertModal = () => {
  return (
    <div>
      <div className="relative h-[300px] md:h-[500px]">
        <Image src="/images/new_beginning.jpg" alt="새생명 축제" fill={true} className="object-contain" />
      </div>
    </div>
  );
};

export default ConcertModal;
