import React, { useState } from "react";
import Modal from "./Modal";
import InquiryForm from "./InquiryForm";

type Phase = {
  phase: string;
  timeframe: string;
  description: string;
};

type Payment = {
  amount: number;
  percentage: number;
  due: string;
  description: string;
};

type PackageProps = {
  name: string;
  price: number;
  deliveryTimeline: string;
  description: string;
  whatsIncluded: Phase[];
  clientExpectations: string[];
  paymentStructure: Payment[];
};

const PackageCard: React.FC<PackageProps> = ({
  name,
  price,
  deliveryTimeline,
  description,
  whatsIncluded,
  clientExpectations,
  paymentStructure,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white rounded-lg p-8 max-w-2xl mx-auto shadow-lg">
      {/* Header */}
      <h2 className="text-3xl font-bold text-orange-400 mb-2">{name}</h2>
      <div className="flex items-center justify-between mb-4">
        <p className="text-4xl font-semibold text-gray-100">
          ${price.toLocaleString()}
        </p>
        <p className="text-lg font-medium text-orange-400 flex items-center">
          <span className="mr-1">⏱</span>
          {deliveryTimeline}
        </p>
      </div>
      <p className="text-gray-300 mb-6">{description}</p>

      {/* What's Included */}
      <h3 className="text-2xl font-bold text-orange-300 mb-4 flex items-center">
        <span className="mr-2">📋</span>What&apos;s Included
      </h3>
      <div className="space-y-4 mb-6 border-l-4 border-orange-400 pl-4">
        {whatsIncluded.map((item, index) => (
          <div key={index} className="flex items-start">
            <div className="mr-3 text-orange-300">✔️</div>
            <div>
              <h4 className="text-lg font-semibold text-orange-200">
                {item.phase}{" "}
                <span className="text-gray-400">({item.timeframe})</span>
              </h4>
              <p className="text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Client Expectations */}
      <h3 className="text-2xl font-bold text-orange-300 mb-4 flex items-center">
        <span className="mr-2">📄</span>Client Expectations
      </h3>
      <ul className="list-inside space-y-2 text-gray-300 mb-6">
        {clientExpectations.map((expectation, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 text-orange-300">✔️</span>
            {expectation}
          </li>
        ))}
      </ul>

      {/* Payment Structure */}
      <h3 className="text-2xl font-bold text-orange-300 mb-4 flex items-center">
        <span className="mr-2">💳</span>Payment Structure
      </h3>
      <div className="space-y-4">
        {paymentStructure.map((payment, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b border-gray-700 pb-2"
          >
            <div className="flex-1 text-lg font-semibold text-orange-200">
              {payment.percentage}% - ${payment.amount.toLocaleString()}
            </div>
            <div className="flex-1 text-gray-300">
              <p>{payment.due}</p>
              <p className="text-sm text-gray-400">{payment.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-8 text-center">
        <button
          onClick={openModal}
          className="bg-orange-500 hover:bg-orange-400 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Get Started
        </button>
      </div>

      {/* Modal with Inquiry Form */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <InquiryForm onCancel={closeModal} />
      </Modal>
    </div>
  );
};

export default PackageCard;
