// components/Footer.tsx
import React from "react";

interface FooterProps {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const Footer: React.FC<FooterProps> = ({
  days = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
}) => {
  // Convert all time units to total seconds
  const totalSeconds = days * 24 * 3600 + hours * 3600 + minutes * 60 + seconds;

  // Calculate days, hours, minutes, and seconds for display
  const displayDays = Math.floor(totalSeconds / (24 * 3600));
  const displayHours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const displayMinutes = Math.floor((totalSeconds % 3600) / 60);

  return (
    <footer className="p-2 text-center text-sm border-t border-gray-300 mt-5 px-8 py-6 bg-gray-900 border-t border-gray-700">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <p className="text-gray-400">
          &copy; 2024 NextGenProof. All rights reserved.
        </p>
        <p className="text-gray-400">
          Have questions? Reach us at{" "}
          <a
            href="mailto:tom@nextgenproof.com"
            className="text-teal-400 hover:underline"
          >
            tom@nextgenproof.com
          </a>
        </p>
      </div>
      <p className="mt-2">
        Time spent developing this:
        {displayDays > 0
          ? ` ${displayDays} day${displayDays > 1 ? "s" : ""},`
          : ""}
        {displayHours > 0
          ? ` ${displayHours} hour${displayHours > 1 ? "s" : ""},`
          : ""}
        {displayMinutes > 0
          ? ` ${displayMinutes} minute${displayMinutes > 1 ? "s" : ""}`
          : ""}
      </p>
    </footer>
  );
};

export default Footer;
