'use client';

import React from 'react';
import Image from 'next/image';
import PageBanner from './PageBanner';
import FadeIn from './animations/FadeIn';

interface ProjectTemplateProps {
  title: string;
  description: string;
  category: string;
  location?: string;
  year?: string;
  features?: string[];
  images: string[];
}

const ProjectTemplate = ({ 
  title, 
  description, 
  category, 
  location, 
  year, 
  features = [],
  images = ['/placeholderSquare.jpeg']
}: ProjectTemplateProps) => {
  return (
    <>
      <PageBanner 
        title={title}
        subtitle={`${category} Project`}
      />
      <div className="py-16 bg-white/95">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn direction="left">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-[#da6f00] mb-4">Over dit project</h2>
                  <p className="text-gray-700">{description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {location && (
                    <div>
                      <h3 className="font-semibold text-gray-900">Locatie</h3>
                      <p className="text-gray-700">{location}</p>
                    </div>
                  )}
                  {year && (
                    <div>
                      <h3 className="font-semibold text-gray-900">Jaar</h3>
                      <p className="text-gray-700">{year}</p>
                    </div>
                  )}
                </div>

                {features.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Kenmerken</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="space-y-6">
                {images.map((image, index) => (
                  <div key={index} className="aspect-video relative rounded-diagonal-lg overflow-hidden shadow-lg">
                    <Image
                      src={image}
                      alt={`${title} - Afbeelding ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectTemplate; 