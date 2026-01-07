import { useState } from 'react';
import './AnimatedDataCard.css';

/**
 * AnimatedDataCard - Animated card with data visualization
 * Adapted from Badtz UI Animated Card 3
 */
export function AnimatedDataCard({ title, description, mainColor = '#10b981', secondaryColor = '#f59e0b', className = '' }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`animated-data-card ${className}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                '--main-color': mainColor,
                '--secondary-color': secondaryColor,
            }}
        >
            {/* Visual Section */}
            <div className="animated-data-card__visual">
                <DataVisualization hovered={hovered} />
            </div>

            {/* Content Section */}
            <div className="animated-data-card__body">
                <h3 className="animated-data-card__title">{title}</h3>
                <p className="animated-data-card__description">{description}</p>
            </div>
        </div>
    );
}

function DataVisualization({ hovered }) {
    return (
        <div className="data-visualization">
            {/* Grid Background */}
            <div className="data-visualization__grid" />

            {/* Radial Gradient */}
            <div className="data-visualization__gradient">
                <svg width="356" height="180" viewBox="0 0 356 180" fill="none">
                    <rect width="356" height="180" fill="url(#radialGradient)" />
                    <defs>
                        <radialGradient
                            id="radialGradient"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(178 98) rotate(90) scale(98 178)"
                        >
                            <stop stopColor="var(--main-color)" stopOpacity="0.25" />
                            <stop offset="0.34" stopColor="var(--main-color)" stopOpacity="0.15" />
                            <stop offset="1" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>

            {/* Layer 3 - Overlay Gradient (on hover) */}
            <div className="data-visualization__overlay">
                <svg width="356" height="180" viewBox="0 0 356 180" fill="none">
                    <rect width="356" height="180" fill="url(#linearGradient)" />
                    <defs>
                        <linearGradient
                            id="linearGradient"
                            x1="178"
                            y1="0"
                            x2="178"
                            y2="180"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.35" stopColor="var(--main-color)" stopOpacity="0" />
                            <stop offset="1" stopColor="var(--main-color)" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Layer 2 - Popup Info (on hover) */}
            <div className="data-visualization__popup">
                <div className="data-popup">
                    <div className="data-popup__header">
                        <div className="data-popup__indicator" />
                        <p className="data-popup__title">Random Data Visualization</p>
                    </div>
                    <p className="data-popup__text">Displaying some interesting stats.</p>
                </div>
            </div>

            {/* Layer 1 - Stats Badges */}
            <div className="data-visualization__stats">
                <div className="stat-badge">
                    <div className="stat-badge__dot stat-badge__dot--primary" />
                    <span className="stat-badge__text">+15,2%</span>
                </div>
                <div className="stat-badge">
                    <div className="stat-badge__dot stat-badge__dot--secondary" />
                    <span className="stat-badge__text">+18,7%</span>
                </div>
            </div>

            {/* Layer 4 - Animated Bar Chart */}
            <AnimatedBarChart hovered={hovered} />
        </div>
    );
}

function AnimatedBarChart({ hovered }) {
    const bars = [
        { width: 15, height: 20, y: 110, hoverHeight: 20, hoverY: 130, x: 40, isPrimary: false },
        { width: 15, height: 20, y: 90, hoverHeight: 20, hoverY: 130, x: 60, isPrimary: true },
        { width: 15, height: 40, y: 70, hoverHeight: 30, hoverY: 120, x: 80, isPrimary: true },
        { width: 15, height: 30, y: 80, hoverHeight: 50, hoverY: 100, x: 100, isPrimary: true },
        { width: 15, height: 30, y: 110, hoverHeight: 40, hoverY: 110, x: 120, isPrimary: false },
        { width: 15, height: 40, y: 110, hoverHeight: 60, hoverY: 90, x: 140, isPrimary: false },
        { width: 15, height: 50, y: 90, hoverHeight: 40, hoverY: 110, x: 160, isPrimary: false },
        { width: 15, height: 60, y: 80, hoverHeight: 70, hoverY: 80, x: 180, isPrimary: true },
        { width: 15, height: 30, y: 80, hoverHeight: 30, hoverY: 120, x: 200, isPrimary: true },
        { width: 15, height: 20, y: 110, hoverHeight: 50, hoverY: 100, x: 220, isPrimary: false },
        { width: 15, height: 50, y: 90, hoverHeight: 60, hoverY: 90, x: 240, isPrimary: false },
        { width: 15, height: 40, y: 100, hoverHeight: 80, hoverY: 70, x: 260, isPrimary: true },
        { width: 15, height: 50, y: 80, hoverHeight: 30, hoverY: 120, x: 280, isPrimary: false },
        { width: 15, height: 30, y: 80, hoverHeight: 90, hoverY: 60, x: 300, isPrimary: true },
    ];

    return (
        <div className="animated-bar-chart">
            <svg width="356" height="180">
                {bars.map((bar, index) => (
                    <rect
                        key={index}
                        width={bar.width}
                        height={hovered ? bar.hoverHeight : bar.height}
                        x={bar.x}
                        y={hovered ? bar.hoverY : bar.y}
                        fill={bar.isPrimary ? 'var(--main-color)' : 'currentColor'}
                        rx="2"
                        ry="2"
                        className="animated-bar"
                    />
                ))}
            </svg>
        </div>
    );
}
