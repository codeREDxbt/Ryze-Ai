import { motion } from 'framer-motion';
import './AuroraBackground.css';

/**
 * AuroraBackground - Animated gradient aurora effect
 * Inspired by Aceternity UI
 */
export default function AuroraBackground({ className = '', showRadialGradient = true }) {
    return (
        <div className={`aurora-background ${className}`}>
            <div className="aurora-container">
                <div className={`aurora-layer ${showRadialGradient ? 'aurora-mask' : ''}`}>
                    {/* Primary Aurora Glow - Emerald/Teal */}
                    <motion.div
                        className="aurora-glow aurora-glow-1"
                        initial={{ backgroundPosition: '0% 50%' }}
                        animate={{
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />
                    {/* Secondary Aurora Glow - Purple/Indigo */}
                    <motion.div
                        className="aurora-glow aurora-glow-2"
                        initial={{ backgroundPosition: '100% 50%' }}
                        animate={{
                            backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />
                    {/* Tertiary Aurora Glow - Cyan/Blue */}
                    <motion.div
                        className="aurora-glow aurora-glow-3"
                        initial={{ backgroundPosition: '50% 0%' }}
                        animate={{
                            backgroundPosition: ['50% 0%', '50% 100%', '50% 0%'],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
