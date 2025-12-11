"use client";

import { FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-0 left-0 bg-white h-[404px] w-[322px] p-6"
          >
            <button onClick={onClose} className="mb-4">
              <FiX className="w-6 h-6" />
            </button>

            <ul className="flex flex-col mt-[54px] space-y-4 text-lg">
              <li className="text-[24px] font-normal leading-[107%] tracking-normal mb-6 ml-6">О нас</li>
              <li className="text-[24px] font-normal leading-[107%] tracking-normal mb-6 ml-6">Каталог</li>
              <li className="text-[24px] font-normal leading-[107%] tracking-normal mb-6 ml-6">Оплата и доставка</li>
              <li className="text-[24px] font-normal leading-[107%] tracking-normal mb-6 ml-6">Контакты</li>
            </ul>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
