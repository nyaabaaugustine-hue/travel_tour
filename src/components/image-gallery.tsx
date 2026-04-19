"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  location: string;
}

interface ImageGalleryProps {
  images?: GalleryImage[];
}

const defaultImages: GalleryImage[] = [
  { id: 1, src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533944/accra_h28u9u.jpg", alt: "Accra Skyline", location: "Accra, Ghana" },
  { id: 2, src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533943/lk_zd9scy.jpg", alt: "Lagos Marina", location: "Lagos, Nigeria" },
  { id: 3, src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533943/safrica_nu5kez.jpg", alt: "Cape Town", location: "Cape Town, South Africa" },
  { id: 4, src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533940/4559fb8b_hyckig.jpg", alt: "Safari", location: "Masai Mara, Kenya" },
  { id: 5, src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533940/45086c8e_zwtrkb.jpg", alt: "Pyramids", location: "Cairo, Egypt" },
  { id: 6, src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533940/13ed0bd8_tx2gog.jpg", alt: "Beach Resort", location: "Morocco" },
  { id: 7, src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776527855/slide1_fracqs.jpg", alt: "Sunset Flight", location: "In Flight" },
  { id: 8, src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776528497/slide5_jz621t.jpg", alt: "City Lights", location: "Accra, Ghana" },
  { id: 9, src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776528497/slide4_qsza8w.jpg", alt: "Cultural Festival", location: "Ghana" },
  { id: 10, src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776514019/as_cf8py5.jpg", alt: "Adventure", location: "Rwanda" },
  { id: 11, src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776527855/slide3_tdjtnv.jpg", alt: "Mountains", location: "Ethiopia" },
  { id: 12, src: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533937/74f9a640_aytjpj.jpg", alt: "Dakar Beach", location: "Dakar, Senegal" },
];

export function ImageGallery({ images = defaultImages }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
  };

  const goToNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="relative group cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <div className={`
              relative overflow-hidden rounded-2xl
              ${index === 0 ? "md:row-span-2 md:col-span-2 aspect-square md:aspect-auto" : "aspect-[4/3]"}
            `}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-3 md:p-4">
                  <ZoomIn className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-sm md:text-base truncate">{image.alt}</p>
                <p className="text-white/70 text-xs md:text-sm">{image.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
            
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
              className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors hidden md:block"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors hidden md:block"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative z-40 max-w-5xl max-h-[85vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] md:aspect-auto md:h-[85vh]">
                <Image
                  src={galleryImages[selectedIndex].src}
                  alt={galleryImages[selectedIndex].alt}
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-display text-xl md:text-2xl font-bold">
                  {galleryImages[selectedIndex].alt}
                </h3>
                <p className="text-white/70">{galleryImages[selectedIndex].location}</p>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 left-4 z-50 md:hidden">
                <button
                  onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5 text-white" />
                </button>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 right-4 z-50 md:hidden">
                <button
                  onClick={(e) => { e.stopPropagation(); goToNext(); }}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="h-5 w-5 text-white" />
                </button>
              </div>
            </motion.div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setSelectedIndex(idx); }}
                  className={`transition-all duration-300 ${
                    idx === selectedIndex 
                      ? "w-8 bg-secondary" 
                      : "w-2 bg-white/30 hover:bg-white/50"
                  } h-2 rounded-full`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}