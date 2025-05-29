import React, { useState } from 'react';
import { SearchIcon } from 'lucide-react';

const TrackingSection = () => {
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would connect to a tracking API
    alert(`Tracking number ${trackingNumber} submitted!`);
  };

  return (
    <section id="tracking" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-blue-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Track Your Shipment</h2>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <input
                type="text"
                placeholder="Enter tracking number"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-md transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <SearchIcon size={16} />
              Track
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600 text-center">
            Enter your WorldExpress tracking number to get real-time updates on your shipment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;