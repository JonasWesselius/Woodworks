'use client';

import { useState } from 'react';
import ContactModal from './ContactModal';

interface OfferteButtonProps {
  className?: string;
  selectedService?: string;
}

const OfferteButton = ({ className, selectedService }: OfferteButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`${className} button-hover`}
      >
        Offerte Aanvragen
      </button>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedService={selectedService}
      />
    </>
  );
};

export default OfferteButton; 