import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const Map = () => {
  const address = "123 Global Avenue, New York, NY 10001, USA";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  // Static map URL with custom styling to match the design
  const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(address)}&zoom=14&size=800x400&scale=2&maptype=roadmap&style=feature:water|color:0x9CC3F2&style=feature:landscape|color:0xC2DAF8&style=feature:road|color:0xFFFFFF`;

  return (
    <div className="rounded-lg overflow-hidden shadow-md flex flex-col h-full">
      <a 
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-gray-300 h-80 md:h-[350px] w-full hover:opacity-90 transition-opacity cursor-pointer group"
      >
        {/* Map preview image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/${address}/14/800x400?access_token=YOUR_MAPBOX_TOKEN')`
          }}
        />
        <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-10 transition-opacity"></div>
        <div className="absolute bottom-4 right-4">
          <div className="bg-white rounded-full p-2 shadow-md">
            <MapPin size={24} className="text-blue-900" />
          </div>
        </div>
      </a>
      <div className="p-4 bg-white">
        <a 
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-blue-900 hover:text-blue-500 transition-colors font-medium"
        >
          Get Directions <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default Map;