'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageBanner from '@/components/PageBanner';
import FadeIn from '@/components/animations/FadeIn';
import OfferteButton from './OfferteButton';

interface ServiceTemplateProps {
  title: string;
  description: string;
  features: string[];
  imageUrl?: string;
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({
  title,
  description,
  features,
  imageUrl = '/placeholderSquare.jpeg'
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <PageBanner 
        title={title}
        subtitle="Specialist in vakkundig maatwerk"
      />
      <div className="flex-grow py-16 bg-[#f7f5f2]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <FadeIn direction="left">
              <div>
                <p className="text-gray-700 mb-6">{description}</p>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-start"
                    >
                      <span className="text-[#da6f00] mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <OfferteButton 
                  className="inline-block mt-8 bg-[#da6f00] text-white px-6 py-3 rounded-diagonal hover:bg-[#b25900]"
                  selectedService={title}
                />
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative h-[400px] rounded-diagonal-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTemplate; 