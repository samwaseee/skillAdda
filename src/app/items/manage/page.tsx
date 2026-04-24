'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Trash2, Eye } from 'lucide-react';
import toast from 'react-hot-toast';
import { mockWorkshops } from '@/src/lib/data';
import ProtectedRoute from '@/src/components/ProtectedRoute';
import { useAuth } from '@/src/context/AuthContext';

export default function ManageWorkshopsPage() {
  const {user} = useAuth();

  const [workshops, setWorkshops] = useState(
    mockWorkshops.filter(workshop => workshop.ownerEmail === user?.email)
  );

  const handleDelete = (id: string) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this workshop?');
    
    if (isConfirmed) {
      setWorkshops(workshops.filter((workshop) => workshop.id !== id));
      toast.success('Workshop deleted successfully!');
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Manage Workshops</h1>
              <p className="text-gray-600 mt-2">View, edit, or remove your published events.</p>
            </div>
            <Link 
              href="/items/add"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition shadow-sm text-center"
            >
              + Create New Event
            </Link>
          </div>

          {/* Desktop Table View (Hidden on very small screens) */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Workshop Title</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {workshops.length > 0 ? (
                  workshops.map((workshop) => (
                    <tr key={workshop.id} className="hover:bg-slate-50 transition">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img className="h-10 w-10 rounded-lg object-cover" src={workshop.imageUrl} alt="" />
                          <div className="ml-4">
                            <div className="text-sm font-bold text-gray-900">{workshop.title}</div>
                            <div className="text-sm text-gray-500">{workshop.category}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {new Date(workshop.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          {workshop.location}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-3">
                          <Link 
                            href={`/items/${workshop.id}`}
                            className="text-blue-600 hover:text-blue-900 flex items-center bg-blue-50 px-3 py-1.5 rounded-md transition"
                          >
                            <Eye className="w-4 h-4 mr-1" /> View
                          </Link>
                          <button 
                            onClick={() => handleDelete(workshop.id)}
                            className="text-red-600 hover:text-red-900 flex items-center bg-red-50 px-3 py-1.5 rounded-md transition"
                          >
                            <Trash2 className="w-4 h-4 mr-1" /> Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                      No workshops found. Start by creating one!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </ProtectedRoute>
  );
}