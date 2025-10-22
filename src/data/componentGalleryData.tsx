import ImageGallery from "@/components/ui/Gallery/gallery";
import { GalleryCode01 } from "@/components/ui/Gallery/galleryCode";

export const ComponentGalleryData = [
    {
        id: 1,
        title: '',
        description: '',
        category: 'UI',
        tags: ['interaction', 'clickable', 'primary', 'button', 'rounded', 'colors'],
        component: (
            <div className="">
                <ImageGallery />
            </div>
        ),
        code: GalleryCode01,
        usage: '',
    },

]
