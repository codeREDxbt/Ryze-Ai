import './AuroraBackground.css';

/**
 * AuroraBackground - Animated gradient aurora effect
 * CSS-only animation for performance (no framer-motion)
 */
export default function AuroraBackground({ className = '', showRadialGradient = true }) {
    return (
        <div className={`aurora-background ${className}`}>
            <div className="aurora-container">
                <div className={`aurora-layer ${showRadialGradient ? 'aurora-mask' : ''}`}>
                    {/* Primary Aurora Glow - Emerald/Teal */}
                    <div className="aurora-glow aurora-glow-1" />
                    {/* Secondary Aurora Glow - Purple/Indigo */}
                    <div className="aurora-glow aurora-glow-2" />
                    {/* Tertiary Aurora Glow - Cyan/Blue */}
                    <div className="aurora-glow aurora-glow-3" />
                </div>
                {/* Grain/Noise Overlay */}
                <div className="aurora-grain" aria-hidden="true" />
            </div>
        </div>
    );
}
