// components/Header.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="flex items-center p-4 border-b border-gray-300">
      <Link href="/" passHref>
        <Image
          src="/nextgen.png"
          alt="Next Gen Logo"
          width={48}
          height={48}
          className="cursor-pointer"
        />
      </Link>
    </header>
  );
};

export default Header;
