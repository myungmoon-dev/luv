import Image from "next/image";

interface IPhotoItemProps {
  image: string;
  title: string;
  date: string;
}
const PhotoItem = ({ image, title, date }: IPhotoItemProps) => {
  return (
    <div className="flex cursor-pointer flex-col items-center justify-center gap-2 duration-500 hover:text-pink-200 hover:brightness-100">
      <div className="relative h-[200px] w-full rounded-2xl bg-pink-300 sm:h-[180px] lg:h-[250px]">
        <Image
          src={image}
          className="rounded-2xl object-cover brightness-75 duration-500 hover:brightness-100"
          alt={title}
          fill
        />
      </div>
      <h1 className="w-3/4 border-b-[1px] border-gray-300 py-1 text-center text-lg font-bold shadow-sm lg:text-xl">
        {title}
      </h1>
      <p className="text-sm text-gray-800 lg:text-base">{date}</p>
    </div>
  );
};

export default PhotoItem;
