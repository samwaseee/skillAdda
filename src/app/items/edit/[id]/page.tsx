'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { Save, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import ProtectedRoute from '@/src/components/ProtectedRoute';
import { db } from '@/src/lib/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useAuth } from '@/src/context/AuthContext';

export default function EditWorkshopPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { user } = useAuth();
  const resolvedParams = use(params);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const [formData, setFormData] = useState({
    title: '',
    shortDescription: '',
    fullDescription: '',
    category: 'Web Dev',
    location: 'Dhaka',
    date: '',
    price: '',
    instructor: '',
    imageUrl: '',
  });

  // 1. Fetch the existing data to pre-fill the form
  useEffect(() => {
    const fetchWorkshop = async () => {
      try {
        const docRef = doc(db, 'workshops', resolvedParams.id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          // Security check: only the owner can edit
          if (data.ownerEmail !== user?.email) {
            toast.error("You do not have permission to edit this workshop.");
            router.push('/items/manage');
            return;
          }
          
          setFormData({
            title: data.title || '',
            shortDescription: data.shortDescription || '',
            fullDescription: data.fullDescription || '',
            category: data.category || 'Web Dev',
            location: data.location || 'Dhaka',
            date: data.date || '',
            price: data.price.toString() || '0',
            instructor: data.instructor || '',
            imageUrl: data.imageUrl || '',
          });
        } else {
          toast.error("Workshop not found.");
          router.push('/items/manage');
        }
      } catch (error) {
        toast.error("Failed to fetch workshop details.");
      } finally {
        setIsLoading(false);
      }
    };

    if (user) {
      fetchWorkshop();
    }
  }, [resolvedParams.id, user, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 2. Update the document in Firestore
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const workshopRef = doc(db, 'workshops', resolvedParams.id);
      await updateDoc(workshopRef, {
        ...formData,
        price: Number(formData.price),
        updatedAt: new Date().toISOString(), // Good practice to track updates
      });
      
      toast.success('Workshop updated successfully!');
      router.push('/items/manage');
    } catch (error) {
      console.error(error);
      toast.error('Failed to update workshop.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          
          <Link 
            href="/items/manage" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold mb-8 transition"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Manage
          </Link>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-amber-600 px-8 py-6 text-white">
              <h1 className="text-2xl font-extrabold tracking-tight">Edit Workshop</h1>
              <p className="text-amber-100 mt-1">Update the details of your event below.</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Workshop Title *</label>
                <input type="text" name="title" required value={formData.title} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Instructor Name *</label>
                <input type="text" name="instructor" required value={formData.instructor} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Short Description *</label>
                <input type="text" name="shortDescription" required value={formData.shortDescription} onChange={handleChange} maxLength={100} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                  <select name="category" value={formData.category} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition">
                    <option value="Web Dev">Web Dev</option>
                    <option value="AI & Data">AI & Data</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="UI/UX">UI/UX</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
                  <select name="location" value={formData.location} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition">
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chattogram">Chattogram</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Online">Online</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
                  <input type="date" name="date" required value={formData.date} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price (৳) *</label>
                  <input type="number" name="price" required min="0" value={formData.price} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Description *</label>
                <textarea name="fullDescription" required rows={4} value={formData.fullDescription} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition resize-none"></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image URL (Optional)</label>
                <input type="url" name="imageUrl" value={formData.imageUrl} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition" />
              </div>

              <div className="pt-4 border-t border-gray-100">
                <button type="submit" disabled={isSubmitting} className="w-full bg-blue-500 sm:w-auto flex items-center justify-center text-white px-8 py-3 rounded-xl font-bold hover:bg-amber-700 transition shadow-sm disabled:opacity-70">
                  {isSubmitting ? 'Saving Changes...' : <><Save className="w-5 h-5 mr-2" /> Update Workshop</>}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </ProtectedRoute>
  );
}