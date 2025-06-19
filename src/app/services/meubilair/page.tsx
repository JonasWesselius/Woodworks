'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageBanner from '@/components/PageBanner';
import FadeIn from '@/components/animations/FadeIn';
import OfferteButton from '@/components/OfferteButton';

interface FurnitureItem {
  id: string;
  title: string;
  description: string;
  images: string[];
  category: string;
}

const furnitureItems: FurnitureItem[] = [
  {
    id: 'trap',
    title: 'Trap',
    description: 'Vakkundig gemaakte trap met oog voor detail en veiligheid',
    images: ['https://pobxoxp6txrdxiwo.public.blob.vercel-storage.com/Woodworks%20Foto%27s%20%28bewerkt%29/Meubilair/20230728_122303-XZQRBr55qYcEw9WBoVQNVxATnu0ovJ.jpg', 'https://pobxoxp6txrdxiwo.public.blob.vercel-storage.com/Woodworks%20Foto%27s%20%28bewerkt%29/Meubilair/20230728_122421-fWupzkitbp1tfnTUcNEHCMFvSWxfhl.jpg'],
    category: 'Trappen'
  },
  {
    id: 'bureau',
    title: 'Bureau',
    description: 'Maatwerk bureau perfect afgestemd op uw werkruimte',
    images: ['https://pobxoxp6txrdxiwo.public.blob.vercel-storage.com/Woodworks%20Foto%27s%20%28bewerkt%29/Meubilair/20230803_135049-0NKl3pMwcQjdiqbRpKN03SMMoXOyMH.jpg'],
    category: 'Kantoor'
  },
  {
    id: 'tv-meubel',
    title: 'TV Meubel',
    description: 'Stijlvol TV meubel met praktische opbergruimte',
    images: ['https://pobxoxp6txrdxiwo.public.blob.vercel-storage.com/Woodworks%20Foto%27s%20%28bewerkt%29/Meubilair/20231023_213350-Dk4AG5nndExnrimsSHBKRfEA6Z8QsR.jpg'],
    category: 'Woonkamer'
  },
  {
    id: 'bed-opslag',
    title: 'Bed met Opslagruimte',
    description: 'Praktisch bed met ingebouwde opslagruimte onder het matras',
    images: ['https://pobxoxp6txrdxiwo.public.blob.vercel-storage.com/Woodworks%20Foto%27s%20%28bewerkt%29/Meubilair/20231202_144837-3yOkab2q3rM7Li4q6EmFq35WnGj7CP.jpg', 'https://pobxoxp6txrdxiwo.public.blob.vercel-storage.com/Woodworks%20Foto%27s%20%28bewerkt%29/Meubilair/20231202_144846-dcZifDuwn7BMQGDmtSpQG8XG1ixsdI.jpg'],
    category: 'Slaapkamer'
  },
  {
    id: 'baby-box',
    title: 'Baby Box',
    description: 'Veilige en stijlvolle baby box voor de kleinsten',
    images: ['https://pobxoxp6txrdxiwo.public.blob.vercel-storage.com/Woodworks%20Foto%27s%20%28bewerkt%29/Meubilair/20231221_125609-8AP7aZgqhVZpeaOREThiPVg4GH5ESZ.jpg'],
    category: 'Kinderkamer'
  },
  {
    id: 'open-kast',
    title: 'Open Kast',
    description: 'Moderne open kast voor een luchtige uitstraling',
    images: ['https://pobxoxp6txrdxiwo.public.blob.vercel-storage.com/Woodworks%20Foto%27s%20%28bewerkt%29/Meubilair/IMG_20240214_222327_462-WCoWtbgSD6qYcurLnNIAjTohJzslbZ.jpg', 'https://pobxoxp6txrdxiwo.public.blob.vercel-storage.com/Woodworks%20Foto%27s%20%28bewerkt%29/Meubilair/IMG_20240214_222327_333-ir1ys5O5fSew4ulb7w8sHlfHYXmeNN.jpg'],
    category: 'Opbergruimte'
  },
  {
    id: 'dichte-kast',
    title: 'Dichte Kast',
    description: 'Praktische dichte kast voor optimale opbergruimte',
    images: ['https://pobxoxp6txrdxiwo.public.blob.vercel-storage.com/Woodworks%20Foto%27s%20%28bewerkt%29/Meubilair/IMG-20250311-WA0000-1qZiWHUzl5E6rjpCz3ZVGjHrQ4pNPu.jpg'],
    category: 'Opbergruimte'
  },
  {
    id: 'kast-achter-schot',
    title: 'Kast achter Schot',
    description: 'Slimme kast geïntegreerd achter een schot',
    images: ['https://pobxoxp6txrdxiwo.public.blob.vercel-storage.com/Woodworks%20Foto%27s%20%28bewerkt%29/Kasten%20en%20ombouw/20221222_180225-2-apXvNhMqGri1q9WxBaCbmjDFECe4jt.jpg'],
    category: 'Opbergruimte'
  },
  {
    id: 'kast-schuin-dak',
    title: 'Kast onder Schuin Dak',
    description: 'Optimale benutting van ruimte onder schuine daken',
    images: ['https://pobxoxp6txrdxiwo.public.blob.vercel-storage.com/Woodworks%20Foto%27s%20%28bewerkt%29/Kasten%20en%20ombouw/IMG_20240123_225705_598-cDaMho4B4RCvNi2XrhpDAZhkffuO5T.jpg'],
    category: 'Opbergruimte'
  },
  {
    id: 'ombouw-verwarming',
    title: 'Ombouw voor Verwarming',
    description: 'Stijlvolle ombouw die uw verwarming integreert in het interieur',
    images: ['https://pobxoxp6txrdxiwo.public.blob.vercel-storage.com/Woodworks%20Foto%27s%20%28bewerkt%29/Kasten%20en%20ombouw/20240302_164738-bewerkt-Nv8DvnWrvdqDRYRZplfvwccKR0gNoh.jpg'],
    category: 'Interieur'
  },
  {
    id: 'moderne-voordeur',
    title: 'Moderne Voordeur',
    description: 'Contemporaine voordeur met moderne afwerking',
    images: ['https://pobxoxp6txrdxiwo.public.blob.vercel-storage.com/Woodworks%20Foto%27s%20%28bewerkt%29/Deuren%20en%20kozijnen/20231020_133459-0W2pZMw2QJiOR9z9UYvCY3S9kUgFWs.jpg'],
    category: 'Deuren'
  },
  {
    id: 'normale-voordeur',
    title: 'Normale Voordeur',
    description: 'Klassieke voordeur met tijdloze uitstraling',
    images: ['https://pobxoxp6txrdxiwo.public.blob.vercel-storage.com/Woodworks%20Foto%27s%20%28bewerkt%29/Deuren%20en%20kozijnen/20231122_153715-M2S5uvI5tG4KUHUtMS8Wx204zyiLQS.jpg'],
    category: 'Deuren'
  }
];

