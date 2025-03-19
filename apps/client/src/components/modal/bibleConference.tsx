import Image from "next/image";

const BibleConferenceModal = () => {
  return (
    <div>
      <div className="relative h-[300px] md:h-[500px]">
        <Image
          src="/images/modal/bibleConference.jpeg"
          alt="말씀사경회 포스터"
          fill={true}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default BibleConferenceModal;
