interface IServicesHeaderProps {
  title: string;
}

const ServicesHeader = ({ title }: IServicesHeaderProps) => {
  return <p className="px-4 text-xl font-bold text-[#001F54] sm:text-2xl md:text-3xl">{title}</p>;
};

export default ServicesHeader;
