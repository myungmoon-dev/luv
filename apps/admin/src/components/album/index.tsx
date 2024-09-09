import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ALBUM_TYPE_OPTIONS } from "./config";
import AlbumList from "./list";

const Album = () => {
  return (
    <Tabs defaultValue="all" className="flex flex-col gap-5">
      <TabsList className="grid h-full grid-cols-5 gap-y-2">
        {ALBUM_TYPE_OPTIONS.map((option) => (
          <TabsTrigger value={option.value} key={option.value}>
            {option.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {ALBUM_TYPE_OPTIONS.map((option) => (
        <TabsContent value={option.value} key={option.value}>
          <AlbumList type={option.value} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default Album;
