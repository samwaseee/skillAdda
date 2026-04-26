'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { Righteous } from 'next/font/google';
import { Menu, User, ChevronDown, LogOut, PlusCircle, LayoutDashboard,X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { auth } from '@/src/lib/firebase';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';
import { useRouter, usePathname } from 'next/navigation';

const righteousLogo = Righteous({
    weight: '400',
    subsets: ['latin']
  });

export default function Navbar() {
  const { user, loading } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const pathname = usePathname();

  const isActive = (path: string) => {

    if (path === '/') return pathname === '/';

    return pathname.startsWith(path);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('Successfully logged out.');
      setIsDropdownOpen(false);
      router.push('/');
    } catch (error) {
      toast.error('Failed to log out.');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className={`text-3xl tracking-wide bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-500 group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-300 ${righteousLogo.className}`}>
              SkillAdda
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 h-full items-center">
            <Link
              href="/"
              className={`h-full flex items-center font-medium transition border-b-2 px-1 mt-0.5 ${isActive('/')
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-blue-600 hover:border-blue-200'
                }`}
            >
              Home
            </Link>
            <Link
              href="/items"
              className={`h-full flex items-center font-medium transition border-b-2 px-1 mt-0.5 ${isActive('/items')
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-blue-600 hover:border-blue-200'
                }`}
            >
              Workshops
            </Link>
            <Link
              href="/about"
              className={`h-full flex items-center font-medium transition border-b-2 px-1 mt-0.5 ${isActive('/about')
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-blue-600 hover:border-blue-200'
                }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`h-full flex items-center font-medium transition border-b-2 px-1 mt-0.5 ${isActive('/contact')
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-blue-600 hover:border-blue-200'
                }`}
            >
              Contact
            </Link>
          </nav>

          {/* Auth State & User Menu */}
          <div className="flex items-center space-x-4">
            {!loading && (
              user ? (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center space-x-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 px-3 py-2 rounded-lg transition"
                  >
                    <div className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {user.email?.charAt(0).toUpperCase() || 'U'}
                    </div>
                    <span className="hidden sm:block text-sm font-medium text-gray-700 max-w-30 truncate">
                      {user.email}
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-2">
                      <div className="px-4 py-2 border-b border-gray-100 mb-1">
                        <p className="text-xs text-gray-500">Signed in as</p>
                        <p className="text-sm font-bold text-gray-900 truncate">{user.email}</p>
                      </div>

                      <Link
                        href="/items/add"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                      >
                        <PlusCircle className="w-4 h-4 mr-3" />
                        Add Workshop
                      </Link>

                      <Link
                        href="/items/manage"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                      >
                        <LayoutDashboard className="w-4 h-4 mr-3" />
                        Manage Workshops
                      </Link>

                      <div className="border-t border-gray-100 mt-1 pt-1">
                        <button
                          onClick={handleLogout}
                          className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition"
                        >
                          <LogOut className="w-4 h-4 mr-3" />
                          Log out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href="/login"
                  className="hidden md:inline-flex bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition shadow-sm"
                >
                  Login / Register
                </Link>
              )
            )}

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* NEW: Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-2 shadow-lg absolute w-full left-0">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`block px-4 py-3 rounded-xl font-medium ${isActive('/') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'}`}>
            Home
          </Link>
          <Link href="/items" onClick={() => setIsMobileMenuOpen(false)} className={`block px-4 py-3 rounded-xl font-medium ${isActive('/items') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'}`}>
            Workshops
          </Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className={`block px-4 py-3 rounded-xl font-medium ${isActive('/about') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'}`}>
            About
          </Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`block px-4 py-3 rounded-xl font-medium ${isActive('/contact') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'}`}>
            Contact
          </Link>

          <div className="pt-4 mt-4 border-t border-gray-100">
            {!loading && !user && 
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="flex justify-center w-full bg-blue-600 text-white px-5 py-3 rounded-xl font-bold hover:bg-blue-700 transition">
                Login / Register
              </Link>
            }
          </div>
        </div>
      )}
    </header>
  );
}