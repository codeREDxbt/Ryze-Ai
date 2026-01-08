import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import DemoModal from './DemoModal';
import './ResizableNavbar.css';

/**
 * ResizableNavbar - Navbar that shrinks on scroll
 * Inspired by Aceternity UI
 */
export function Navbar({ children, className = '' }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        let rafId = null;
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            // Batch reads and schedule state update via rAF
            if (rafId) return;

            rafId = requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                const shouldBeScrolled = scrollY > 50;

                if (shouldBeScrolled !== isScrolled) {
                    setIsAnimating(true);
                    setIsScrolled(shouldBeScrolled);
                    // Remove will-change after animation completes
                    setTimeout(() => setIsAnimating(false), 600);
                }

                lastScrollY = scrollY;
                rafId = null;
            });
        };

        // Use passive listener for better scroll performance
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [isScrolled]);

    return (
        <header
            className={`resizable-navbar ${isScrolled ? 'scrolled' : ''} ${className}`}
            role="banner"
        >
            <div
                className={`navbar-container ${isScrolled ? 'navbar-scrolled' : ''} ${isAnimating ? 'navbar-animating' : ''}`}
                data-state={isScrolled ? 'compact' : 'default'}
            >
                {children}
            </div>
        </header>
    );
}

export function NavBody({ children, className = '' }) {
    return (
        <div className={`nav-body ${className}`}>
            {children}
        </div>
    );
}

export function NavItems({ items, className = '', onItemClick }) {
    const location = useLocation();

    const handleNavClick = (e, item) => {
        e.preventDefault();

        const [path, hash] = item.link.split('#');
        const targetPath = path || '/';
        const isCurrentPage = location.pathname === targetPath;

        // If on the same page
        if (isCurrentPage) {
            if (hash) {
                // Scroll to section with smooth animation
                setTimeout(() => {
                    const element = document.getElementById(hash);
                    if (element) {
                        element.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                            inline: 'nearest'
                        });
                    }
                }, 100);
            } else {
                // Scroll to top smoothly
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else {
            // Navigate to different page
            window.location.href = item.link;

            // After navigation, handle scroll
            if (!hash) {
                // If no hash, scroll to top after page loads
                setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
            }
        }

        if (onItemClick) onItemClick();
    };

    return (
        <nav className={`nav-items ${className}`}>
            {items.map((item, index) => (
                <Link
                    key={index}
                    to={item.link}
                    className={`nav-item ${location.pathname === item.link.split('#')[0] ? 'nav-item-active' : ''}`}
                    onClick={(e) => handleNavClick(e, item)}
                >
                    {item.name}
                </Link>
            ))}
        </nav>
    );
}

