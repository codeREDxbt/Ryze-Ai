import { useState, useEffect, useRef } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import './Stats.css';

function AnimatedCounter({ value, suffix = '', prefix = '', duration = 2000 }) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const numericValue = parseFloat(value.toString().replace(/[^0-9.-]/g, ''));
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            setCount(Math.floor(numericValue * easeOutExpo));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(numericValue);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, value, duration]);

    return (
        <span ref={ref} className="stat-value">
            {prefix}{count}{suffix}
        </span>
    );
}

// Mini Sparkline Chart Component
function MiniSparkline({ trend = 'up', color = '#10b981', index = 0 }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    // Generate smooth curve points based on trend
    const generatePoints = () => {
        if (trend === 'up') {
            // Upward trend with some variation
            return [
                { x: 0, y: 35 },
                { x: 15, y: 30 },
                { x: 30, y: 28 },
                { x: 45, y: 22 },
                { x: 60, y: 18 },
                { x: 75, y: 12 },
                { x: 90, y: 8 },
                { x: 100, y: 5 }
            ];
        } else {
            // Downward trend (for "good" decreases like cost reduction)
            return [
                { x: 0, y: 8 },
                { x: 15, y: 12 },
                { x: 30, y: 15 },
                { x: 45, y: 20 },
                { x: 60, y: 25 },
                { x: 75, y: 30 },
                { x: 90, y: 33 },
                { x: 100, y: 35 }
            ];
        }
    };

    const points = generatePoints();
    const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
    const areaPath = `${linePath} L 100 40 L 0 40 Z`;

    return (
        <div ref={ref} className={`mini-sparkline ${isVisible ? 'visible' : ''}`}>
            <svg viewBox="0 0 100 40" preserveAspectRatio="none">
                <defs>
                    <linearGradient id={`sparkGradient-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor={color} stopOpacity="0.4" />
                        <stop offset="100%" stopColor={color} stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id={`lineGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={color} stopOpacity="0.5" />
                        <stop offset="100%" stopColor={color} stopOpacity="1" />
                    </linearGradient>
                </defs>
                {/* Area fill */}
                <path
                    d={areaPath}
                    fill={`url(#sparkGradient-${index})`}
                    className="sparkline-area"
                />
                {/* Line */}
                <path
                    d={linePath}
                    fill="none"
                    stroke={`url(#lineGradient-${index})`}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="sparkline-line"
                />
                {/* End dot */}
                <circle
                    cx={points[points.length - 1].x}
                    cy={points[points.length - 1].y}
                    r="3"
                    fill={color}
                    className="sparkline-dot"
                />
            </svg>
        </div>
    );
}

export default function Stats({
    title,
    subtitle,
    stats,
    variant = 'default', // 'default', 'gradient', 'cards'
}) {
    // Colors for each stat
    const statColors = ['#10b981', '#22c55e', '#f59e0b', '#8b5cf6'];

    // Live Impact Counter - continuously incrementing
    const [impactValue, setImpactValue] = useState(2847392);

    useEffect(() => {
        const interval = setInterval(() => {
            // Add random amount between 50-200 every 2 seconds
            setImpactValue(prev => prev + Math.floor(Math.random() * 150) + 50);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    // Format number with commas and rupee symbol
    const formatCurrency = (num) => {
        return '₹' + num.toLocaleString('en-IN');
    };

    return (
        <section className={`stats-section section stats-${variant}`}>
            <div className="container">
                {(title || subtitle) && (
                    <div className="section-header">
                        {title && <h2>{title}</h2>}
                        {subtitle && <p>{subtitle}</p>}

                        {/* Live Impact Counter */}
                        <div className="live-impact-counter">
                            <span className="impact-label">Total Ad Spend Optimized</span>
                            <span className="impact-value">{formatCurrency(impactValue)}</span>
                            <span className="impact-live-badge">
                                <span className="live-dot"></span>
                                LIVE
                            </span>
                        </div>
                    </div>
                )}

                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`stat-item ${stat.trend}`}
                            style={{ '--delay': `${index * 0.1}s`, '--stat-color': statColors[index % statColors.length] }}
                        >
                            {/* Mini Sparkline Visualization */}
                            <MiniSparkline
                                trend={stat.trend}
                                color={statColors[index % statColors.length]}
                                index={index}
                            />

                            <div className="stat-content">
                                {stat.prefix && <span className="stat-prefix">{stat.prefix}</span>}
                                <AnimatedCounter
                                    value={stat.value}
                                    suffix={stat.suffix || ''}
                                    prefix={stat.valuePrefix || ''}
                                />
                                {stat.trend && (
                                    <span className={`stat-trend stat-trend-${stat.trend}`}>
                                        {stat.trend === 'up' ? (
                                            <TrendingUp size={20} />
                                        ) : (
                                            <TrendingDown size={20} />
                                        )}
                                    </span>
                                )}
                            </div>
                            <span className="stat-label">{stat.label}</span>
                            {stat.description && (
                                <span className="stat-description">{stat.description}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
