// src/pages/GraphicDesignPortfolio.jsx
import React from "react";

const GraphicDesignPortfolio = () => {
  return (
    <div className="min-h-screen flex bg-[#f9f6ee] text-white px-6 md:px-16 lg:px-32 2xl:px-105">
      <div class="max-w-7xl my-20  mx-auto">
      <h1 className="text-2xl font-semibold text-[#1e2749] mb-2">
  Graphic Design Portfolio
</h1>
<p className="text-gray-700 text-sm mb-6">
  A showcase of my work: social media graphics, marketing banners, event posters, branding visuals, and more.
</p>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-6">
          {/* Sample image slots */}
          <div className="bg-white rounded-md shadow p-3 flex flex-col">
            <img
              src="/Ultrasound.jpg"
              alt="Design 1"
              className="rounded shadow"
            />
          </div>
          <div className="bg-white rounded-md shadow p-3 flex flex-col">
            <img
              src="/Men's Health Check.jpg"
              alt="Design 2"
              className="rounded shadow object-cover "
            />
          </div>
          <div className="bg-white rounded-md shadow p-3 flex flex-col">
            <img
              src="/Pharmacy.jpg"
              alt="Design 3"
              className="rounded shadow h-full"
            />
          </div>
          <div className="bg-white rounded-md shadow p-3 flex flex-col">
            <img
              src="/Tuli2025.jpg"
              alt="Design 4"
              className="rounded shadow h-full"
            />
          </div>
          <div className="bg-white rounded-md shadow p-3 flex flex-col">
            <img
              src="/X-mas.jpg"
              alt="Design 5"
              className="rounded shadow h-full"
            />
          </div>
          <div className="bg-white rounded-md shadow p-3 flex flex-col">
            <img
              src="/Blood Letting CORAZON 2025.jpg"
              alt="Design 6"
              className="rounded shadow h-full"
            />
          </div>
          <div className="bg-white rounded-md shadow p-3 flex flex-col">
            <img
              src="/XRAYads.jpg"
              alt="Design 7"
              className="rounded shadow h-full"
            />
          </div>
          <div className="bg-white rounded-md shadow p-3 flex flex-col">
            <img
              src="/fluevaccine2024.jpg"
              alt="Design 8"
              className="rounded shadow h-full"
            />
          </div>
          {/* Add more as needed */}
        </div>
      </div>
    </div>
  );
};

export default GraphicDesignPortfolio;
