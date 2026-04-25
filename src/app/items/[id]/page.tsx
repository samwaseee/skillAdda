import { db } from '@/src/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, User, DollarSign } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Workshop } from '@/src/lib/data';

export default async function ItemDetails({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;

  // Fetch the single document from Firestore using the ID from the URL
  const docRef = doc(db, 'workshops', resolvedParams.id);
  const docSnap = await getDoc(docRef);

  // If the ID doesn't exist in the database, show the 404 page
  if (!docSnap.exists()) {
    notFound();
  }

  // Combine the Firestore ID with the document data
  const workshop = { id: docSnap.id, ...docSnap.data() } as Workshop;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        <Link 
          href="/items" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold mb-8 transition"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Workshops
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
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

            <div className="prose prose-blue max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Workshop</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {workshop.fullDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}