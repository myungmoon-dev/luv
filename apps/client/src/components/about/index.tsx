import AboutNavigation from "./Navigation";

const About = () => {
  return (
    <div className="flex flex-col gap-14 px-6 pb-32 pt-8 sm:gap-24 sm:pt-14 md:pt-24 md:pb-40 md:gap-32 lg:gap-40 lg:pt-36 lg:pb-48">   
      <AboutNavigation/>
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-7">
        <p className="text-xl font-bold text-[#222222] sm:text-2xl md:text-3xl lg:text-4xl">
          명문교회에
          <br />
          오신 것을 환영합니다.
        </p>
        <p className="font-medium leading-7 text-[#222222] sm:text-xl md:text-2xl lg:text-3xl">
          지역과 민족을 품고
          <br />
          세계와 열방을 향해 나아가는 명문교회입니다.
        </p>
      </div>
    </div>
  );
};

export default About;