export function MobileNav({ children, className = '', visible }) {
    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className={`mobile-nav-panel ${className}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export function MobileNavHeader({ children, className = '' }) {
    return (
        <div className={`mobile-nav-header ${className}`}>
            {children}
        </div>
    );
}

export function MobileNavMenu({ children, className = '', visible, onClose }) {
    return (
        <div className={`mobile-nav-menu ${className}`}>
            {children}
        </div>
    );
}

export function MobileNavToggle({ isOpen, onClick }) {
    return (
        <button
            className="mobile-nav-toggle"
            onClick={onClick}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
        >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
    );
}

export function NavbarButton({ href, as: Component = 'a', children, className = '', variant = 'primary', onClick }) {
    const buttonClass = `navbar-button navbar-button-${variant} ${className}`;

    // If onClick is provided, it's a button action (like opening modal)
    if (onClick) {
        return (
            <button className={buttonClass} onClick={onClick}>
                {children}
            </button>
        );
    }

    if (Component === 'a' || Component === Link) {
        return (
            <Link to={href} className={buttonClass}>
                {children}
            </Link>
        );
    }

    return (
        <Component className={buttonClass}>
            {children}
        </Component>
    );
}

export function NavbarLogo({ children, className = '' }) {
    const location = useLocation();

    const handleClick = (e) => {
        e.preventDefault();

        if (location.pathname === '/') {
            // If already on homepage, scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // Navigate to homepage
            window.location.href = '/';
        }
    };

    return (
        <Link to="/" className={`navbar-logo ${className}`} onClick={handleClick}>
            {children}
        </Link>
    );
}

export function ThemeToggle({ isDark, onToggle }) {
    return (
        <button
            className="navbar-theme-toggle"
            onClick={onToggle}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
        >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
}

/**
 * Complete ResizableNavbar with all features
 */
import BookDemoButton from './BookDemoButton';

export default function ResizableNavbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const location = useLocation();

    // Initialize theme from localStorage
    useEffect(() => {
        // ... (theme code unchanged) ...
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            setIsDarkTheme(false);
            document.documentElement.classList.add('light-theme');
        } else {
            setIsDarkTheme(true);
            document.documentElement.classList.remove('light-theme');
        }
    }, []);

    // Apply theme changes
    useEffect(() => {
        // ... (theme code unchanged) ...
        if (isDarkTheme) {
            document.documentElement.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkTheme]);

    useEffect(() => {
        setIsMobileMenuOpen(false);

        // Scroll to top or hash on route change
        const hash = location.hash.substring(1); // Remove # symbol
        if (hash) {
            // Wait for page to render, then scroll to section
            setTimeout(() => {
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest'
                    });
                }
            }, 300);
        } else {
            // Scroll to top smoothly on route change
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

    // Measure navbar height and update CSS variable
    useEffect(() => {
        const updateNavHeight = () => {
            const navbar = document.querySelector('.resizable-navbar');
            if (navbar) {
                const height = navbar.offsetHeight;
                document.documentElement.style.setProperty('--nav-h', `${height}px`);
                // Also reset scroll padding to match
                document.documentElement.style.scrollPaddingTop = `calc(${height}px + 12px)`;
            }
        };

        // Initial update
        updateNavHeight();

        // Use ResizeObserver for robust updates
        const resizeObserver = new ResizeObserver(() => {
            // Debounce slightly if needed, but usually cheap enough
            requestAnimationFrame(updateNavHeight);
        });

        const navbar = document.querySelector('.resizable-navbar');
        if (navbar) {
            resizeObserver.observe(navbar);
        }

        return () => resizeObserver.disconnect();
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.body.classList.add('modal-open');
        } else {
            document.body.style.overflow = '';
            document.body.classList.remove('modal-open');
        }
        return () => {
            document.body.style.overflow = '';
            document.body.classList.remove('modal-open');
        };
    }, [isMobileMenuOpen]);

    // Escape key closes mobile menu (accessibility)
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('keydown', handleEscape);
        }
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isMobileMenuOpen]);

    const navItems = [
        { name: 'Features', link: '/features' },
        { name: 'Pricing', link: '/pricing' },
        { name: 'Reviews', link: '/#testimonials' },
    ];

    return (
        <Navbar>
            <NavBody>
                <NavbarLogo>
                    <svg viewBox="0 0 120 32" className="logo-svg" aria-hidden="true">
                        <defs>
                            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#10b981" />
                                <stop offset="100%" stopColor="#34d399" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M4 4h12l-4 12h8l-12 12 4-12H4l8-12z"
                            fill="url(#logoGradient)"
                        />
                        <text x="28" y="22" fill="currentColor" fontSize="18" fontWeight="800">
                            RYZE
                        </text>
                        <text x="78" y="22" fill="var(--accent-color)" fontSize="18" fontWeight="800">
                            AI
                        </text>
                    </svg>
                </NavbarLogo>

                <NavItems items={navItems} />

                <div className="navbar-actions">
                    <ThemeToggle
                        isDark={isDarkTheme}
                        onToggle={() => setIsDarkTheme(!isDarkTheme)}
                    />
                    <BookDemoButton
                        variant="primary"
                        className="navbar-button"
                        showIcon={false}
                        trackingLocation="navbar"
                    />
                    <MobileNavToggle
                        isOpen={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </div>
            </NavBody>

            <MobileNav visible={isMobileMenuOpen}>
                <MobileNavMenu visible={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
                    <NavItems
                        items={navItems}
                        className="mobile-nav-items"
                        onItemClick={() => setIsMobileMenuOpen(false)}
                    />
                    <div style={{ marginTop: '0.5rem', padding: '0 1rem' }}>
                        <BookDemoButton
                            variant="primary"
                            className="mobile-demo-btn"
                            style={{ width: '100%', justifyContent: 'center' }}
                            trackingLocation="mobile-menu"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    );
}
