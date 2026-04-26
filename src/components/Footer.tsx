import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Righteous } from 'next/font/google';

const righteousLogo = Righteous({
    weight: '400',
    subsets: ['latin']
  });

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Section */}
        <div>
          <span className={`text-3xl tracking-wide bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-500 group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-300 ${righteousLogo.className}`}>
              SkillAdda
            </span>
          <p className="text-sm leading-relaxed mb-4">
            Empowering the tech community in Bangladesh with localized, high-quality workshops and bootcamps.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/items" className="hover:text-white transition">Browse Workshops</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/items/add" className="hover:text-white transition">Host an Event</Link></li>
          </ul>
        </div>

        {/* Socials & Copyright */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4 mb-6">
            {/* Updated the icons here to use the Fa prefix */}
            <a href="https://github.com/samwaseee" className="hover:text-white transition"><FaGithub className="w-5 h-5" /></a>
            <a href="https://x.com/samwaseee" className="hover:text-white transition"><FaXTwitter className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/samiur-rahman-wasi" className="hover:text-white transition"><FaLinkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
      
      {/* Copyright border */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-gray-800 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} SkillAdda. All rights reserved.</p>
      </div>
    </footer>
  );
}