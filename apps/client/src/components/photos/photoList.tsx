import PhotoItem from "./photoItem";

interface IPhotoItem {
  image: string;
  title: string;
  date: string;
}
interface IPhotoListProps {
  photoList: IPhotoItem[];
}

const PhotoList = ({ photoList }: IPhotoListProps) => {
  return (
    <div className="grid grid-cols-1 gap-5 gap-y-7 sm:grid-cols-3 lg:gap-20">
      {photoList.map((photoItem, index) => (
        <PhotoItem key={index} image={photoItem.image} date={photoItem.date} title={photoItem.title} />
      ))}
    </div>
  );
};

export default PhotoList;
