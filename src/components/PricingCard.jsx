import { useState } from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookDemoButton from './BookDemoButton';
import BorderBeam from './BorderBeam';
import './PricingCard.css';

export default function PricingCard({
    name,
    description,
    price,
    period = '/month',
    currency = '₹',
    features,
    cta = { text: 'Get Started', link: '/demo' },
    isPopular = false,
    isEnterprise = false,
    onOpenDemo,
}) {
    const handleCTAClick = (e) => {
        if (cta.action === 'demo' && onOpenDemo) {
            e.preventDefault();
            onOpenDemo();
        }
    };
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <article className={`pricing-card ${isPopular ? 'pricing-card-popular' : ''} ${isEnterprise ? 'pricing-card-enterprise' : ''} ${isExpanded ? 'pricing-card-expanded' : ''}`}>
            {isPopular && <BorderBeam colorFrom="var(--accent-color)" colorTo="var(--accent-hover)" delay={0} />}
            {isEnterprise && <BorderBeam colorFrom="#8b5cf6" colorTo="#a78bfa" delay={0.5} />}

            {isPopular && (
                <div className="pricing-badge">
                    Most Popular
                </div>
            )}

            <div className="pricing-header">
                <h3 className="pricing-name">{name}</h3>
                {description && <p className="pricing-description">{description}</p>}
            </div>

            <div className="pricing-price">
                {isEnterprise ? (
                    <span className="price-custom">Custom</span>
                ) : (
                    <>
                        <span className="price-currency">{currency}</span>
                        <span className="price-amount">{price.toLocaleString()}</span>
                        <span className="price-period">{period}</span>
                    </>
                )}
            </div>

            <ul className="pricing-features">
                {features.slice(0, isExpanded ? features.length : 3).map((feature, index) => (
                    <li key={index} className={feature.included ? '' : 'feature-excluded'}>
                        <Check size={18} className="feature-check" aria-hidden="true" />
                        <span>{feature.text}</span>
                    </li>
                ))}
            </ul>

            {features.length > 3 && (
                <button
                    className="pricing-expand-btn"
                    onClick={() => setIsExpanded(!isExpanded)}
                    aria-expanded={isExpanded}
                >
                    {isExpanded ? 'Show Less' : `+${features.length - 3} More Features`}
                </button>
            )}

            {cta.link === '/demo' ? (
                <BookDemoButton
                    variant={isPopular ? 'primary' : 'ghost'}
                    size="lg"
                    className="pricing-cta"
                    trackingLocation={`pricing_${name.toLowerCase()}`}
                    showIcon={false}
                >
                    {cta.text}
                </BookDemoButton>
            ) : (
                <Link
                    to={cta.link || '#'}
                    className={`btn ${isPopular ? 'btn-primary' : 'btn-ghost'} btn-lg pricing-cta`}
                >
                    {cta.text}
                </Link>
            )}
        </article>
    );
}
