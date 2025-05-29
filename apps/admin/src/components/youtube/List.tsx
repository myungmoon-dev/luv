import { useDeleteVideo, useGetVideos } from "@/query/youtube";
import { IYoutube, YoutubeType } from "type";
import { Spinner } from "ui";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Edit, MoreHorizontal, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import youtubeKeys from "@/query/youtube/keys";
import useVideoStore from "@/store/Video";

interface IYoutubeVideoListProps {
  option: YoutubeType;
}

const YoutubeVideoList = ({ option }: IYoutubeVideoListProps) => {
  const queryClient = useQueryClient();
  const [setEdit, setEdittingVideo] = useVideoStore((state) => [
    state.setEdit,
    state.setEdittingVideo,
  ]);

  const { data, isFetching } = useGetVideos({ type: option });
  const { mutate } = useDeleteVideo();

  const handleDeleteVideo = (id: string) => {
    mutate(
      { videoId: id },
      {
        onSuccess: () => {
          toast("삭제되었습니다.");
          queryClient.invalidateQueries({ queryKey: youtubeKeys.all });
        },
        onError: () => {
          toast("에러가 발생했습니다.");
        },
      },
    );
  };

  const handleUpdateEdit = (video: IYoutube) => {
    setEdit(true);
    setEdittingVideo(video);
  };

  if (isFetching)
    return (
      <div className="flex h-full items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>링크</TableHead>
          <TableHead>제목</TableHead>
          <TableHead>날짜</TableHead>
          <TableHead>본문말씀</TableHead>
          <TableHead>이름/설교자</TableHead>
          <TableHead>작업</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.videos.map((video) => (
          <TableRow key={video._id}>
            <TableCell>{video.url}</TableCell>
            <TableCell>{video.title}</TableCell>
            <TableCell>{video.date}</TableCell>
            <TableCell>{video.mainText}</TableCell>
            <TableCell>{video.preacher}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleUpdateEdit(video)}>
                    <Edit className="mr-2 h-4 w-4" />
                    <span>편집</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="text-destructive"
                    onClick={() => handleDeleteVideo(video._id)}
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    <span>삭제</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default YoutubeVideoList;
