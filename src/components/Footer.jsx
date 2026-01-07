import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        product: [
            { label: 'Features', path: '/features' },
            { label: 'Pricing', path: '/pricing' },
            { label: 'Integrations', path: '/integrations' },
            { label: 'Changelog', path: '/changelog' },
        ],
        company: [
            { label: 'About Us', path: '/about' },
            { label: 'Careers', path: '/careers' },
            { label: 'Blog', path: '/blog' },
            { label: 'Contact', path: '/contact' },
        ],
        resources: [
            { label: 'Documentation', path: '/docs' },
            { label: 'Help Center', path: '/help' },
            { label: 'Case Studies', path: '/case-studies' },
            { label: 'API Reference', path: '/api' },
        ],
        legal: [
            { label: 'Privacy Policy', path: '/privacy' },
            { label: 'Terms of Service', path: '/terms' },
            { label: 'Cookie Policy', path: '/cookies' },
            { label: 'GDPR', path: '/gdpr' },
        ],
    };

    const platforms = [
        {
            name: 'Meta',
            logo: (
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}>
                    <path d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                </svg>
            )
        },
        {
            name: 'Google Ads',
            logo: (
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}>
                    <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72C19 4.72 16.64 2 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c9.76 0 10.32-8.4 8.15-10.9z" />
                </svg>
            )
        },
        {
            name: 'Instagram',
            logo: (
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}>
                    <path d="M12 2.16c3.2 0 3.58.01 4.85.07c3.25.15 4.77 1.69 4.92 4.92c.06 1.27.07 1.65.07 4.85c0 3.2-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92c-1.27.06-1.64.07-4.85.07c-3.2 0-3.58-.01-4.85-.07c-3.26-.15-4.77-1.69-4.92-4.92c-.06-1.27-.07-1.64-.07-4.85c0-3.2.01-3.58.07-4.85c.14-3.23 1.66-4.77 4.92-4.92c1.27-.06 1.65-.07 4.85-.07m0-2.16c-3.26 0-3.66.01-4.94.07c-4.35.2-6.78 2.62-6.98 6.98c-.06 1.28-.07 1.69-.07 4.94c0 3.26.01 3.66.07 4.94c.2 4.36 2.62 6.78 6.98 6.98c1.28.06 1.69.07 4.94.07c3.26 0 3.66-.01 4.94-.07c4.35-.2 6.78-2.62 6.98-6.98c.06-1.28.07-1.69.07-4.94c0-3.26-.01-3.66-.07-4.94c-.2-4.36-2.62-6.78-6.98-6.98C15.66.01 15.25 0 12 0z" />
                    <path d="M12 5.84c-3.4 0-6.16 2.76-6.16 6.16c0 3.4 2.76 6.16 6.16 6.16c3.4 0 6.16-2.76 6.16-6.16c0-3.4-2.76-6.16-6.16-6.16zm0 10.16c-2.21 0-4-1.79-4-4c0-2.21 1.79-4 4-4c2.21 0 4 1.79 4 4c0 2.21-1.79 4-4 4z" />
                    <circle cx="18.41" cy="5.59" r="1.44" />
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            logo: (
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}>
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            )
        },
    ];

    return (
        <footer className="footer">
            <div className="container">
                {/* Newsletter Section */}
                <div className="footer-newsletter">
                    <div className="newsletter-content">
                        <h3>Stay ahead of the curve</h3>
                        <p>Get AI advertising insights and updates delivered to your inbox.</p>
                    </div>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="input-wrapper">
                            <Mail size={18} className="input-icon" aria-hidden="true" />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input"
                                aria-label="Email address"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Subscribe
                            <ArrowRight size={16} aria-hidden="true" />
                        </button>
                    </form>
                </div>

                <div className="divider" />

                {/* Footer Links */}
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo" aria-label="Ryze AI Home">
                            <svg viewBox="0 0 120 32" className="logo-svg" aria-hidden="true">
                                <defs>
                                    <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#10b981" />
                                        <stop offset="100%" stopColor="#34d399" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M4 4h12l-4 12h8l-12 12 4-12H4l8-12z"
                                    fill="url(#footerLogoGradient)"
                                />
                                <text x="28" y="22" fill="currentColor" fontSize="18" fontWeight="800">
                                    RYZE
                                </text>
                                <text x="78" y="22" fill="var(--accent-color)" fontSize="18" fontWeight="800">
                                    AI
                                </text>
                            </svg>
                        </Link>
                        <p className="footer-tagline">
                            AI-powered advertising that actually makes money. Stop wasting budget, start scaling what works.
                        </p>
                        <div className="footer-socials">
                            <a
                                href="https://linkedin.com/company/get-ryze-ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="Follow us on LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://twitter.com/getryzeai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="Follow us on Twitter"
                            >
                                <Twitter size={20} />
                            </a>
                            <a
                                href="mailto:hello@get-ryze.ai"
                                className="social-link"
                                aria-label="Email us"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Link Columns */}
                    <div className="footer-links-column">
                        <h4>Product</h4>
                        <ul>
                            {footerLinks.product.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-links-column">
                        <h4>Company</h4>
                        <ul>
                            {footerLinks.company.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-links-column">
                        <h4>Resources</h4>
                        <ul>
                            {footerLinks.resources.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-links-column">
                        <h4>Legal</h4>
                        <ul>
                            {footerLinks.legal.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="divider" />

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="copyright">
                        © {currentYear} Ryze AI. All rights reserved.
                    </p>
                    <div className="footer-platforms">
                        <span>Powered integrations:</span>
                        <div className="platform-logos">
                            {platforms.map((platform) => (
                                <span key={platform.name} className="platform-logo" title={platform.name}>
                                    {platform.logo}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
