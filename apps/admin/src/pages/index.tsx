import HomeAlbumSection from "@/components/home/album";
import BibleSection from "@/components/home/bible";
import BulletinSection from "@/components/home/bulletin";
import HomeWorshipSection from "@/components/home/homeWorship";
import YoutubeSection from "@/components/home/youtube";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-20 bg-black py-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <YoutubeSection />
        <BulletinSection />
        <BibleSection />
        <HomeWorshipSection />
        <HomeAlbumSection />
      </div>
    </main>
  );
}
