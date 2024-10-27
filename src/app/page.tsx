"use client";
import Image from "next/image";
import Footer from "./components/Footer";
import Link from "next/link";
import { useState } from "react";
import Modal from "./components/Modal";
import InquiryForm from "./components/InquiryForm";
import Head from "next/head";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Head>
        <script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          async
          defer
        ></script>
      </Head>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="light:invert"
          src="/nextgen.png"
          alt="Next Gen logo"
          width={300}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">Articulate your idea</li>
          <li className="mb-2">Let us build it</li>
          <li>Prove it</li>
        </ol>
        <Link href="/pricing">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            See Pricing
          </button>
        </Link>
        <button
          onClick={openModal}
          className="px-4 py-2 bg-white-500 text-white rounded hover:bg-gray-600 border border-white-500"
        >
          Reach out to us
        </button>
        <Footer minutes={3} />

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-xl font-semibold text-center mb-4">
            Submit Your Inquiry
          </h2>
          <InquiryForm />
        </Modal>
      </main>
    </div>
  );
}
