import { useState } from "react";
import { FiX, FiZoomIn } from "react-icons/fi";

const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState<{ id: number; url: string; title: string; description: string } | null>(null);

    const images = [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1682687220198-88e9bdea9931",
            title: "Mountain Landscape",
            description: "Beautiful mountain range at sunset"
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1682687220198-88e9bdea9931",
            title: "Ocean View",
            description: "Waves crashing on rocky shore"
        },
        {
            id: 3,
            url: "https://images.unsplash.com/photo-1682687220067-dced9a881b56",
            title: "Forest Path",
            description: "Misty morning in dense forest"
        },
        {
            id: 4,
            url: "https://images.unsplash.com/photo-1682687220067-dced9a881b56",
            title: "Desert Sands",
            description: "Rolling sand dunes at dawn"
        },
        {
            id: 5,
            url: "https://images.unsplash.com/photo-1682686580186-b55d2a91053c",
            title: "City Lights",
            description: "Urban nightscape from above"
        },
        {
            id: 6,
            url: "https://images.unsplash.com/photo-1682687220067-dced9a881b56",
            title: "Waterfall",
            description: "Cascading waterfall in tropical setting"
        }
    ];

    const Modal = ({ image, onClose }: { image: { url: string; title: string; description: string }; onClose: () => void }) => {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn" onClick={onClose}>
                <div className="relative max-w-5xl max-h-[90vh] mx-4 bg-white/10 backdrop-blur-md rounded-xl p-4">
                    <button
                        onClick={onClose}
                        className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 transition-colors duration-300"
                        aria-label="Close modal"
                    >
                        <FiX />
                    </button>
                    <img
                        src={image.url}
                        alt={image.title}
                        className="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl"
                        loading="lazy"
                    />
                    <div className="mt-6 text-white text-center">
                        <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                        <p className="text-gray-200 text-lg">{image.description}</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="container mx-auto px-6 py-12 bg-gradient-to-br from-gray-900 to-black min-h-screen">
            <h1 className="text-4xl font-bold text-white mb-8 text-center">Professional Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {images.map((image) => (
                    <div
                        key={image.id}
                        className="relative group overflow-hidden rounded-xl shadow-2xl cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-3xl"
                        onClick={() => setSelectedImage(image)}
                        onKeyDown={(e) => e.key === "Enter" && setSelectedImage(image)}
                        tabIndex={0}
                        role="button"
                        aria-label={`View ${image.title}`}
                    >
                        <img
                            src={image.url}
                            alt={image.title}
                            className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "https://images.unsplash.com/photo-1682686581580-d3b26ed636a9";
                                target.alt = "Image failed to load";
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center p-6">
                            <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                <FiZoomIn className="text-3xl mx-auto mb-3" />
                                <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                                <p className="text-sm text-gray-200">{image.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />}

            {images.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-400 text-xl">No images to display</p>
                </div>
            )}
        </div>
    );
};

export default ImageGallery;

const obj = { key: "value" };
const { key } = obj;
console.log(key);