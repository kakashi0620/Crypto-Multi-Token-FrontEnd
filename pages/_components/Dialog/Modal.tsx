
import React, { useEffect, useRef } from "react";

const Modal = ({ isOpen, onClose, onConfirm, children }) => {
  const dialogRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
    if (event.key === "Enter") {
      onConfirm();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex
                      items-center justify-center
                      bg-black bg-opacity-50"
    >
      <div
        className="bg-white rounded-lg
                          shadow-lg p-6 max-w-fit
                          w-full relative overflow-y-auto max-h-[60vh] md:max-h-[80vh] lg:max-h-[90vh]"
        ref={dialogRef}
      >
        <button
          className="absolute top-2 right-2
                             text-black hover:text-blue-700"
          onClick={onClose}
        >
          &#x2715; {/* Close button */}
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
