import { Users, Target, Zap } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            About <span className="text-blue-600">SkillAdda</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Bridging the gap between ambitious computer science engineers and the practical skills needed to thrive in the modern tech industry.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-10 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Target className="w-6 h-6 mr-3 text-orange-500" />
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded right here in Chattogram, SkillAdda was created to solve a simple problem: finding high-quality, localized tech workshops shouldn't be difficult. 
                Whether you are diving into advanced machine learning architectures, mastering Next.js, or securing enterprise networks, we bring the best local experts directly to you.
              </p>
              <Link 
                href="/items"
                className="inline-block bg-blue-50 text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition w-fit"
              >
                Explore Upcoming Events &rarr;
              </Link>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="Team working together" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Core Team Section */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center">
              <Users className="w-8 h-8 mr-3 text-blue-600" />
              Meet the Core Team
            </h2>
            <p className="text-gray-600 mt-2">The developers and engineers behind the platform.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                SI
              </div>
              <h3 className="font-bold text-gray-900">Sazidul Islam Hira</h3>
              <p className="text-sm text-gray-500">Security & Infrastructure Lead</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                TI
              </div>
              <h3 className="font-bold text-gray-900">Md. Tasin Islam</h3>
              <p className="text-sm text-gray-500">UI/UX Architect</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                OA
              </div>
              <h3 className="font-bold text-gray-900">Md. Obaidul Amin</h3>
              <p className="text-sm text-gray-500">Threat Modeling Expert</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}