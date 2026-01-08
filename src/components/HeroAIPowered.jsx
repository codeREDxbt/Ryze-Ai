import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, Zap, TrendingDown, Brain, Target } from 'lucide-react';
import './HeroAIPowered.css';

/**
 * HeroAIPowered - Modern SaaS hero with floating feature chips
 * Inspired by AI-Powered Agency Dribbble design
 * Uses CSS-only animations for performance
 */

// Data-driven feature chips for easy content editing
const featureChips = [
    { label: 'Faster Creatives', icon: Sparkles, position: 'top-left' },
    { label: 'Lower CAC', icon: TrendingDown, position: 'top-right' },
    { label: '24/7 Optimization', icon: Zap, position: 'bottom-left' },
    { label: '+63% ROAS', icon: TrendingUp, position: 'bottom-right' },
];

// Trust badges data
const trustBadges = [
    { stars: '★★★★★', text: '4.9 on G2' },
    { stars: '★★★★★', text: '4.8 Trustpilot' },
    { icon: '🏆', text: '#1 Product Hunt' },
];

export default function HeroAIPowered({ onOpenDemo }) {
    const handleCTAClick = (e) => {
        if (onOpenDemo) {
            e.preventDefault();
            onOpenDemo();
        }
    };

    return (
        <section className="hero-ai-powered" aria-labelledby="hero-heading">
            {/* Background Effects */}
            <div className="hero-ai-bg" aria-hidden="true">
                <div className="hero-ai-gradient" />
                <div className="hero-ai-grid" />
            </div>

            <div className="container hero-ai-container">
                {/* Left Column - Content */}
                <div className="hero-ai-content">
                    {/* Eyebrow Badge */}
                    <div className="hero-ai-badge">
                        <span className="badge badge-primary">
                            <Zap size={14} aria-hidden="true" />
                            AI Powered Agency
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 id="hero-heading" className="hero-ai-headline">
                        AI-Powered Ad Management That{' '}
                        <span className="text-gradient">Actually Makes Money</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="hero-ai-subheadline">
                        80% of paid ads lose money. Ryze AI monitors your campaigns 24/7,
                        finds wasted spend, and optimizes performance automatically.
                    </p>

                    {/* CTAs */}
                    <div className="hero-ai-ctas">
                        <button
                            onClick={handleCTAClick}
                            className="btn btn-primary btn-lg"
                            aria-label="Book a demo to see Ryze AI in action"
                        >
                            Book a Demo
                            <ArrowRight size={18} aria-hidden="true" />
                        </button>
                        <button
                            onClick={handleCTAClick}
                            className="btn btn-ghost btn-lg"
                            aria-label="Get a free review of your ad account"
                        >
                            Free Ad Review
                        </button>
                    </div>

                    {/* Trust Badges */}
                    <div className="hero-ai-trust" role="list" aria-label="Trust indicators">
                        {trustBadges.map((badge, index) => (
                            <div key={index} className="trust-item" role="listitem">
                                {badge.stars && (
                                    <span className="trust-stars" aria-label="5 star rating">
                                        {badge.stars}
                                    </span>
                                )}
                                {badge.icon && (
                                    <span className="trust-icon" aria-hidden="true">
                                        {badge.icon}
                                    </span>
                                )}
                                <span className="trust-text">{badge.text}</span>
                                {index < trustBadges.length - 1 && (
                                    <span className="trust-divider" aria-hidden="true" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column - Visual */}
                <div className="hero-ai-visual" aria-hidden="true">
                    {/* Central Glow Orb */}
                    <div className="hero-ai-orb">
                        <div className="orb-inner">
                            <Brain size={48} className="orb-icon" />
                        </div>
                        <div className="orb-ring orb-ring-1" />
                        <div className="orb-ring orb-ring-2" />
                        <div className="orb-ring orb-ring-3" />
                    </div>

                    {/* Floating Feature Chips */}
                    {featureChips.map((chip, index) => (
                        <div
                            key={index}
                            className={`feature-chip feature-chip-${chip.position}`}
                            style={{ '--delay': `${index * 0.2}s` }}
                        >
                            <chip.icon size={16} className="chip-icon" />
                            <span className="chip-label">{chip.label}</span>
                        </div>
                    ))}

                    {/* Decorative Elements */}
                    <div className="hero-ai-dots" />
                </div>
            </div>
        </section>
    );
}
