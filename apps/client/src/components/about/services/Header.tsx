interface IServicesHeaderProps {
  title: string;
}

const ServicesHeader = ({ title }: IServicesHeaderProps) => {
  return <p className="px-4 text-xl font-bold text-[#001F54]">{title}</p>;
};

export default ServicesHeader;
