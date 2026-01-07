import { motion } from 'framer-motion';
import './Visual3.css';

/**
 * Visual3 - Animated visual with orbiting circles and glow effects
 * Inspired by badtz-ui animated-card-3 and wope.com
 */
export default function Visual3({
    mainColor = 'var(--accent-color)',
    secondaryColor = 'var(--accent-hover)',
    gridColor = 'rgba(128, 128, 128, 0.08)'
}) {
    return (
        <div
            className="visual-3"
            style={{
                '--main-color': mainColor,
                '--secondary-color': secondaryColor,
                '--grid-color': gridColor,
            }}
        >
            {/* Background Grid */}
            <div className="visual-3-grid" />

            {/* Gradient Background */}
            <div className="visual-3-gradient" />

            {/* Central Glow */}
            <div className="visual-3-glow" />

            {/* Orbiting Circles */}
            <div className="visual-3-orbit visual-3-orbit-1">
                <motion.div
                    className="visual-3-circle"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                />
            </div>

            <div className="visual-3-orbit visual-3-orbit-2">
                <motion.div
                    className="visual-3-circle visual-3-circle-secondary"
                    animate={{
                        scale: [1.1, 0.9, 1.1],
                        opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.5
                    }}
                />
            </div>

            <div className="visual-3-orbit visual-3-orbit-3">
                <motion.div
                    className="visual-3-circle visual-3-circle-small"
                    animate={{
                        scale: [0.9, 1.3, 0.9],
                        opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1
                    }}
                />
            </div>

            {/* Data Visualization Bars */}
            <div className="visual-3-bars">
                {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 1.0].map((height, i) => (
                    <motion.div
                        key={i}
                        className="visual-3-bar"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: height }}
                        transition={{
                            duration: 0.5,
                            delay: i * 0.1,
                            ease: 'easeOut',
                        }}
                        style={{ '--bar-height': height }}
                    />
                ))}
            </div>

            {/* Floating Particles */}
            <motion.div
                className="visual-3-particle visual-3-particle-1"
                animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            <motion.div
                className="visual-3-particle visual-3-particle-2"
                animate={{
                    y: [0, 15, 0],
                    x: [0, -15, 0],
                    opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                }}
            />
            <motion.div
                className="visual-3-particle visual-3-particle-3"
                animate={{
                    y: [0, -10, 0],
                    x: [0, -8, 0],
                    opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                }}
            />
        </div>
    );
}
