import { useState, useEffect } from 'react';
import './Visual2Card.css';

/**
 * Visual2Card - Animated card with circular progress
 * Adapted from Badtz UI Animated Card 2
 */
export default function Visual2Card({ mainColor = '#8b5cf6', secondaryColor = '#fbbf24' }) {
    const [hovered, setHovered] = useState(false);
    const [mainProgress, setMainProgress] = useState(12.5);
    const [secondaryProgress, setSecondaryProgress] = useState(0);

    useEffect(() => {
        let timeout;
        if (hovered) {
            timeout = setTimeout(() => {
                setMainProgress(66);
                setSecondaryProgress(100);
            }, 200);
        } else {
            setMainProgress(12.5);
            setSecondaryProgress(0);
        }
        return () => clearTimeout(timeout);
    }, [hovered]);

    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const mainDashoffset = circumference - (mainProgress / 100) * circumference;
    const secondaryDashoffset = circumference - (secondaryProgress / 100) * circumference;

    return (
        <div
            className="visual2-card"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ '--main-color': mainColor, '--secondary-color': secondaryColor }}
        >
            {/* Grid Background */}
            <div className="visual2-card__grid" />

            {/* Radial Gradient */}
            <div className="visual2-card__gradient">
                <svg width="356" height="180" viewBox="0 0 356 180" fill="none">
                    <rect width="356" height="180" fill="url(#radialGradient2)" />
                    <defs>
                        <radialGradient
                            id="radialGradient2"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(178 98) rotate(90) scale(98 178)"
                        >
                            <stop stopColor={mainColor} stopOpacity="0.25" />
                            <stop offset="0.34" stopColor={mainColor} stopOpacity="0.15" />
                            <stop offset="1" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>

            {/* Circular Progress */}
            <div className="visual2-card__progress">
                <svg width="130" height="130" viewBox="0 0 130 130" style={{ margin: '0 auto' }}>
                    <circle cx="65" cy="65" r="50" stroke="currentColor" strokeWidth="6" fill="transparent" opacity={0.12} />
                    <circle
                        cx="65"
                        cy="65"
                        r="50"
                        stroke={secondaryColor}
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={secondaryDashoffset}
                        transform="rotate(-90 65 65)"
                        style={{ transition: 'stroke-dashoffset 0.5s cubic-bezier(0.6, 0.6, 0, 1)' }}
                    />
                    <circle
                        cx="65"
                        cy="65"
                        r="50"
                        stroke={mainColor}
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={mainDashoffset}
                        transform="rotate(-90 65 65)"
                        style={{ transition: 'stroke-dashoffset 0.5s cubic-bezier(0.6, 0.6, 0, 1)' }}
                    />
                </svg>
                <div className="visual2-card__progress-text">
                    {Math.round(mainProgress)}%
                </div>
            </div>

            {/* Popup Info */}
            <div className="visual2-card__popup" style={{ opacity: hovered ? 1 : 0, pointerEvents: hovered ? 'auto' : 'none' }}>
                <div className="visual2-popup">
                    <div className="visual2-popup__header">
                        <div className="visual2-popup__dot" style={{ backgroundColor: mainColor }} />
                        <p>Budget Allocation</p>
                    </div>
                    <p className="visual2-popup__text">AI optimizing spend across campaigns in real-time.</p>
                </div>
            </div>

            {/* Campaign Labels */}
            <div className="visual2-card__labels" style={{ opacity: hovered ? 0 : 1, transition: 'opacity 300ms ease-in-out' }}>
                {['Google', 'Meta', 'TikTok', 'LinkedIn', 'Amazon'].map((platform, idx) => {
                    const angle = (idx * 72 - 90) * Math.PI / 180;
                    const distance = 90;
                    return (
                        <div 
                            key={idx} 
                            className="visual2-label" 
                            style={{ 
                                transform: hovered 
                                    ? `translate(${Math.cos(angle) * distance * 1.3}px, ${Math.sin(angle) * distance * 1.3}px)` 
                                    : `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`,
                                opacity: hovered ? 0 : 1
                            }}
                        >
                            <span>{platform}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
