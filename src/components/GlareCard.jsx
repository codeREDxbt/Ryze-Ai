import './GlareCard.css';

/**
 * GlareCard - Card with glare effect on hover
 * Inspired by Aceternity UI and Linear's customers page
 */
export default function GlareCard({ children, className = '' }) {
    return (
        <div className={`glare-card ${className}`}>
            <div className="glare-card__content">
                {children}
            </div>
            <div className="glare-card__glow" />
        </div>
    );
}
