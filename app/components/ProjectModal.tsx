import { motion, AnimatePresence } from 'framer-motion';
import React from "react";

export default function ProjectModal({ onClose, children }: { onClose: () => void, children: React.ReactNode }) {

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="bg-gray-900 text-white max-w-5xl w-full p-6 rounded-xl overflow-y-auto max-h-[80vh] relative"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white hover:text-red-400 text-2xl"
                    >
                        ×
                    </button>

                    {children}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
