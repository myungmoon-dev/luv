import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ALBUM_TYPE_OPTIONS } from "./config";
import AlbumList from "./list";
import AlbumFormDialog from "./AlbumFormDialog";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

const Album = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [refetchKey, setRefetchKey] = useState(0);

  return (
    <>
      <div className="flex justify-end">
        <Button size="sm" onClick={() => setFormOpen(true)}>
          <Plus className="mr-1.5 size-4" />
          앨범 추가
        </Button>
      </div>

      <Tabs defaultValue="all" className="flex flex-col gap-5">
        <TabsList className="flex h-auto flex-wrap justify-start gap-1 bg-muted p-1">
          {ALBUM_TYPE_OPTIONS.map((option) => (
            <TabsTrigger value={option.value} key={option.value} className="shrink-0">
              {option.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {ALBUM_TYPE_OPTIONS.map((option) => (
          <TabsContent value={option.value} key={option.value}>
            <AlbumList type={option.value} refetchKey={refetchKey} />
          </TabsContent>
        ))}
      </Tabs>

      <AlbumFormDialog
        open={formOpen}
        onClose={() => setFormOpen(false)}
        onSuccess={() => setRefetchKey((k) => k + 1)}
      />
    </>
  );
};

export default Album;
