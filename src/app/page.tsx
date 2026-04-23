import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 1. Navbar (Placeholder) */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 p-4 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">SkillAdda</h1>
          <nav className="space-x-4">
            <Link href="/items" className="text-gray-600 hover:text-blue-600">Workshops</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Login
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <section className="bg-white py-20 text-center px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Level Up Your Tech Career
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover local bootcamps, coding workshops, and tech seminars happening near you.
          </p>
          <Link href="/items" className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition shadow-md">
            Explore Workshops
          </Link>
        </section>

        {/* 3. Features, 4. Banner, 5. Testimonials, 6. Newsletter will go here */}
        <section className="py-20 text-center text-gray-500">
          <p>[ More Sections Coming Soon ]</p>
        </section>
      </main>

      {/* 7. Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} SkillAdda. All rights reserved.</p>
      </footer>
    </div>
  );
}