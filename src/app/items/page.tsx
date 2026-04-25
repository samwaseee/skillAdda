'use client';

import { useState, useMemo, useEffect } from 'react';
import { Workshop } from '@/src/lib/data';
import WorkshopCard from '@/src/components/WorkshopCard';
import { Search } from 'lucide-react';
import { db } from '@/src/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function WorkshopsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('All Locations');
  const [categoryFilter, setCategoryFilter] = useState('All Categories');

  const [allWorkshops, setAllWorkshops] = useState<Workshop[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'workshops'));
        const firestoreData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        })) as Workshop[];

        console.log("Data from Firebase:", firestoreData);
        setAllWorkshops(firestoreData);
      } catch (error) {
        console.error("Error fetching from Firestore:", error);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchWorkshops();
  }, []);

  const filteredWorkshops = useMemo(() => {
    if (!allWorkshops) return [];

    return allWorkshops.filter((workshop) => {

      const matchesSearch = (workshop.title || '').toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesLocation = locationFilter === 'All Locations' || workshop.location === locationFilter;
      const matchesCategory = categoryFilter === 'All Categories' || workshop.category === categoryFilter;

      return matchesSearch && matchesLocation && matchesCategory;
    });
  }, [searchQuery, locationFilter, categoryFilter, allWorkshops]); 

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Filters Area */}
        <div className="mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
              Explore Workshops
            </h1>
            <p className="text-gray-600">
              Find the perfect tech event to upgrade your skills.
            </p>
          </div>
          
          {/* Controls: Search & Dropdowns */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            
            {/* Search Bar */}
            <div className="relative grow sm:max-w-xs">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search workshops..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full bg-white border border-gray-200 text-gray-900 py-2.5 px-4 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            {/* Location Filter */}
            <select 
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="bg-white border border-gray-200 text-gray-700 py-2.5 px-4 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer appearance-none"
            >
              <option value="All Locations">All Locations</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Online">Online</option>
            </select>

            {/* Category Filter */}
            <select 
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-white border border-gray-200 text-gray-700 py-2.5 px-4 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer appearance-none"
            >
              <option value="All Categories">All Categories</option>
              <option value="Web Dev">Web Dev</option>
              <option value="AI & Data">AI & Data</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="UI/UX">UI/UX</option>
            </select>
          </div>
        </div>

        {/* The main data */}
        {isLoading ? (
          <div className="py-20 flex flex-col justify-center items-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            <p className="text-gray-500 font-medium">Loading upcoming workshops...</p>
          </div>
        ) : filteredWorkshops.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorkshops.map((workshop) => (
              <WorkshopCard key={workshop.id} workshop={workshop} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">No workshops found</h3>
            <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
            <button 
              onClick={() => {
                setSearchQuery(''); setLocationFilter('All Locations'); setCategoryFilter('All Categories');
              }}
              className="mt-4 text-blue-600 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}