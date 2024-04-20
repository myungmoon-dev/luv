import { Icon } from "ui";
import Section from ".";
import SectionCard from "../sectionCard";

const ShortCutsSection = () => {
  return (
    <Section title="바로가기">
      <div className="mx-auto my-10 grid max-w-screen-lg grid-cols-2 sm:grid-cols-4">
        <SectionCard
          className="h-[120px] w-[130px] rounded-3xl bg-blue-400 shadow-lg duration-700"
          text="설교 영상"
          icon={
            <Icon name="Youtube" size="xl" backgroundColor="white" strokeColor="white" cursor="ui-cursor-pointer" />
          }
          url="sermons/sunday-3"
        />
        <SectionCard
          className="h-[120px] w-[130px] rounded-3xl bg-blue-400 shadow-lg duration-700"
          text="주보"
          icon={<Icon name="Pray" size="xl" backgroundColor="white" strokeColor="white" cursor="ui-cursor-pointer" />}
          url="news/bulletins"
        />
        <SectionCard
          className="h-[120px] w-[130px] rounded-3xl bg-blue-400 shadow-lg duration-700"
          text="예배 안내"
          icon={<Icon name="Bell" size="xl" backgroundColor="white" strokeColor="white" cursor="ui-cursor-pointer" />}
          url="about/services"
        />
        <SectionCard
          className="h-[120px] w-[130px] rounded-3xl bg-blue-400 shadow-lg duration-700"
          text="새가족 안내"
          icon={
            <Icon name="HandHeart" size="xl" backgroundColor="white" strokeColor="white" cursor="ui-cursor-pointer" />
          }
          url="discipleship/new"
        />
      </div>
    </Section>
  );
};

export default ShortCutsSection;
