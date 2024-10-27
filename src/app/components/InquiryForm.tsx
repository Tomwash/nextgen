// components/InquiryForm.tsx
import React, { useState } from "react";

const InquiryForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [statusCode, setStatusCode] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
      setTimeout(() => setStatus(""), 5000);
    } else {
      setStatus(
        `There was an issue submitting your inquiry. Please try again.`
      );
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-center">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border border-gray-300 rounded text-black"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-300 rounded text-black"
          required
        />
        <textarea
          placeholder="How can we help you?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-2 border border-gray-300 rounded text-black"
          rows={4}
          required
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Submit Inquiry
        </button>
      </form>
      {status && (
        <p
          className={`mt-4 text-center ${
            statusCode === 200 ? "text-green-500" : "text-red-500"
          }`}
        >
          {status}
        </p>
      )}
    </div>
  );
};

export default InquiryForm;
