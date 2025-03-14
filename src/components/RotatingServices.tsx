'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

interface Service {
  title: string;
  href: string;
}

interface RotatingServicesProps {
  services: Service[];
}

const RotatingServices = ({ services }: RotatingServicesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [services.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href={services[currentIndex].href}
          className="group block h-full"
        >
          <div className="bg-white p-6 rounded-diagonal shadow-lg transition-all transform hover:scale-105 hover:shadow-xl border border-gray-100">
            <h3 className="text-xl font-semibold mb-2 text-[#da6f00]">
              {services[currentIndex].title}
            </h3>
            <p className="text-gray-600">
              Ontdek meer over onze {services[currentIndex].title.toLowerCase()} diensten
            </p>
          </div>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};

export default RotatingServices; 