'use client';

import React from 'react';
import Image from 'next/image';
import PageBanner from '@/components/PageBanner';
import FadeIn from '@/components/animations/FadeIn';
import OfferteButton from '@/components/OfferteButton';

export default function About() {
  return (
    <>
      <PageBanner 
        title="Over Ons"
        subtitle="Leer meer over ons vakmanschap"
      />
      <div className="py-16 bg-[#f7f5f2]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <FadeIn direction="left">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#da6f00]">Onze Geschiedenis</h2>
                <p className="text-gray-700 mb-6">
                  Al meer dan 20 jaar zijn wij specialist in hoogwaardig houtwerk en renovatie. 
                  Wat begon als een kleine werkplaats is uitgegroeid tot een veelzijdig bedrijf 
                  met een team van ervaren vakmensen.
                </p>
                <p className="text-gray-700 mb-6">
                  Wij staan bekend om onze persoonlijke aanpak en oog voor detail. 
                  Elk project, groot of klein, krijgt onze volledige aandacht.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="relative h-[400px] rounded-diagonal-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholderSquare.jpeg"
                  alt="Woodworks History"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12 text-[#da6f00]">Onze Waarden</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Kwaliteit",
                description: "We streven naar perfectie in elk detail van ons werk."
              },
              {
                title: "Betrouwbaarheid",
                description: "We komen onze afspraken na en communiceren helder."
              },
              {
                title: "Vakmanschap",
                description: "Ons team bestaat uit ervaren professionals."
              }
            ].map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.2}>
                <div className="bg-white p-6 rounded-diagonal shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-[#da6f00]">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6 text-[#da6f00]">
                Klaar om samen te werken?
              </h2>
              <p className="text-gray-700 mb-8">
                Laat ons uw project werkelijkheid maken
              </p>
              <OfferteButton 
                className="bg-[#da6f00] text-white px-8 py-3 rounded-md hover:bg-[#b25900] transition-colors"
              />
            </FadeIn>
          </div>
        </div>
      </div>
    </>
  );
} 