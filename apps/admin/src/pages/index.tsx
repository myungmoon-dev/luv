import BulletinSection from "@/components/home/bulletin";
import YoutubeSection from "@/components/youtube";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 justify-center items-center h-screen">
      <YoutubeSection title="유튜브 라이브 생방송 링크" type="youtube" />
      <YoutubeSection title="유튜브 쇼츠 링크" type="shorts" />
      <BulletinSection />
    </main>
  );
}
