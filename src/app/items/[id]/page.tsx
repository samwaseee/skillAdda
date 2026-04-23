import { mockWorkshops } from '@/src/lib/data';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, User, Tag, DollarSign } from 'lucide-react';
import { notFound } from 'next/navigation';

export default async function ItemDetails({ params }: { params: Promise<{ id: string }> }) {
  // In Next.js 16+, params is a Promise that must be awaited
  const resolvedParams = await params;
  const workshop = mockWorkshops.find((w) => w.id === resolvedParams.id);

  // If the URL has an ID that doesn't exist, show a 404 page
  if (!workshop) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button */}
        <Link 
          href="/items" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold mb-8 transition"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Workshops
        </Link>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Hero Image */}
          <div className="h-72 sm:h-96 w-full relative">
            <img 
              src={workshop.imageUrl} 
              alt={workshop.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-blue-600 shadow-sm">
              {workshop.category}
            </div>
          </div>

          <div className="p-8 sm:p-12">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
              {workshop.title}
            </h1>

            {/* Key Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 bg-slate-50 p-6 rounded-xl border border-slate-100">
              <div className="flex items-center text-gray-700">
                <Calendar className="w-5 h-5 mr-3 text-orange-500" />
                <span className="font-medium">
                  {new Date(workshop.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin className="w-5 h-5 mr-3 text-orange-500" />
                <span className="font-medium">{workshop.location}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <User className="w-5 h-5 mr-3 text-orange-500" />
                <span className="font-medium">Instructor: {workshop.instructor}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <DollarSign className="w-5 h-5 mr-3 text-orange-500" />
                <span className="font-medium">
                  {workshop.price === 0 ? 'Free to Attend' : `Registration: ৳${workshop.price}`}
                </span>
              </div>
            </div>

            {/* Full Description */}
            <div className="prose prose-blue max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Workshop</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {workshop.fullDescription}
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">What you will learn:</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-8">
                <li>Comprehensive understanding of {workshop.category} core principles.</li>
                <li>Hands-on practical experience with modern development tools.</li>
                <li>Networking opportunities with local tech professionals.</li>
              </ul>
            </div>

            {/* CTA Button */}
            <div className="mt-10 pt-8 border-t border-gray-100 flex justify-center sm:justify-start">
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-orange-600 transition shadow-md w-full sm:w-auto">
                Enroll Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}