import { HomePage } from "@/components/home/home-page";
import { PopupProvider } from "@/components/home/popup-provider";
import { SiteShell } from "@/components/layout/site-shell";

export default function Home() {
  return (
    <SiteShell>
      <PopupProvider>
        <HomePage />
      </PopupProvider>
    </SiteShell>
  );
}
