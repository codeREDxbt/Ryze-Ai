import { Link } from 'react-router-dom';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import './Hero.css';

export default function Hero({
    badge,
    headline,
    highlightedText,
    subheadline,
    primaryCTA = { text: 'Book a Demo', link: '/#demo' },
    secondaryCTA = { text: 'Free Ad Review', link: '/#demo' },
    socialProof,
    variant = 'center', // 'center', 'left', 'split'
    showVideo = false,
    children,
}) {
    return (
        <section className={`hero hero-${variant}`}>
            <div className="hero-bg">
                <div className="hero-gradient" aria-hidden="true" />
                <div className="hero-grid-pattern" aria-hidden="true" />
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    {badge && (
                        <div className="hero-badge">
                            <span className="badge badge-primary">
                                <CheckCircle size={14} />
                                {badge}
                            </span>
                        </div>
                    )}

                    <h1 className="hero-headline">
                        {headline}{' '}
                        {highlightedText && (
                            <span className="text-gradient">{highlightedText}</span>
                        )}
                    </h1>

                    {subheadline && (
                        <p className="hero-subheadline">{subheadline}</p>
                    )}

                    <div className="hero-ctas">
                        <Link to={primaryCTA.link} className="btn btn-primary btn-lg">
                            {primaryCTA.text}
                            <ArrowRight size={18} aria-hidden="true" />
                        </Link>
                        <Link to={secondaryCTA.link} className="btn btn-ghost btn-lg">
                            {showVideo && <Play size={18} aria-hidden="true" />}
                            {secondaryCTA.text}
                        </Link>
                    </div>

                    {socialProof && (
                        <div className="hero-social-proof">
                            <div className="social-proof-avatars">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="avatar" style={{ '--i': i }}>
                                        <div className="avatar-placeholder" />
                                    </div>
                                ))}
                            </div>
                            <div className="social-proof-text">
                                <div className="social-proof-stats">
                                    {socialProof.stats.map((stat, index) => (
                                        <span key={index}>
                                            <strong>{stat.value}</strong> {stat.label}
                                            {index < socialProof.stats.length - 1 && ' • '}
                                        </span>
                                    ))}
                                </div>
                                {socialProof.message && (
                                    <span className="social-proof-message">{socialProof.message}</span>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {children && (
                    <div className="hero-visual">
                        {children}
                    </div>
                )}
            </div>
        </section>
    );
}
