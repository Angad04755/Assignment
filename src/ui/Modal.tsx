import type { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

function Modal({ children }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl">
        {children}
      </div>
    </div>
  );
}

export default Modal;