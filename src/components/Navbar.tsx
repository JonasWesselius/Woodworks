"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import OfferteButton from './OfferteButton';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const pathname = usePathname();

  const services = [
    { name: 'Aanbouw', href: '/services/aanbouw' },
    { name: 'Overkapping', href: '/services/overkapping' },
    { name: 'Verbouwen', href: '/services/verbouwen' },
    { name: 'Renovatie', href: '/services/renovatie' },
  ];

  const isActive = (path: string) => {
    if (path === '/services' && pathname?.startsWith('/services/')) {
      return true;
    }
    return pathname === path;
  };

  const linkStyle = (path: string) => `
    text-lg transition-colors
    ${isActive(path) 
      ? 'text-[#da6f00] font-semibold' 
      : 'text-gray-700 hover:text-[#da6f00]'}
  `;

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-24 relative z-30 bg-white">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <Image
                src="/LogoWW.png"
                alt="Woodworks Logo"
                width={200}
                height={50}
                className="h-14 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={linkStyle('/')}>
              Home
            </Link>
            <Link href="/about" className={linkStyle('/about')}>
              Over Ons
            </Link>
            <div 
              className="relative group"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <button className={`py-2 ${linkStyle('/services')}`}>
                Diensten
              </button>
              <div 
                className={`absolute z-50 left-0 mt-0 w-56 bg-white rounded-diagonal-lg shadow-lg transition-all duration-300 ${
                  showServices ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-6 py-3 text-base text-gray-700 hover:bg-[#da6f00] hover:text-white"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/projects" className={linkStyle('/projects')}>
              Projecten
            </Link>
            <Link href="/contact" className={linkStyle('/contact')}>
              Contact
            </Link>
            <OfferteButton 
              className="bg-[#da6f00] text-white px-6 py-3 rounded-diagonal hover:bg-[#b25900]"
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#da6f00]"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transform transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-full pointer-events-none'
          } absolute left-0 right-0 bg-white shadow-lg z-20 top-0 pt-24`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              ['Home', '/'],
              ['Over Ons', '/about'],
              ['Diensten', '/services'],
              ['Projecten', '/projects'],
              ['Contact', '#'],
            ].map(([name, href]) => (
              <Link
                key={name}
                href={href}
                onClick={href === '#' ? () => {
                  closeMenu();
                } : closeMenu}
                className="text-gray-700 hover:text-[#da6f00] block px-3 py-2 text-base font-medium"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 