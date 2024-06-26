import GalleryOne from "@/app/components/gallery/galleryOne";
import "@/styles/gallery.scss";
import { getFrameFlattened, Frame } from "frames.js";

export async function generateMetadata(props: any) {
  let { id } = props.params;
  let imageUrl = "https://mrphs.io/api/og?id=" + id;
  const initialFrame: Frame = {
    image: imageUrl,
    version: "vNext",
    buttons: [
      {
        action: "link",
        label: "Opensea",
        target: `https://opensea.io/assets/base/0x670971dcb8e1a510253511427593007e074954b7/${id}`,
      },
      {
        action: "link",
        label: "Profile",
        target: `https://mrphs.io/gallery/${id}`,
      },
    ],
    imageAspectRatio: "1:1",
  };
  return {
    title: "Morpheus #" + id,
    other: getFrameFlattened(initialFrame),
  };
}

const GalleryOnePage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div className="gallery_page">
      <GalleryOne tokenId={Number(id)} />
    </div>
  );
};

export default GalleryOnePage;
