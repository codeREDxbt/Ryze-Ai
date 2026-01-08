import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import './HeroParallax.css';

/**
 * HeroParallax - Parallax hero with scrolling product cards
 * Inspired by Aceternity UI
 */
export default function HeroParallax({ products = [], onOpenDemo }) {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    // Create three rows with different scroll speeds
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 0]),
        springConfig
    );

    return (
        <section
            ref={containerRef}
            className="hero-parallax"
        >
            <Header onOpenDemo={onOpenDemo} />
            <motion.div
                className="parallax-container"
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
            >
                <motion.div className="parallax-row" style={{ x: translateX }}>
                    {firstRow.map((product, idx) => (
                        <ProductCard key={`first-${idx}`} product={product} />
                    ))}
                </motion.div>
                <motion.div className="parallax-row" style={{ x: translateXReverse }}>
                    {secondRow.map((product, idx) => (
                        <ProductCard key={`second-${idx}`} product={product} />
                    ))}
                </motion.div>
                <motion.div className="parallax-row" style={{ x: translateX }}>
                    {thirdRow.map((product, idx) => (
                        <ProductCard key={`third-${idx}`} product={product} />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}

function Header({ onOpenDemo }) {
    return (
        <div className="parallax-header">
            <div className="parallax-header-content">
                <span className="parallax-badge">
                    ⚡ Trusted by 230+ advertisers
                </span>
                <h1 className="parallax-title">
                    AI-Powered Ad Management That{' '}
                    <span className="text-gradient">Actually Makes Money</span>
                </h1>
                <p className="parallax-subtitle">
                    80% of paid ads lose money. Ryze AI monitors your campaigns 24/7,
                    finds wasted spend, and optimizes performance automatically.
                </p>
                <div className="parallax-ctas">
                    <button onClick={onOpenDemo} className="btn btn-primary btn-lg">
                        Book a Demo
                    </button>
                    <button onClick={onOpenDemo} className="btn btn-ghost btn-lg">
                        Free Ad Review
                    </button>
                </div>

                {/* Trust Badges - Compact Row */}
                <div className="trust-badges">
                    <div className="trust-badge">
                        <div className="trust-badge-stars">★★★★★</div>
                        <span className="trust-badge-text">4.9 on G2</span>
                    </div>
                    <div className="trust-divider"></div>
                    <div className="trust-badge">
                        <div className="trust-badge-stars">★★★★★</div>
                        <span className="trust-badge-text">4.8 Trustpilot</span>
                    </div>
                    <div className="trust-divider"></div>
                    <div className="trust-badge">
                        <span className="trust-badge-icon">🏆</span>
                        <span className="trust-badge-text">#1 Product Hunt</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProductCard({ product }) {
    return (
        <Link to={product.link || '#'} className={`product-card ${product.featured ? 'featured' : ''}`}>
            <div className="product-card-image">
                {product.thumbnail ? (
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        loading="lazy"
                    />
                ) : (
                    <div className="product-card-placeholder">
                        <span>{product.title}</span>
                    </div>
                )}
            </div>
            <div className="product-card-overlay">
                <h3>{product.title}</h3>
            </div>
        </Link>
    );
}

/**
 * Generate sample products for demo
 */
export function generateSampleProducts() {
    return [
        { title: 'Dashboard Overview', link: '/features', thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop', featured: true },
        { title: 'Campaign Dashboard', link: '/features', thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop' },
        { title: 'AI Optimization', link: '/features', thumbnail: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600&auto=format&fit=crop' },
        { title: 'Real-time Analytics', link: '/features', thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600&auto=format&fit=crop' },
        { title: 'Budget Management', link: '/features', thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop' },
        { title: 'Performance Tracking', link: '/features', thumbnail: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop' },
        { title: 'Creative Studio', link: '/features', thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop' },
        { title: 'Audience Insights', link: '/features', thumbnail: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop' },
        { title: 'A/B Testing', link: '/features', thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop' },
        { title: 'ROI Reports', link: '/features', thumbnail: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=600&auto=format&fit=crop' },
        { title: 'Smart Alerts', link: '/features', thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600&auto=format&fit=crop' },
        { title: 'Multi-Platform', link: '/features', thumbnail: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop' },
        { title: 'Keyword Manager', link: '/features', thumbnail: 'https://images.unsplash.com/photo-1574607383476-f517f260d30b?q=80&w=600&auto=format&fit=crop' },
        { title: 'Bid Automation', link: '/features', thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop' },
        { title: 'Campaign Audit', link: '/features', thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop' },
    ];
}
