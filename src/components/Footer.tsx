import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="wood-pattern text-white relative">
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-center">
          <div className="md:text-left">
            <h3 className="text-xl font-bold mb-4">Woodworks</h3>
            <p className="text-gray-300">
              Specialist in houtbewerking en vakmanschap
            </p>
          </div>
          <div className="md:text-left">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300">
              Email: info@woodworkstimmerwerk.nl<br />
              Tel: 085 303 1727<br />
              Adres: Prins Hendrikstraat 5<br />
              Postcode: 5151GA Drunen
            </p>
          </div>
          <div className="md:text-left">
            <h3 className="text-xl font-bold mb-4">Diensten</h3>
            <ul className="text-gray-300 space-y-2">
              {[
                ['Aanbouw', '/services/aanbouw'],
                ['Overkapping', '/services/overkapping'],
                ['Verbouwen', '/services/verbouwen'],
                ['Renovatie', '/services/renovatie'],
              ].map(([name, href]) => (
                <li key={name}>
                  <Link href={href} className="hover:text-[#da6f00] transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300 text-sm">
          <p>&copy; {new Date().getFullYear()} J.Wesselius</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 