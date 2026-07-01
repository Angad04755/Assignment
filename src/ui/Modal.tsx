import type { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

function Modal({ children }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-fit h-[90vh] overflow-y-auto rounded-xl bg-gradient-to-b from-cyan-100 to-cyan-200 p-6 shadow-lg">
        {children}
      </div>
    </div>
  );
}

export default Modal;