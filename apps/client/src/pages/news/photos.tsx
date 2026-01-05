import Layout from "@/components/layout";
import NewsPhotos from "@/components/news/photos";
import { newsInnerMenus } from "@/constants/innerMenus/news";

const PhotosPage = () => {
  return (
    <Layout
      pageTitle="교회 앨범"
      title="교회 앨범"
      bannerDescription="일어나라 빛을 발하라!"
      bannerImage="/images/news/banner2.jpg"
      bannerImgClass="object-[100%_30%]"
      innerMenus={newsInnerMenus}
    >
      <NewsPhotos />
    </Layout>
  );
};

export default PhotosPage;
