import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './AnimatedTestimonials.css';

/**
 * AnimatedTestimonials - Testimonials with image and smooth transitions
 * Inspired by Aceternity UI
 */
export default function AnimatedTestimonials({ testimonials = [], autoplay = true, autoplayInterval = 5000 }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        if (!autoplay) return;

        const interval = setInterval(() => {
            setDirection(1);
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, autoplayInterval);

        return () => clearInterval(interval);
    }, [autoplay, autoplayInterval, testimonials.length]);

    const goToPrev = () => {
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToNext = () => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const goToIndex = (index) => {
        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);
    };

    const current = testimonials[activeIndex];

    if (!current) return null;

    return (
        <div className="animated-testimonials">
            <div className="testimonials-content">
                <div className="testimonials-image-container">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={activeIndex}
                            className="testimonial-image"
                            custom={direction}
                            initial={{ opacity: 0, x: direction * 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction * -100 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                        >
                            <img
                                src={current.image}
                                alt={current.name}
                                loading="lazy"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="testimonials-text-container">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={activeIndex}
                            className="testimonial-text"
                            custom={direction}
                            initial={{ opacity: 0, y: direction * 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: direction * -30 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                        >
                            <blockquote className="testimonial-quote">
                                "{current.quote}"
                            </blockquote>
                            <div className="testimonial-author">
                                <span className="author-name">{current.name}</span>
                                <span className="author-role">
                                    {current.role} at {current.company}
                                </span>
                            </div>
                            {current.metric && (
                                <div className="testimonial-metric">
                                    <span className="metric-value">{current.metric.value}</span>
                                    <span className="metric-label">{current.metric.label}</span>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <div className="testimonials-controls">
                <button
                    className="testimonial-nav-btn"
                    onClick={goToPrev}
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft size={24} />
                </button>

                <div className="testimonials-dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`testimonial-dot ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => goToIndex(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

                <button
                    className="testimonial-nav-btn"
                    onClick={goToNext}
                    aria-label="Next testimonial"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
}