const categories = [...new Set(furnitureItems.map(item => item.category))];

export default function Meubilair() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');
  const [selectedItem, setSelectedItem] = useState<FurnitureItem | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [carouselIndices, setCarouselIndices] = useState<{ [key: string]: number }>({});
  const [fadeProgress, setFadeProgress] = useState<{ [key: string]: number }>({});

  const filteredItems = selectedCategory === 'Alle' 
    ? furnitureItems 
    : furnitureItems.filter(item => item.category === selectedCategory);

  // Auto-rotate carousel for items with multiple images
  useEffect(() => {
    const interval = setInterval(() => {
      furnitureItems.forEach(item => {
        if (item.images.length > 1) {
          // Start cross-fade transition
          const startTime = Date.now();
          const fadeDuration = 1000; // 1 second
          
          const fadeInterval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / fadeDuration, 1);
            
            setFadeProgress(prev => ({ ...prev, [item.id]: progress }));
            
            if (progress >= 1) {
              clearInterval(fadeInterval);
              // Change image and reset fade
              setCarouselIndices(prev => {
                const newIndices = { ...prev };
                const currentIndex = newIndices[item.id] || 0;
                newIndices[item.id] = (currentIndex + 1) % item.images.length;
                return newIndices;
              });
              setFadeProgress(prev => ({ ...prev, [item.id]: 0 }));
            }
          }, 16); // ~60fps
        }
      });
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <PageBanner 
        title="Meubilair"
        subtitle="Maatwerk meubilair, deuren en kozijnen op maat"
      />
      
      <div className="flex-grow py-16 bg-[#f7f5f2]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Description Section */}
          <FadeIn direction="up">
            <div className="text-center mb-12">
              <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-8">
                Maatwerk meubilair, deuren en kozijnen op maat voor uw specifieke wensen en ruimte. 
                Wij creëren functionele en stijlvolle oplossingen die perfect aansluiten bij uw interieur en levensstijl.
              </p>
              <OfferteButton 
                className="inline-block bg-[#da6f00] text-white px-6 py-3 rounded-diagonal hover:bg-[#b25900]"
                selectedService="Meubilair"
              />
            </div>
          </FadeIn>

          {/* Category Filter */}
          <FadeIn direction="up">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setSelectedCategory('Alle')}
                className={`px-6 py-2 rounded-diagonal transition-colors ${
                  selectedCategory === 'Alle' 
                    ? 'bg-[#da6f00] text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Alle
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-diagonal transition-colors ${
                    selectedCategory === category 
                      ? 'bg-[#da6f00] text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Furniture Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <FadeIn key={item.id} direction="up" delay={index * 0.1}>
                <motion.div
                  className="bg-white rounded-diagonal-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="relative h-64 overflow-hidden">
                    {/* Current image */}
                    <Image
                      src={item.images[carouselIndices[item.id] || 0]}
                      alt={item.title}
                      className="object-cover group-hover:scale-105"
                      style={{
                        opacity: 1 - (fadeProgress[item.id] || 0)
                      }}
                      fill
                    />
                    {/* Next image (for cross-fade) */}
                    {item.images.length > 1 && (
                      <Image
                        src={item.images[((carouselIndices[item.id] || 0) + 1) % item.images.length]}
                        alt={item.title}
                        className="object-cover group-hover:scale-105"
                        style={{
                          opacity: fadeProgress[item.id] || 0
                        }}
                        fill
                      />
                    )}
                    {item.images.length > 1 && (
                      <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                        +{item.images.length - 1}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <div className="h-12 mb-3">
                      <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                    </div>
                    <span className="inline-block bg-[#da6f00] text-white px-3 py-1 rounded text-xs">
                      {item.category}
                    </span>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Image Gallery */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-diagonal-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-2xl font-semibold text-gray-800">{selectedItem.title}</h3>
              <button
                onClick={() => {
                  setSelectedItem(null);
                  setSelectedImageIndex(0);
                }}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              <div className="relative h-96 mb-4 rounded-diagonal overflow-hidden">
                <Image
                  src={selectedItem.images[selectedImageIndex]}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
                
                {/* Navigation buttons */}
                {selectedItem.images.length > 1 && (
                  <>
                    {/* Previous button */}
                    <button
                      onClick={() => setSelectedImageIndex(
                        selectedImageIndex === 0 
                          ? selectedItem.images.length - 1 
                          : selectedImageIndex - 1
                      )}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    {/* Next button */}
                    <button
                      onClick={() => setSelectedImageIndex(
                        selectedImageIndex === selectedItem.images.length - 1 
                          ? 0 
                          : selectedImageIndex + 1
                      )}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
              
              {selectedItem.images.length > 1 && (
                <div className="flex gap-2 justify-center">
                  {selectedItem.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === selectedImageIndex ? 'bg-[#da6f00]' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              )}
              
              <p className="text-gray-600 mt-4 text-center">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 