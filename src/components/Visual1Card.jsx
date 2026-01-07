import { useState } from 'react';
import './Visual1Card.css';

/**
 * Visual1Card - Animated card with sliding shapes
 * Adapted from Badtz UI Animated Card 1
 */
export default function Visual1Card({ mainColor = '#8b5cf6', secondaryColor = '#fbbf24' }) {
    return (
        <div className="visual1-card" style={{ '--main-color': mainColor, '--secondary-color': secondaryColor }}>
            {/* Grid Background */}
            <div className="visual1-card__grid" />

            {/* Radial Gradient */}
            <div className="visual1-card__gradient">
                <svg width="356" height="180" viewBox="0 0 356 180" fill="none">
                    <rect width="356" height="180" fill="url(#radialGradient1)" />
                    <defs>
                        <radialGradient
                            id="radialGradient1"
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

            {/* Layer 1 - Sliding Shapes */}
            <Layer1 mainColor={mainColor} secondaryColor={secondaryColor} />

            {/* Layer 3 - Gradient Overlay */}
            <div className="visual1-card__overlay">
                <svg width="356" height="180" viewBox="0 0 356 180" fill="none">
                    <rect width="356" height="180" fill="url(#linearGradient1)" />
                    <defs>
                        <linearGradient
                            id="linearGradient1"
                            x1="356"
                            y1="0"
                            x2="0"
                            y2="0"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="var(--main-color)" stopOpacity="0" />
                            <stop offset="0.3" stopColor="var(--main-color)" stopOpacity="0.2" />
                            <stop offset="1" stopColor="var(--main-color)" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Stats Badges */}
            <div className="visual1-card__badges">
                <div className="visual1-badge">
                    <div className="visual1-badge__dot" style={{ backgroundColor: mainColor }} />
                    <span>Tommy</span>
                </div>
                <div className="visual1-badge">
                    <div className="visual1-badge__dot" style={{ backgroundColor: secondaryColor }} />
                    <span>Sarah</span>
                </div>
            </div>
        </div>
    );
}

function Layer1({ mainColor, secondaryColor }) {
    return (
        <div className="visual1-layer1">
            <svg className="visual1-layer1__svg" viewBox="0 0 712 220" fill="none">
                {/* Bar chart with much taller bars */}
                <path d="M8 180C8 178.343 9.34315 177 11 177H25C26.6569 177 28 178.343 28 180V220H8V180Z" fill={mainColor} />
                <path d="M32 140C32 138.343 33.3431 137 35 137H49C50.6569 137 52 138.343 52 140V220H32V140Z" fill={secondaryColor} />
                <path d="M67 160C67 158.343 68.3431 157 70 157H84C85.6569 157 87 158.343 87 160V220H67V160Z" fill={mainColor} />
                <path d="M91 90C91 88.343 92.3431 87 94 87H108C109.657 87 111 88.343 111 90V220H91V90Z" fill={secondaryColor} />
                <path d="M115 120C115 118.343 116.343 117 118 117H132C133.657 117 135 118.343 135 120V220H115V120Z" fill={mainColor} />
                <path d="M139 70C139 68.343 140.343 67 142 67H156C157.657 67 159 68.343 159 70V220H139V70Z" fill={mainColor} />
                <path d="M163 100C163 98.343 164.343 97 166 97H180C181.657 97 183 98.343 183 100V220H163V100Z" fill={secondaryColor} />
                <path d="M187 50C187 48.343 188.343 47 190 47H204C205.657 47 207 48.343 207 50V220H187V50Z" fill={mainColor} />
                <path d="M211 130C211 128.343 212.343 127 214 127H228C229.657 127 231 128.343 231 130V220H211V130Z" fill={secondaryColor} />
                <path d="M235 80C235 78.343 236.343 77 238 77H252C253.657 77 255 78.343 255 80V220H235V80Z" fill={mainColor} />
                <path d="M259 150C259 148.343 260.343 147 262 147H276C277.657 147 279 148.343 279 150V220H259V150Z" fill={secondaryColor} />
                <path d="M283 60C283 58.343 284.343 57 286 57H300C301.657 57 303 58.343 303 60V220H283V60Z" fill={mainColor} />
            </svg>
        </div>
    );
}
