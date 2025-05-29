import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import InfoCard from './components/InfoCard';
import Map from './components/Map';
import TrackingSection from './components/TrackingSection';
import ServicesSection from './components/ServicesSection';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className=" text-center text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-red-600 text-red-500">Suivez</span> votre colis en toute <span className="text-blue-400">Confiance</span>
            </h1>
            
            <p className="text-center text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              Expédition rapide et fiable dans le monde entier avec suivi en temps réel et mises à jour de livraison pour vos colis importants.
            </p>
            <div className="grid md:grid-row-3 gap-8">
              
              <InfoCard />
              <Map />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
