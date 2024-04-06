import BibleSection from "@/components/home/bible";
import BulletinSection from "@/components/home/bulletin";
import YoutubeSection from "@/components/home/youtube";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 justify-center items-center py-20">
      <div className="grid grid-cols-2 gap-10">
        <YoutubeSection sectionTitle="라이브 생방송 링크" type="live" />
        <YoutubeSection sectionTitle="쇼츠 링크" type="shorts" />
        <YoutubeSection sectionTitle="주일예배 링크" type="main" />
        <YoutubeSection sectionTitle="주일찬양예배 링크" type="afternoon" />
        <YoutubeSection sectionTitle="주일청년예배 링크" type="youth" />
        <YoutubeSection sectionTitle="수요예배 링크" type="wednesday" />
        <YoutubeSection sectionTitle="금요기도회 링크" type="firday" />
        <BulletinSection />
        <BibleSection />
      </div>
    </main>
  );
}
