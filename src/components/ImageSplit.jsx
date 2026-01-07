import { useState, useRef, useEffect } from 'react';
import './ImageSplit.css';

/**
 * ImageSplit - Dynamic image split effect
 * Splits image into sections that animate on hover/scroll
 * Inspired by badtz-ui image-split
 */
export default function ImageSplit({
    src,
    alt = '',
    sections = 9,
    offsetStep = 30,
    initialBorderOpacity = 0.4,
    enableBorder = true,
    borderColor = '#ffffff',
    viewportThreshold = 0.3,
    className = '',
    ...props
}) {
    const [isInView, setIsInView] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef(null);

    // Intersection Observer for scroll-triggered animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: viewportThreshold }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [viewportThreshold]);

    // Generate sections array
    const sectionElements = Array.from({ length: sections }, (_, index) => {
        const isMiddle = Math.floor(sections / 2);
        const distanceFromMiddle = Math.abs(index - isMiddle);
        const offset = distanceFromMiddle * offsetStep;
        const delay = index * 0.05;

        return (
            <div
                key={index}
                className="image-split-section"
                style={{
                    '--section-index': index,
                    '--section-offset': `${offset}px`,
                    '--section-delay': `${delay}s`,
                    '--sections-count': sections,
                    '--border-opacity': initialBorderOpacity,
                    '--border-color': borderColor,
                    height: `${100 / sections}%`,
                    backgroundImage: `url(${src})`,
                    backgroundSize: `100% ${sections * 100}%`,
                    backgroundPosition: `0 ${(index / (sections - 1)) * 100}%`,
                }}
            >
                {enableBorder && <div className="section-border" />}
            </div>
        );
    });

    return (
        <div
            ref={containerRef}
            className={`image-split ${isInView ? 'image-split-in-view' : ''} ${isHovered ? 'image-split-hovered' : ''} ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role="img"
            aria-label={alt}
            {...props}
        >
            <div className="image-split-container">
                {sectionElements}
            </div>
        </div>
    );
}
