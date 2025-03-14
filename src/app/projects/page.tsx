'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageBanner from '@/components/PageBanner';
import FadeIn from '@/components/animations/FadeIn';

const projects = [
  {
    title: 'Moderne Aanbouw',
    description: 'Een strakke aanbouw met veel lichtinval en moderne afwerking. Perfect geïntegreerd met de bestaande woning.',
    imageUrl: '/placeholderSquare.jpeg',
    category: 'Aanbouw',
    href: '/projects/moderne-aanbouw'
  },
  {
    title: 'Luxe Overkapping',
    description: 'Sfeervolle overkapping met ingebouwde verlichting en verwarmingselementen voor optimaal comfort.',
    imageUrl: '/placeholderSquare.jpeg',
    category: 'Overkapping',
    href: '/projects/luxe-overkapping'
  },
  {
    title: "Moderne Tuinkamer",
    description: "Een lichte en ruime tuinkamer die perfect aansluit bij de bestaande woning. Uitgevoerd met grote glazen schuifdeuren en een strak houten plafond.",
    imageUrl: '/placeholderSquare.jpeg',
    category: "Aanbouw",
    href: '/projects/moderne-tuinkamer',
    location: "Waalwijk",
    year: "2023"
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <>
      <PageBanner 
        title="Onze Projecten"
        subtitle="Ontdek onze recente werkzaamheden"
      />
      <div className="py-16 bg-[#f7f5f2]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <FadeIn key={project.title} delay={index * 0.1}>
                <div className="bg-white rounded-diagonal-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-[1.02] flex flex-col h-full">
                  <div className="relative h-64">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-sm text-[#da6f00] font-semibold">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800 mt-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mt-2 flex-grow">
                      {project.description}
                    </p>
                    <Link 
                      href={project.href}
                      className="text-[#da6f00] font-semibold hover:text-[#b25900] mt-4 inline-block"
                    >
                      Bekijk Project →
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 