import Link from 'next/link';
import { MapPin, Calendar, User } from 'lucide-react';
import { Workshop } from '../lib/data';
export default function WorkshopCard({ workshop }: { workshop: Workshop }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
      {/* Image Container */}
      <div className="h-48 overflow-hidden relative">
        <img 
          src={workshop.imageUrl} 
          alt={workshop.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-600 shadow-sm">
          {workshop.category}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {workshop.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-2">
          {workshop.shortDescription}
        </p>

        {/* Info Tags */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2 text-orange-500" />
            {new Date(workshop.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-2 text-orange-500" />
            {workshop.location}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <User className="w-4 h-4 mr-2 text-orange-500" />
            {workshop.instructor}
          </div>
        </div>

        {/* Footer / CTA */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
          <span className="font-bold text-lg text-gray-900">
            {workshop.price === 0 ? 'Free' : `৳${workshop.price}`}
          </span>
          <Link 
            href={`/items/${workshop.id}`}
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition"
          >
            View Details &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}