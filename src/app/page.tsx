import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/components/animations/FadeIn';
import OfferteButton from '@/components/OfferteButton';
import ReviewCard from '@/components/ReviewCard';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function Home() {
  // Add this before the Reviews Section
  const reviews = [
    {
      name: "Peter de Vries",
      review: "Uitstekend werk geleverd bij onze aanbouw. Zeer professioneel team dat kwaliteit en klanttevredenheid hoog in het vaandel heeft staan.",
      project: "Aanbouw",
      projectLink: "/projects/moderne-aanbouw",
      rating: 5,
      date: "2 weken geleden"
    },
    {
      name: "Lisa Jansen",
      review: "Onze nieuwe overkapping is precies zoals we het wilden. Het hele proces van ontwerp tot uitvoering verliep soepel en volgens planning.",
      project: "Overkapping",
      projectLink: "/projects/luxe-overkapping",
      rating: 5,
      date: "1 maand geleden"
    },
    {
      name: "Mark Bakker",
      review: "De renovatie van onze woning is vakkundig uitgevoerd. Het team denkt goed mee en komt met praktische oplossingen.",
      project: "Renovatie",
      projectLink: "/projects/renovatie-woning",
      rating: 5,
      date: "1 maand geleden"
    }
  ];

  // Calculate average rating
  const averageRating = (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <FadeIn direction="right">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Woodworks
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Specialist in vakkundig houtwerk en renovatie
              </p>
              <OfferteButton 
                className="bg-[#da6f00] text-white px-8 py-3 rounded-diagonal hover:bg-[#b25900]"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white/95">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12 text-[#da6f00]">Onze Diensten</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Aanbouw', href: '/services/aanbouw' },
              { title: 'Overkapping', href: '/services/overkapping' },
              { title: 'Verbouwen', href: '/services/verbouwen' },
              { title: 'Renovatie', href: '/services/renovatie' },
            ].map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.2}>
                <Link
                  href={service.href}
                  className="group block h-full"
                >
                  <div className="bg-white p-6 rounded-diagonal shadow-lg transition-all transform hover:scale-105 hover:shadow-xl border border-gray-100">
                    <h3 className="text-xl font-semibold mb-2 text-[#da6f00]">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      Ontdek meer over onze {service.title.toLowerCase()} diensten
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-white/95">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#da6f00]">Over Woodworks</h2>
                <p className="text-gray-700 mb-8">
                  Met jarenlange ervaring in houtbewerking en renovatie, staat Woodworks
                  voor kwaliteit en vakmanschap. Wij zorgen ervoor dat uw wensen
                  werkelijkheid worden.
                </p>
                <Link 
                  href="/about"
                  className="text-[#da6f00] font-semibold hover:text-[#b25900] transition-colors mb-12 inline-block"
                >
                  Lees meer over ons →
                </Link>
                
                <div className="grid grid-cols-2 gap-8 mt-12">
                  <div>
                    <h3 className="mb-2">
                      <AnimatedCounter end={150} suffix="+" />
                    </h3>
                    <p className="text-gray-700">Projecten Voltooid</p>
                  </div>
                  <div>
                    <h3 className="mb-2">
                      <AnimatedCounter end={15} suffix="+" />
                    </h3>
                    <p className="text-gray-700">Jaren Ervaring</p>
                  </div>
                  <div>
                    <h3 className="mb-2">
                      <AnimatedCounter end={100} suffix="%" />
                    </h3>
                    <p className="text-gray-700">Klanttevredenheid</p>
                  </div>
                  <div>
                    <h3 className="mb-2">
                      <AnimatedCounter end={50} suffix="+" />
                    </h3>
                    <p className="text-gray-700">Vaste Klanten</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
                <div className="aspect-square rounded-diagonal-lg relative overflow-hidden shadow-xl">
                  <Image
                    src="/placeholderSquare.jpeg"
                    alt="About Woodworks Preview"
                    fill
                    className="object-cover"
                  />
                </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4 text-[#da6f00]">
              Wat Onze Klanten Zeggen
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-6 h-6 ${i < Math.round(Number(averageRating)) ? 'text-[#da6f00]' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-lg font-semibold text-white">{averageRating} / 5.0</span>
            </div>
            <p className="text-white text-center mb-12 max-w-2xl mx-auto">
              Ontdek waarom klanten voor Woodworks kiezen en tevreden zijn met onze dienstverlening
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <FadeIn key={review.name} delay={index * 0.1}>
                <ReviewCard {...review} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#da6f00]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Klaar om uw project te starten?
          </h2>
          <p className="text-white mb-8 text-lg">
            Neem contact met ons op voor een vrijblijvende offerte
          </p>
          <OfferteButton 
            className="bg-white text-[#da6f00] px-8 py-3 rounded-diagonal hover:bg-gray-100 button-hover-white"
          />
        </div>
      </section>
    </div>
  );
}
