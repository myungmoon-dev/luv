import CustomImage from "@/components/customImage";

interface IEducationImageSectionProps {
  list: string[];
}

const EducationImageSection = ({ list }: IEducationImageSectionProps) => {
  return (
    <div data-aos="fade-left" className="grid w-full grid-cols-1 gap-5 px-3 md:grid-cols-3">
      {list.map((item, idx) => (
        <CustomImage
          key={idx}
          alt={`소개 이미지 ${idx + 1}`}
          src={item}
          className="h-[200px] lg:h-[300px] 2xl:h-[400px]"
          imgClass="brightness-95 rounded-md shadow-lg"
        />
      ))}
    </div>
  );
};

export default EducationImageSection;
