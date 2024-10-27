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
    <footer className="footer">
      <p>
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
      <style jsx>{`
        .footer {
          padding: 10px;
          text-align: center;
          font-size: 14px;
          border-top: 1px solid #ddd;
          margin-top: 20px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
