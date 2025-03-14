"use client";

import React, { useState } from 'react';
import PageBanner from '@/components/PageBanner';
import GoogleMap from '@/components/GoogleMap';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <>
      <PageBanner 
        title="Contact"
        subtitle="Neem contact met ons op voor een vrijblijvende offerte"
      />
      <div className="py-16 bg-[#f7f5f2]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl font-bold mb-8 text-gray-800">Contact</h1>
              <p className="text-gray-700 mb-8">
                Heeft u vragen of wilt u een offerte aanvragen? Neem contact met ons op
                via onderstaand formulier of gebruik onze contactgegevens.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#da6f00]">Contactgegevens</h3>
                <p className="text-gray-700">
                  Email: info@woodworkstimmerwerk.nl<br />
                  Tel: 085 303 1727<br />
                  Adres: Prins Hendrikstraat 5<br />
                  5151GA Drunen
                </p>
              </div>

              <GoogleMap />
            </div>

            <div className="bg-white rounded-diagonal-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Naam</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-diagonal focus:outline-none focus:ring-2 focus:ring-[#da6f00]"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-diagonal focus:outline-none focus:ring-2 focus:ring-[#da6f00]"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Telefoon</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border rounded-diagonal focus:outline-none focus:ring-2 focus:ring-[#da6f00]"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="service" className="block text-gray-700 mb-2">Dienst</label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 border rounded-diagonal focus:outline-none focus:ring-2 focus:ring-[#da6f00]"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    required
                  >
                    <option value="">Selecteer een dienst</option>
                    <option value="aanbouw">Aanbouw</option>
                    <option value="overkapping">Overkapping</option>
                    <option value="verbouwen">Verbouwen</option>
                    <option value="renovatie">Renovatie</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Bericht</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border rounded-diagonal focus:outline-none focus:ring-2 focus:ring-[#da6f00]"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#da6f00] text-white py-2 px-4 rounded-diagonal hover:bg-[#b25900] transition-colors button-hover"
                >
                  Verstuur Bericht
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 