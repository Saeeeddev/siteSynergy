import React from "react";

const subsidiaries = [
  {
    name: "SiteSelect Pro",
    description: "Advanced site selection tools for real estate professionals.",
    logo: "https://via.placeholder.com/64",
    link: "#",
  },
  {
    name: "GeoFinder",
    description: "Geospatial analytics for business expansion.",
    logo: "https://via.placeholder.com/64",
    link: "#",
  },
  {
    name: "MarketMatch",
    description: "Market research and demographic insights platform.",
    logo: "https://via.placeholder.com/64",
    link: "#",
  },
  {
    name: "ZoneScout",
    description: "Zoning and regulatory compliance made easy.",
    logo: "https://via.placeholder.com/64",
    link: "#",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="https://via.placeholder.com/48" alt="Company Logo" className="w-12 h-12 rounded-full" />
            <span className="text-2xl font-bold text-gray-800">HoldCo Group</span>
          </div>
          <nav className="space-x-6">
            <a href="#subsidiaries" className="text-gray-600 hover:text-blue-600">Subsidiaries</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center py-16 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Empowering Innovation Across Industries</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
          HoldCo Group is a leading holding company nurturing a diverse portfolio of innovative businesses, including industry-leading site selection tools and analytics platforms.
        </p>
        <a href="#subsidiaries" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">Explore Our Companies</a>
      </section>

      {/* Subsidiaries Section */}
      <section id="subsidiaries" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Subsidiaries</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {subsidiaries.map((sub, idx) => (
            <a
              key={idx}
              href={sub.link}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center group"
            >
              <img src={sub.logo} alt={sub.name} className="w-16 h-16 mb-4 rounded-full border border-gray-200 group-hover:scale-105 transition" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{sub.name}</h3>
              <p className="text-gray-500 mb-4">{sub.description}</p>
              <span className="text-blue-600 font-medium group-hover:underline">Learn More →</span>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-blue-50 py-12">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">Interested in partnering or learning more? Reach out to our team.</p>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200" />
            <textarea placeholder="Your Message" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200" rows={4}></textarea>
            <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} HoldCo Group. All rights reserved.
      </footer>
    </div>
  );
} 