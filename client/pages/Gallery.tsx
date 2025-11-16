import Layout from "@/components/Layout";
import { useState } from "react";
import { X } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F21647635e9b5466fa9bbe9f38773f576%2F569c529c2c4647ee922917416dd909f0?format=webp&width=800",
      alt: "Villa Pool Aerial View",
      category: "Pool",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F21647635e9b5466fa9bbe9f38773f576%2F679d70f0593a4459a4fbe8fc3c0dc8b6?format=webp&width=800",
      alt: "Pool with Loungers",
      category: "Pool",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F21647635e9b5466fa9bbe9f38773f576%2Fdd4174cbd7e64e80840d9e4701adcd6f?format=webp&width=800",
      alt: "Garden Lounge Area",
      category: "Garden",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F21647635e9b5466fa9bbe9f38773f576%2Fd2ec1588715f49b7b6e4b973ebb53ec8?format=webp&width=800",
      alt: "Living Room",
      category: "Interior",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F21647635e9b5466fa9bbe9f38773f576%2F14ef21a798e941ad9a2a338642ffc314?format=webp&width=800",
      alt: "Bedroom 1",
      category: "Bedrooms",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F21647635e9b5466fa9bbe9f38773f576%2F8203abc6245d4a2ba94b24295d99110b?format=webp&width=800",
      alt: "Bedroom 2",
      category: "Bedrooms",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F21647635e9b5466fa9bbe9f38773f576%2F0533e91b2b7d4afa996cbe756142e7e5?format=webp&width=800",
      alt: "Master Suite",
      category: "Bedrooms",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F21647635e9b5466fa9bbe9f38773f576%2Fed524e451d5449259247ce3658852d8a?format=webp&width=800",
      alt: "Bathroom",
      category: "Bathrooms",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F21647635e9b5466fa9bbe9f38773f576%2F0c4192ebda7048999fac4558e741c8be?format=webp&width=800",
      alt: "Bathroom Details",
      category: "Bathrooms",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F21647635e9b5466fa9bbe9f38773f576%2Ff9c5e0d741a448e788db1d6335e3df37?format=webp&width=800",
      alt: "Dining Area",
      category: "Dining",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F21647635e9b5466fa9bbe9f38773f576%2Fc4efc417adf7458ca701d80490746c38?format=webp&width=800",
      alt: "Kitchen",
      category: "Kitchen",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F21647635e9b5466fa9bbe9f38773f576%2F720fe48e33d1462785109a04dea6ff7a?format=webp&width=800",
      alt: "Outdoor Seating",
      category: "Outdoor",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F21647635e9b5466fa9bbe9f38773f576%2F2f1153945af845a6965cc0f375f7b4d8?format=webp&width=800",
      alt: "Bookshelf Detail",
      category: "Interior",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F21647635e9b5466fa9bbe9f38773f576%2F5132cfcac65943418631851107ad514d?format=webp&width=800",
      alt: "Hallway",
      category: "Interior",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F21647635e9b5466fa9bbe9f38773f576%2F152a8824505e473fafd7fb53c3e9a3e3?format=webp&width=800",
      alt: "Pool Side View",
      category: "Pool",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F21647635e9b5466fa9bbe9f38773f576%2F9acabaea5a234751ba072875d53340cf?format=webp&width=800",
      alt: "Dining Table Setup",
      category: "Dining",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen pb-20">
        {/* Hero Section */}
        <section className="pt-20 pb-12 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-custom">
            <h1 className="text-5xl font-serif font-bold text-primary mb-4">
              Villa Gallery
            </h1>
            <div className="w-16 h-1 bg-secondary mb-6"></div>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Explore the stunning views and elegant spaces of Villa Thús
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl cursor-pointer h-60 sm:h-80"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                    <div className="w-full p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="font-semibold text-sm">{image.alt}</p>
                      <p className="text-xs opacity-90">{image.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              <button
                className="absolute top-0 right-0 -mt-12 text-white hover:text-secondary transition-colors z-10"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage}
                alt="Gallery preview"
                className="w-full h-full object-contain rounded-xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
