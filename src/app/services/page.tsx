'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageBanner from '@/components/PageBanner';
import FadeIn from '@/components/animations/FadeIn';
import OfferteButton from '@/components/OfferteButton';

export default function Services() {
  const mainServices = [
    {
      title: 'Aanbouwen',
      description: 'Uitbreiding van uw woning met hoogwaardige aanbouwen die perfect aansluiten bij uw bestaande architectuur.',
      href: '/services/aanbouwen',
      image: '/placeholderSquare.jpeg',
      features: ['Maatwerk ontwerp', 'Hoogwaardige materialen', 'Professionele uitvoering']
    },
    {
      title: 'Overkappingen',
      description: 'Prachtige overkappingen voor uw terras of tuin, perfect voor extra leefruimte en beschutting.',
      href: '/services/overkappingen',
      image: '/placeholderSquare.jpeg',
      features: ['Weerbestendig', 'Duurzame constructie', 'Verschillende stijlen']
    },
    {
      title: 'Badkamers',
      description: 'Complete badkamerrenovaties en nieuwbouw, van ontwerp tot oplevering met oog voor detail.',
      href: '/services/badkamers',
      image: '/placeholderSquare.jpeg',
      features: ['Modern design', 'Kwaliteitsmaterialen', 'Volledige afwerking']
    },
    {
      title: 'Ruwbouw en Constructie',
      description: 'Fundamentele bouwwerkzaamheden en constructieve elementen voor uw project.',
      href: '/services/ruwbouw',
      image: '/placeholderSquare.jpeg',
      features: ['Constructieve expertise', 'Bouwtechnische kennis', 'Kwaliteitscontrole']
    },
    {
      title: 'Meubilair',
      description: 'Maatwerk meubilair, deuren en kozijnen op maat voor uw specifieke wensen en ruimte.',
      href: '/services/meubilair',
      image: '/placeholderSquare.jpeg',
      features: ['Maatwerk', 'Deuren en kozijnen', 'Hoogwaardige afwerking']
    }
  ];

  const subServices = [
    {
      title: 'Loodgieterij',
      description: 'Professionele loodgieterswerkzaamheden voor al uw sanitair en waterleidingen.',
      href: '/services/loodgieterij',
      image: '/placeholderSquare.jpeg',
      features: ['Sanitair', 'Waterleidingen', 'Onderhoud']
    },
    {
      title: 'Daken',
      description: 'Dakwerkzaamheden, reparaties en onderhoud van alle soorten daken.',
      href: '/services/daken',
      image: '/placeholderSquare.jpeg',
      features: ['Dakreparaties', 'Onderhoud', 'Nieuwe daken']
    },
    {
      title: 'Vloeren',
      description: 'Vloerwerkzaamheden en afwerkingen voor binnen en buiten.',
      href: '/services/vloeren',
      image: '/placeholderSquare.jpeg',
      features: ['Binnen- en buitenvloeren', 'Afwerking', 'Onderhoud']
    },
    {
      title: 'Wand- en Gevelbekleding',
      description: 'Interieur en exterieur wandafwerkingen en gevelbekleding.',
      href: '/services/wandbekleding',
      image: '/placeholderSquare.jpeg',
      features: ['Interieur wanden', 'Gevelbekleding', 'Afwerking']
    },
    {
      title: 'Huizen (Volledig)',
      description: 'Complete huizenbouw en volledige renovaties van begin tot eind.',
      href: '/services/huizen',
      image: '/placeholderSquare.jpeg',
      features: ['Volledige bouw', 'Renovaties', 'Projectmanagement']
    }
  ];

  return (
    <>
      <PageBanner 
        title="Onze Diensten"
        subtitle="Specialist in vakkundig houtwerk en renovatie"
      />
      <div className="py-16 bg-[#f7f5f2]">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-[#da6f00]">
                Wat kunnen wij voor u betekenen?
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto text-lg">
                Met jarenlange ervaring in houtbewerking en renovatie bieden wij een breed scala aan diensten. 
                Van kleine reparaties tot grote verbouwingen, wij zorgen voor kwaliteit en vakmanschap.
              </p>
            </div>
          </FadeIn>

          {/* Main Services */}
          <FadeIn>
            <h3 className="text-2xl font-bold mb-8 text-[#da6f00] text-center">Hoofddiensten</h3>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {mainServices.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.1}>
                <div className="bg-white rounded-diagonal-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-[#da6f00]">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <span className="text-[#da6f00] mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center">
                      <Link
                        href={service.href}
                        className="text-[#da6f00] font-semibold hover:text-[#b25900] transition-colors"
                      >
                        Meer informatie →
                      </Link>
                      <OfferteButton 
                        className="bg-[#da6f00] text-white px-4 py-2 rounded-diagonal hover:bg-[#b25900] transition-colors text-sm"
                        selectedService={service.title}
                      />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Sub Services */}
          <FadeIn>
            <h3 className="text-2xl font-bold mb-8 text-[#da6f00] text-center">Specialisaties</h3>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {subServices.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.1}>
                <div className="bg-white rounded-diagonal-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-[#da6f00]">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <span className="text-[#da6f00] mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center">
                      <Link
                        href={service.href}
                        className="text-[#da6f00] font-semibold hover:text-[#b25900] transition-colors"
                      >
                        Meer informatie →
                      </Link>
                      <OfferteButton 
                        className="bg-[#da6f00] text-white px-4 py-2 rounded-diagonal hover:bg-[#b25900] transition-colors text-sm"
                        selectedService={service.title}
                      />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="text-center bg-white rounded-diagonal-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#da6f00]">
                Heeft u een specifiek project in gedachten?
              </h3>
              <p className="text-gray-700 mb-6">
                Neem contact met ons op voor een vrijblijvende offerte. 
                Wij bespreken graag uw wensen en mogelijkheden.
              </p>
              <OfferteButton 
                className="bg-[#da6f00] text-white px-8 py-3 rounded-diagonal hover:bg-[#b25900] transition-colors"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
} 