import Link from "next/link";
import { ArrowRight, Code, Shield, Cpu, Layout, Zap, Users, Award, Star, MessageSquare } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden border-b border-gray-100 min-h-[80vh] flex items-center">
        
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=80" 
            alt="Students collaborating at a tech workshop" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-b from-white/80 via-white/70 to-slate-50 backdrop-blur-[1px]"></div>
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 w-full">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
              Level Up Your <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">Tech Career</span>
            </h1>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed font-medium">
              Discover localized bootcamps, intensive coding workshops, and advanced tech seminars happening right near you. Learn from the best, build your network, and secure your future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link 
                href="/items" 
                className="w-full sm:w-auto flex items-center justify-center bg-blue-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200"
              >
                Explore Workshops <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/about" 
                className="w-full sm:w-auto flex items-center justify-center bg-white/80 backdrop-blur-sm text-gray-800 border border-gray-200 px-8 py-3.5 rounded-xl font-bold hover:bg-white transition shadow-sm"
              >
                Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trending Categories Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Trending Technologies</h2>
          <p className="text-gray-500 mt-2">Find workshops tailored to your specific stack.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition group cursor-pointer">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Code className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Web Development</h3>
            <p className="text-sm text-gray-500">React, Next.js & Node</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition group cursor-pointer">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">AI & Data Science</h3>
            <p className="text-sm text-gray-500">Federated Learning & LLMs</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition group cursor-pointer">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Cybersecurity</h3>
            <p className="text-sm text-gray-500">NIDS & Threat Modeling</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition group cursor-pointer">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Layout className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">UI/UX Design</h3>
            <p className="text-sm text-gray-500">Figma & Prototyping</p>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us Section */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Driven</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with local peers and mentors. Learning is always better when you are part of an active engineering community.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hands-On Practice</h3>
              <p className="text-gray-600 leading-relaxed">
                No more tutorial hell. Dive straight into practical application, progressive overload for your brain, and robust system architecture.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Instructors</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn directly from industry professionals, researchers, and senior developers who are actively building in the trenches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Partner Workshop Reviews */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center">
              <MessageSquare className="w-8 h-8 mr-3 text-blue-400" />
              Verified Attendee Reviews
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
              Don't just take our word for it. Here is what students and developers are saying about the partner workshops featured on our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative hover:-translate-y-1 transition-transform duration-300">
              <div className="flex text-yellow-400 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-slate-300 leading-relaxed mb-6 italic">
                "I was struggling to find local resources on advanced machine learning. I found Dr. Hasan Mahmud's Federated Learning seminar through SkillAdda, and the hands-on sessions were exactly what I needed for my research thesis."
              </p>
              <div>
                <h4 className="font-bold text-white">Tahsin R.</h4>
                <p className="text-sm text-blue-400">Attended: AI & Data Seminar (Chattogram)</p>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative hover:-translate-y-1 transition-transform duration-300">
              <div className="flex text-yellow-400 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-slate-300 leading-relaxed mb-6 italic">
                "SkillAdda made it so easy to discover tech events in Dhaka. The App Router mastery class by Farhan Ahmed was intense but incredibly well-structured. It literally helped me pass my technical interview."
              </p>
              <div>
                <h4 className="font-bold text-white">Nabil A.</h4>
                <p className="text-sm text-blue-400">Attended: Next.js Bootcamp (Dhaka)</p>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative hover:-translate-y-1 transition-transform duration-300">
              <div className="flex text-yellow-400 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 text-slate-600 fill-current" />
              </div>
              <p className="text-slate-300 leading-relaxed mb-6 italic">
                "Finding hands-on cybersecurity training is tough. The NIDS and Threat Modeling workshop I registered for via this platform was fantastic. Great instructors and an awesome networking opportunity."
              </p>
              <div>
                <h4 className="font-bold text-white">Sadia I.</h4>
                <p className="text-sm text-blue-400">Attended: Cyber Defense Workshop</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}