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
    const Bars = () => (
        <>
            <path d="M8 178C8 176.343 9.34315 175 11 175H25C26.6569 175 28 176.343 28 178V180H8V178Z" fill={mainColor} />
            <path d="M32 168C32 166.343 33.3431 165 35 165H49C50.6569 165 52 166.343 52 168V180H32V168Z" fill={secondaryColor} />
            <path d="M67 173C67 171.343 68.3431 170 70 170H84C85.6569 170 87 171.343 87 173V180H67V173Z" fill={mainColor} />
            <path d="M91 153C91 151.343 92.3431 150 94 150H108C109.657 150 111 151.343 111 153V180H91V153Z" fill={secondaryColor} />
            <path d="M115 163C115 161.343 116.343 160 118 160H132C133.657 160 135 161.343 135 163V180H115V163Z" fill={mainColor} />
            <path d="M126 142C126 140.343 127.343 139 129 139H143C144.657 139 146 140.343 146 142V180H126V142Z" fill={mainColor} />
            <path d="M150 158C150 156.343 151.343 155 153 155H167C168.657 155 170 156.343 170 158V180H150V158Z" fill={secondaryColor} />
            <path d="M187 133C187 131.343 188.343 130 190 130H204C205.657 130 207 131.343 207 133V180H187V133Z" fill={mainColor} />
            <path d="M211 163C211 161.343 212.343 160 214 160H228C229.657 160 231 161.343 231 163V180H211V163Z" fill={secondaryColor} />
        </>
    );

    return (
        <div className="visual1-layer1">
            <svg className="visual1-layer1__svg" viewBox="0 0 712 180" fill="none">
                <g>
                    <Bars />
                </g>
                <g transform="translate(240, 0)">
                    <Bars />
                </g>
                <g transform="translate(480, 0)">
                    <Bars />
                </g>
            </svg>
        </div>
    );
}
