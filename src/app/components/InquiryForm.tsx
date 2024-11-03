// components/InquiryForm.tsx
import React, { useState } from "react";
import Footer from "./Footer";

export interface InquiryFormProps {
  onCancel?: () => void;
}

const InquiryForm: React.FC<InquiryFormProps> = ({ onCancel }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [statusCode, setStatusCode] = useState(0);

  // Track dirty state for each field
  const [isNameDirty, setIsNameDirty] = useState(false);
  const [isEmailDirty, setIsEmailDirty] = useState(false);
  const [isMessageDirty, setIsMessageDirty] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Set all fields as dirty upon form submission
    setIsNameDirty(true);
    setIsEmailDirty(true);
    setIsMessageDirty(true);

    const response = await fetch("/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    setStatusCode(response.status);

    if (response.ok) {
      const data = await response.json();
      setStatus(data.message);
      setName("");
      setEmail("");
      setMessage("");
      setIsNameDirty(false);
      setIsEmailDirty(false);
      setIsMessageDirty(false);
      setTimeout(() => setStatus(""), 5000);
    } else {
      setStatus(
        "There was an issue submitting your inquiry. Please try again."
      );
    }
  };

  return (
    <div className="p-6 bg-gray-800 rounded-lg text-white w-full max-w-md mx-auto">
      <p className="text-center text-gray-400 mb-6">Get in Touch</p>
      <form onSubmit={handleSubmit} className="space-y-6" aria-live="polite">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setIsNameDirty(true)} // Set dirty state on blur
            className="p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-orange-400"
            required
            aria-invalid={isNameDirty && !name ? "true" : "false"}
            aria-describedby={isNameDirty && !name ? "name-error" : undefined}
          />
          {isNameDirty && !name && (
            <span id="name-error" className="text-red-500 text-xs mt-1">
              Name is required.
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setIsEmailDirty(true)} // Set dirty state on blur
            className="p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-orange-400"
            required
            aria-invalid={isEmailDirty && !email ? "true" : "false"}
            aria-describedby={
              isEmailDirty && !email ? "email-error" : undefined
            }
          />
          {isEmailDirty && !email && (
            <span id="email-error" className="text-red-500 text-xs mt-1">
              Email is required.
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-300"
          >
            How can we help you?
          </label>
          <textarea
            id="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={() => setIsMessageDirty(true)} // Set dirty state on blur
            className="p-3 h-24 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-orange-400 resize-none"
            required
            aria-invalid={isMessageDirty && !message ? "true" : "false"}
            aria-describedby={
              isMessageDirty && !message ? "message-error" : undefined
            }
          ></textarea>
          {isMessageDirty && !message && (
            <span id="message-error" className="text-red-500 text-xs mt-1">
              Message is required.
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-orange-500 hover:bg-orange-400 rounded-md font-semibold text-white text-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          aria-label="Submit Inquiry"
        >
          Submit Inquiry
        </button>
      </form>

      {onCancel && (
        <div className="w-full flex justify-center mt-4">
          <button
            onClick={onCancel}
            className="py-2 px-6 bg-transparent border border-red-500 hover:bg-red-500 text-red-500 hover:text-white rounded-md font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            aria-label="Cancel inquiry"
          >
            Cancel
          </button>
        </div>
      )}

      {status && (
        <p
          role="status"
          aria-live="polite"
          className={`mt-4 text-center ${
            statusCode === 200 ? "text-green-500" : "text-red-500"
          }`}
        >
          {status}
        </p>
      )}

      <Footer minutes={45} />
    </div>
  );
};

export default InquiryForm;
