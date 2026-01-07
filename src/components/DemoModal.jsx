import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import DemoBookingForm from './DemoBookingForm';
import './DemoModal.css';

/**
 * DemoModal - Modal wrapper for demo booking form
 */
export default function DemoModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="demo-modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <div className="demo-modal-container">
                        <motion.div
                            className="demo-modal-content"
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                            <button
                                className="demo-modal-close"
                                onClick={onClose}
                                aria-label="Close modal"
                            >
                                <X size={24} />
                            </button>
                            <DemoBookingForm />
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
