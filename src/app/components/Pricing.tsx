"use client";
import React from "react";
import { packages } from "../data/packages";
import PackageCard from "./PackageCard"; // Adjust the import path as needed
import Footer from "./Footer";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-neutral-900 text-white">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-white-400">
          My Pricing Packages
        </h1>
        <div className="space-y-8">
          {packages.packages.map((pkg, index) => (
            <PackageCard
              key={index}
              name={pkg.name}
              price={pkg.price}
              deliveryTimeline={pkg.deliveryTimeline}
              description={pkg.description}
              whatsIncluded={pkg.whatsIncluded}
              clientExpectations={pkg.clientExpectations}
              paymentStructure={pkg.paymentStructure}
            />
          ))}
        </div>
      </main>
      <Footer minutes={25} />
    </div>
  );
};

export default Pricing;
