import React from "react";
import logo from "../assets/Logo_dark_blue.png";
import campusImage from "../assets/local-campus.png";
import industrialImage from "../assets/industrial.jpg";
import carportsImage from "../assets/carports.png";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-100 to-white text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="HelioShare Logo" className="h-8 w-8" />
          <span className="text-2xl font-bold text-blue-900">HelioShare</span>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center px-4 pt-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-blue-900">Powering the Future, One Roof at a Time</h1>
        <p className="max-w-xl text-lg text-gray-700 mb-8">
          HelioShare connects communities and investors to high-performing, real-world solar assets through blockchain technology.
        </p>
        <a
          href="mailto:wwcarlson@gmail.com?subject=Requesting%20Access%20to%20HelioShare"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
        >
          Request Access
        </a>
      </main>

      {/* Product Types */}
      <section className="mt-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-blue-900 mb-8">Solar Project Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-sky-50 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
            <img src={campusImage} alt="Local Campus Solar" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Local Campuses</h3>
              <p className="text-gray-700">Universities and schools benefit from long-term, cost-stable energy backed by our blockchain platform.</p>
            </div>
          </div>

          <div className="bg-sky-50 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
            <img src={industrialImage} alt="Industrial Rooftop Solar" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Industrial Rooftops</h3>
              <p className="text-gray-700">Commercial properties reduce overhead and gain passive income by hosting energy-producing solar assets.</p>
            </div>
          </div>

          <div className="bg-sky-50 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
            <img src={carportsImage} alt="Solar Carports" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Solar Carports</h3>
              <p className="text-gray-700">Efficient use of parking lots to power EVs and feed the grid—tokenized, monitored, and investor-friendly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-16 pb-8">
        © {new Date().getFullYear()} HelioShare. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
