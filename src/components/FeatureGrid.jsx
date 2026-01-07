import BorderBeam from './BorderBeam';
import './FeatureGrid.css';

export default function FeatureGrid({
    title,
    subtitle,
    features,
    columns = 3,
    variant = 'cards', // 'cards', 'icons', 'minimal'
}) {
    return (
        <section className="feature-grid-section section">
            <div className="container">
                {(title || subtitle) && (
                    <div className="section-header">
                        {title && <h2>{title}</h2>}
                        {subtitle && <p>{subtitle}</p>}
                    </div>
                )}

                <div className={`feature-grid feature-grid-${columns} feature-grid-${variant}`}>
                    {features.map((feature, index) => (
                        <article
                            key={index}
                            className="feature-card"
                            style={{ 
                                '--delay': `${index * 0.1}s`,
                                '--beam-delay': `${index * 0.15}s`
                            }}
                        >
                            <BorderBeam colorFrom="var(--accent-color)" colorTo="var(--accent-hover)" delay={`${index * 0.15}s`} size={80} />
                            
                            {feature.icon && (
                                <div className="feature-icon">
                                    {feature.icon}
                                </div>
                            )}
                            {feature.image && (
                                <div className="feature-image">
                                    <img src={feature.image} alt="" aria-hidden="true" />
                                </div>
                            )}
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                            {feature.link && (
                                <a href={feature.link} className="feature-link">
                                    Learn more →
                                </a>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
