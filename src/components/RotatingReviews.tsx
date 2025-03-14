'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ReviewCard from './ReviewCard';

interface Review {
  name: string;
  review: string;
  project: string;
  projectLink: string;
  rating: number;
  date: string;
}

interface RotatingReviewsProps {
  reviews: Review[];
}

const RotatingReviews = ({ reviews }: RotatingReviewsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        <ReviewCard {...reviews[currentIndex]} />
      </motion.div>
    </AnimatePresence>
  );
};

export default RotatingReviews; 