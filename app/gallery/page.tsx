'use client';

import { useState } from 'react';
import { GALLERY_CATEGORIES } from '@/lib/constants';
import { AnimatedSection } from '@/components/section';
import { motion } from 'framer-motion';

// Generate placeholder images for each category
const galleryImages = GALLERY_CATEGORIES.flatMap((category, categoryIndex) =>
  Array.from({ length: 4 }, (_, imageIndex) => ({
    id: `${categoryIndex}-${imageIndex}`,
    category,
    src: `/images/gallery/${category.toLowerCase().replace(/\s+/g, '-')}-${imageIndex + 1}.jpg`,
    alt: `${category} project ${imageIndex + 1}`,
  }))
);

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = selectedCategory
    ? galleryImages.filter((img) => img.category === selectedCategory)
    : galleryImages;

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy-700 text-white">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Project Gallery
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              See examples of our quality craftsmanship across New Jersey
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white border-b border-concrete-200 sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              type="button"
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === null
                  ? 'bg-accent text-white'
                  : 'bg-concrete-200 text-navy hover:bg-concrete-300'
              }`}
            >
              All Projects
            </button>
            {GALLERY_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-accent text-white'
                    : 'bg-concrete-200 text-navy hover:bg-concrete-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-concrete-50">
        <div className="container-custom">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="mb-4 break-inside-avoid cursor-pointer group"
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  {/* Placeholder Image */}
                  <div className="relative aspect-auto min-h-[200px] bg-gradient-to-br from-concrete-300 to-concrete-500 flex items-center justify-center">
                    <div className="text-center p-4">
                      <svg
                        className="w-16 h-16 mx-auto mb-2 text-white opacity-50"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-white text-sm font-medium">{image.category}</p>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white text-sm font-medium">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Image View (simplified - can be enhanced) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-white text-4xl hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            ×
          </button>
          <div className="max-w-4xl max-h-[90vh]">
            {/* Image would be displayed here */}
          </div>
        </div>
      )}
    </>
  );
}

