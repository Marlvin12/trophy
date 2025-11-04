import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
    useEffect(() => {
        if (isOpen) {
            const script = document.createElement('script');
            script.src = '//embed.typeform.com/next/embed.js';
            script.async = true;
            document.body.appendChild(script);
            
            return () => {
                document.body.removeChild(script);
            };
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        onClick={onClose}
                    >
                        <div
                            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h2 className="text-3xl font-redzone mb-2">Join the Waitlist</h2>
                                    <p className="text-app_gray text-sm">
                                        Get early access to Trophy and exclusive launch bonuses
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="text-white/50 hover:text-white transition-colors text-3xl leading-none -mt-2"
                                >
                                    ×
                                </button>
                            </div>

                            <div 
                                data-tf-live="01K98EAAJR352QVJHF3TKVMAF5"
                                style={{ minHeight: '500px' }}
                            />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

