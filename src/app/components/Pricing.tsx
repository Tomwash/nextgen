"use client";
import React from "react";
import { packages } from "../data/packages";
import Footer from "./Footer";

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h1 className="mb-3">Our Pricing Packages</h1>
      <div className="packages">
        {packages.packages.map((pkg, index) => (
          <div key={index} className="package-card">
            <h1 className="text-2xl">
              <strong>{pkg.name}</strong>
            </h1>
            <p>
              <strong>Price:</strong>{" "}
              <span className="text-2xl">${pkg.price.toLocaleString()}</span>
            </p>
            <p>
              <strong>Delivery Timeline:</strong> {pkg.deliveryTimeline}
            </p>
            <p>
              <strong>Description:</strong> {pkg.description}
            </p>

            <h3>
              <strong>What’s Included</strong>
            </h3>
            <ul>
              {pkg.whatsIncluded.map((item, idx) => (
                <li key={idx}>
                  <strong>
                    {item.phase} ({item.timeframe}):
                  </strong>{" "}
                  {item.description}
                </li>
              ))}
            </ul>

            <h3>
              <strong>Client Expectations</strong>
            </h3>
            <ul>
              {pkg.clientExpectations.map((expectation, idx) => (
                <li key={idx}>{expectation}</li>
              ))}
            </ul>

            <h3>
              <strong>Payment Structure</strong>
            </h3>
            <ul>
              {pkg.paymentStructure.map((payment, idx) => (
                <li key={idx}>
                  <strong>
                    {payment.percentage}% - ${payment.amount.toLocaleString()}
                  </strong>{" "}
                  {payment.due}: {payment.description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Footer minutes={16} />

      <style jsx>{`
        .pricing-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        .packages {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .package-card {
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 8px;
        }
        h2 {
          margin-top: 0;
        }
        ul {
          padding-left: 20px;
        }
        li {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default Pricing;
