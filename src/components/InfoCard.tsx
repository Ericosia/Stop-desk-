import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const InfoCard = () => {
  return (
    <div className="max-w-3xl bg-white p-8 rounded-lg shadow-md relative"> 
      <h3 className="text-2xl font-bold text-blue-500 mb-6">WorldExpress Headquarters</h3>

      <div className="space-y-6 relative">
        {/* Vertical Line */}
        <div className="absolute left-[13px] top-[10px] w-[2px] h-[calc(100%-20px)] bg-red-300" />
        
        <div className="flex items-start relative">
          <div className="mr-4 mt-1 z-10 bg-white rounded-full p-1">
            <MapPin className="h-5 w-5 text-red-500" />
          </div>
          <div>
            <h4 className="font-semibold text-blue-500">Location</h4>
            <p className="text-gray-700">International Business Center</p>
            <p className="text-gray-700">123 Global Avenue, Floor 7</p>
            <p className="text-gray-700">New York, NY 10001, USA</p>
          </div>
        </div>

        <div className="flex items-start relative">
          <div className="mr-4 mt-1 z-10 bg-white rounded-full p-1">
            <Phone className="h-5 w-5 text-red-500" />
          </div>
          <div>
            <h4 className="font-semibold text-blue-500">Telephone</h4>
            <p className="text-gray-700">+1 (212) 555-7890</p>
            <p className="text-gray-600 text-sm">Customer service available Monday to Friday</p>
          </div>
        </div>

        <div className="flex items-start relative">
          <div className="mr-4 mt-1 z-10 bg-white rounded-full p-1">
            <Mail className="h-5 w-5 text-red-500" />
          </div>
          <div>
            <h4 className="font-semibold text-blue-500">Email</h4>
            <p className="text-gray-700">contact@worldexpress.com</p>
          </div>
        </div>

        <div className="flex items-start relative">
          <div className="mr-4 mt-1 z-10 bg-white rounded-full p-1">
            <Clock className="h-5 w-5 text-red-500" />
          </div>
          <div>
            <h4 className="font-semibold text-blue-500">Business Hours</h4>
            <div className="grid grid-cols-2 gap-x-4 text-gray-700">
              <span>Monday - Friday:</span>
              <span>8:00 - 18:00</span>
              <span>Saturday:</span>
              <span>9:00 - 14:00</span>
              <span>Sunday:</span>
              <span>Closed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
