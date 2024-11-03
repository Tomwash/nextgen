"use client";
import Image from "next/image";
import Footer from "./components/Footer";
import Link from "next/link";
import { useState } from "react";
import Modal from "./components/Modal";
import InquiryForm from "./components/InquiryForm";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start font-sans">
        <Image
          className="light:invert"
          src="/nextgen.png"
          alt="Next Gen logo"
          width={300}
          height={38}
          priority
        />
        <ol className="font-sans list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">Articulate your idea</li>
          <li className="mb-2">Let me build it</li>
          <li>Prove it</li>
        </ol>
        <Link href="/pricing">
          <button className="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-4 border border-gray-400 rounded-md shadow">
            See Pricing
          </button>
        </Link>
        <button
          onClick={openModal}
          className="w-full py-3 bg-orange-500 hover:bg-orange-400 rounded-md font-semibold text-white text-lg focus:outline-none"
        >
          Reach out to us
        </button>
        <Footer hours={3} minutes={17} />

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <InquiryForm onCancel={closeModal} />
        </Modal>
      </main>
    </div>
  );
}
