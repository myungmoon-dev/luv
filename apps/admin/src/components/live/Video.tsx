import { useGetLive } from "@/query/youtube";
import Link from "next/link";
import { YoutubeVideo } from "ui";
import { Spinner } from "@/components/ui/spinner";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ExternalLink } from "lucide-react";

const LiveVideo = () => {
  const { data } = useGetLive();

  return (
    <Card className="w-2/3">
      <CardHeader className="pb-3 pt-4">
        <CardTitle className="text-base">현재 라이브</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-3">
        {!data ? (
          <div className="flex h-40 items-center justify-center">
            <Spinner />
          </div>
        ) : (
          <>
            <YoutubeVideo
              className="aspect-video w-full max-w-xl rounded-md"
              videoId={data.url}
              isFullLink
            />
            <div className="flex items-center gap-1.5 text-sm">
              <span className="text-muted-foreground shrink-0">현재 주소</span>
              <Link
                target="_blank"
                href={data.url}
                className="flex items-center gap-0.5 truncate text-blue-600 hover:underline"
              >
                {data.url}
                <ExternalLink className="size-3 shrink-0" />
              </Link>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default LiveVideo;
