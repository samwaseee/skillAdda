import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-extrabold text-blue-600 tracking-tight">SkillAdda</span>
          </Link>

          {/* Desktop Navigation (4+ routes) */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition">Home</Link>
            <Link href="/items" className="text-gray-600 hover:text-blue-600 font-medium transition">Workshops</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium transition">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 font-medium transition">Contact</Link>
          </nav>

          {/* Auth Button & Mobile Menu Icon */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/login" 
              className="hidden md:inline-flex bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition shadow-sm"
            >
              Login / Register
            </Link>
            
            {/* Mobile Menu Button (Visual Only for now) */}
            <button className="md:hidden p-2 text-gray-600 hover:text-blue-600">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}