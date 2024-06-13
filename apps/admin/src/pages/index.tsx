import HomeAlbumSection from "@/components/home/album";
import BibleSection from "@/components/home/bible";
import BulletinSection from "@/components/home/bulletin";
import HomeWorshipSection from "@/components/home/homeWorship";
import YoutubeSection from "@/components/home/youtube";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 justify-center items-center py-20 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <YoutubeSection />
        <BulletinSection />
        <BibleSection />
        <HomeWorshipSection />
        <HomeAlbumSection />
      </div>
    </main>
  );
}
