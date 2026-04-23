import { mockWorkshops } from '@/src/lib/data';
import WorkshopCard from '@/src/components/WorkshopCard';

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Filters (Placeholders for now) */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Explore Workshops
            </h1>
            <p className="mt-2 text-gray-600">
              Find the perfect tech event to upgrade your skills.
            </p>
          </div>
          
          {/* We will add real interactivity to these filters later */}
          <div className="flex gap-2">
            <select className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Locations</option>
              <option>Dhaka</option>
              <option>Chattogram</option>
            </select>
            <select className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Categories</option>
              <option>Web Dev</option>
              <option>AI & Data</option>
            </select>
          </div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockWorkshops.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </div>

      </div>
    </div>
  );
}