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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="bg-transparent p-12 rounded-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 px-4 px-2 text-white rounded hover:bg-gray-600 border border-white-500"
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
