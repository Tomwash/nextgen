// components/Modal.tsx
import React from "react";
import Footer from "./Footer";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-black p-6 rounded-lg max-w-lg w-full relative border border-white-500">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 px-4 py-2 text-white rounded hover:bg-gray-600 border border-white-500"
        >
          Close
        </button>
        {children}
        <Footer minutes={27} />
      </div>
    </div>
  );
};

export default Modal;
