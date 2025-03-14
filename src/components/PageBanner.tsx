'use client';

import React from 'react';

interface PageBannerProps {
  title: string;
  subtitle?: string;
}

const PageBanner = ({ title, subtitle }: PageBannerProps) => {
  return (
    <div className="relative h-[40vh] flex items-center bg-black/50 pt-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        {subtitle && <p className="text-xl text-white/90">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageBanner; 