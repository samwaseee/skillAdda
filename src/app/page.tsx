import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

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

    </div>
  );
}