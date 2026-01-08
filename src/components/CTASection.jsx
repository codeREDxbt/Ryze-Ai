import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import BookDemoButton from './BookDemoButton';
import './CTASection.css';

export default function CTASection({
    title,
    subtitle,
    primaryCTA = { text: 'Get Started', link: '/demo' },
    secondaryCTA,
    variant = 'default', // 'default', 'gradient', 'dark', 'split'
    children,
}) {
    return (
        <section className={`cta-section section cta-${variant}`}>
            <div className="container">
                <div className="cta-content">
                    <div className="cta-text">
                        {title && <h2>{title}</h2>}
                        {subtitle && <p>{subtitle}</p>}
                    </div>

                    <div className="cta-actions">
                        {primaryCTA.link === '/demo' ? (
                            <BookDemoButton
                                className="btn-lg"
                                trackingLocation="cta_section"
                            >
                                {primaryCTA.text}
                            </BookDemoButton>
                        ) : (
                            <Link to={primaryCTA.link} className="btn btn-primary btn-lg">
                                {primaryCTA.text}
                                <ArrowRight size={18} aria-hidden="true" />
                            </Link>
                        )}
                        {secondaryCTA && (
                            <Link to={secondaryCTA.link} className="btn btn-ghost btn-lg">
                                {secondaryCTA.text}
                            </Link>
                        )}
                    </div>

                    {children && (
                        <div className="cta-extra">
                            {children}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
