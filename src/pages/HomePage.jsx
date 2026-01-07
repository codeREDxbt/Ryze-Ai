import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import Stats from '../components/Stats';
import CTASection from '../components/CTASection';
import BorderBeam from '../components/BorderBeam';
import AnimatedTestimonials from '../components/AnimatedTestimonials';
import HeroParallax, { generateSampleProducts } from '../components/HeroParallax';
import Visual3 from '../components/Visual3';
import { AnimatedDataCard } from '../components/AnimatedDataCard';
import GlareCard from '../components/GlareCard';
import {
    Zap,
    Brain,
    TrendingUp,
    Clock,
    Target,
    BarChart3,
    Sparkles,
    Shield,
    Workflow,
    RefreshCcw,
    DollarSign,
    Users
} from 'lucide-react';
import './HomePage.css';

export default function HomePage() {
    // Pain Points Data
    const painPoints = [
        {
            icon: <Target size={24} />,
            title: '100+ Settings to Master',
            description: 'Ad platforms have hundreds of options. One wrong setting can drain your budget overnight.',
        },
        {
            icon: <Clock size={24} />,
            title: 'Years to Become Expert',
            description: 'It takes 3-5 years to master paid advertising. Most businesses don\'t have that time.',
        },
        {
            icon: <RefreshCcw size={24} />,
            title: '24/7 Monitoring Required',
            description: 'Campaigns need constant attention. Miss a spike and you\'ve wasted thousands.',
        },
        {
            icon: <BarChart3 size={24} />,
            title: 'Data Overload',
            description: 'Hundreds of metrics to track. Which ones actually matter for YOUR business?',
        },
    ];

    // Platform Integrations
    const platforms = [
        {
            icon: (
                <svg viewBox="0 0 24 24" className="platform-logo meta-logo" fill="currentColor">
                    <path d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                </svg>
            ),
            title: 'Meta Ads',
            description: 'Facebook & Instagram campaigns with AI-powered audience optimization and creative analysis.',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" className="platform-logo google-logo" fill="currentColor">
                    <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72C19 4.72 16.64 2 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c9.76 0 10.32-8.4 8.15-10.9z" />
                </svg>
            ),
            title: 'Google Ads',
            description: 'Search, Display & YouTube campaigns. Smart bidding and keyword management on autopilot.',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" className="platform-logo instagram-logo" fill="currentColor">
                    <path d="M12 2.16c3.2 0 3.58.01 4.85.07c3.25.15 4.77 1.69 4.92 4.92c.06 1.27.07 1.65.07 4.85c0 3.2-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92c-1.27.06-1.64.07-4.85.07c-3.2 0-3.58-.01-4.85-.07c-3.26-.15-4.77-1.69-4.92-4.92c-.06-1.27-.07-1.64-.07-4.85c0-3.2.01-3.58.07-4.85c.14-3.23 1.66-4.77 4.92-4.92c1.27-.06 1.65-.07 4.85-.07m0-2.16c-3.26 0-3.66.01-4.94.07c-4.35.2-6.78 2.62-6.98 6.98c-.06 1.28-.07 1.69-.07 4.94c0 3.26.01 3.66.07 4.94c.2 4.36 2.62 6.78 6.98 6.98c1.28.06 1.69.07 4.94.07c3.26 0 3.66-.01 4.94-.07c4.35-.2 6.78-2.62 6.98-6.98c.06-1.28.07-1.69.07-4.94c0-3.26-.01-3.66-.07-4.94c-.2-4.36-2.62-6.78-6.98-6.98C15.66.01 15.25 0 12 0z" />
                    <path d="M12 5.84c-3.4 0-6.16 2.76-6.16 6.16c0 3.4 2.76 6.16 6.16 6.16c3.4 0 6.16-2.76 6.16-6.16c0-3.4-2.76-6.16-6.16-6.16zm0 10.16c-2.21 0-4-1.79-4-4c0-2.21 1.79-4 4-4c2.21 0 4 1.79 4 4c0 2.21-1.79 4-4 4z" />
                    <circle cx="18.41" cy="5.59" r="1.44" />
                </svg>
            ),
            title: 'Instagram Reels',
            description: 'Dominate vertical video with AI-optimized Reels strategies that stop the scroll.',
        },
    ];

    // How It Works Steps
    const howItWorks = [
        {
            icon: <Zap size={24} />,
            title: 'Connect Your Accounts',
            description: 'Link your ad platforms in seconds. Ryze AI immediately starts analyzing your campaigns.',
        },
        {
            icon: <Brain size={24} />,
            title: 'AI Analyzes Everything',
            description: '24/7 monitoring of ROAS, CTR, CPC, and 50+ metrics. Find wasted spend automatically.',
        },
        {
            icon: <TrendingUp size={24} />,
            title: 'Optimize & Scale',
            description: 'Get actionable recommendations. Approve changes with one click and watch performance soar.',
        },
    ];

    // Features Comparison
    const features = [
        {
            icon: <Sparkles size={24} />,
            title: 'AI Creative Generation',
            description: 'Generate winning ad creatives, headlines, and copy variations in seconds.',
        },
        {
            icon: <DollarSign size={24} />,
            title: 'Smart Budget Rebalancing',
            description: 'Automatically shift budget from underperformers to top campaigns in real-time.',
        },
        {
            icon: <Shield size={24} />,
            title: 'Wasted Spend Detection',
            description: 'Find and eliminate negative keywords and audiences draining your budget.',
        },
        {
            icon: <Workflow size={24} />,
            title: 'Campaign Autopilot',
            description: 'Set goals and let AI handle daily optimizations, A/B tests, and bid adjustments.',
        },
    ];

    // Results Stats
    const stats = [
        { value: 60, suffix: '%', valuePrefix: '+', label: 'Click-Through Rate', trend: 'up' },
        { value: 60, suffix: '%', valuePrefix: '-', label: 'Cost Per Click', trend: 'down' },
        { value: 90, suffix: '%', valuePrefix: '+', label: 'Return on Ad Spend', trend: 'up' },
        { value: 90, suffix: '%', valuePrefix: '-', label: 'Time Spent Managing', trend: 'down' },
    ];

    // Testimonials
    const testimonials = [
        {
            name: 'Mathilde Biggs',
            role: 'CEO',
            company: 'MotifDigital Agence',
            quote: 'Ryze\'s AI-driven ads outperform human optimization by a huge margin. We saw 63% better ROAS after switching to AI agents.',
            rating: 5,
            metric: { value: '+63%', label: 'ROAS improvement' },
            image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&h=800&fit=crop',
        },
        {
            name: 'Roger Dunn',
            role: 'Global Performance Lead',
            company: 'Rivert',
            quote: 'We were drowning with 7 people. Got back so many hours each week from reporting. Finally have bandwidth to focus on actual strategy.',
            rating: 5,
            metric: { value: '5x', label: 'faster audits' },
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&h=800&fit=crop',
        },
        {
            name: 'Daniel Roser',
            role: 'Marketing Director',
            company: 'TechFlow',
            quote: 'Found wasted spend in search terms we\'d never have caught manually. Cut those, reallocated budget. ROAS up 45%.',
            rating: 5,
            metric: { value: '+45%', label: 'ROAS increase' },
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&h=800&fit=crop',
        },
        {
            name: 'Elena Rodriguez',
            role: 'Head of Growth',
            company: 'ScaleUp',
            quote: 'The automated bid adjustments are scary good. It reacts to market changes faster than any human could.',
            rating: 5,
            metric: { value: '-20%', label: 'CPA reduction' },
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&h=800&fit=crop',
        },
        {
            name: 'James Chen',
            role: 'Founder',
            company: 'DTC Brands',
            quote: 'Ryze AI allowed us to scale from 10k to 100k/mo ad spend without hiring a single new media buyer.',
            rating: 5,
            metric: { value: '10x', label: 'spend scaling' },
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&h=800&fit=crop',
        },
        {
            name: 'Sarah Kline',
            role: 'VP Marketing',
            company: 'RetailNext',
            quote: 'The creative insights alone are confusingly accurate. It tells us exactly which hooks will work before we launch.',
            rating: 5,
            metric: { value: '3.5x', label: 'better CTR' },
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&h=800&fit=crop',
        },
        {
            name: 'Michael Ross',
            role: 'CMO',
            company: 'LogiTech',
            quote: 'Finally a tool that doesn\'t just report data but actually acts on it. It\'s like having a 24/7 media buyer.',
            rating: 5,
            metric: { value: '24/7', label: 'optimization' },
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&h=800&fit=crop',
        }
    ];

    return (
        <div className="home-page">
            {/* Hero Section with Parallax */}
            <HeroParallax products={generateSampleProducts()} />

            {/* Problem Statement */}
            <section id="problem" className="section problem-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">The Problem</span>
                        <h2>Why Most Paid Ads <span className="text-gradient">Lose Money</span></h2>
                        <p>Running profitable ads shouldn't require a PhD in data science or a 6-figure agency retainer.</p>
                    </div>

                    <div className="pain-points-grid">
                        {painPoints.map((point, index) => (
                            <div key={index} className="pain-point-card" style={{ '--delay': `${index * 0.1}s` }}>
                                <div className="pain-point-icon">
                                    {point.icon}
                                </div>
                                <h3>{point.title}</h3>
                                <p>{point.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platform Integrations - Premium GlareCards */}
            <section className="section platform-integrations-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Works With Your Existing Platforms</h2>
                        <p>Connect your ad accounts in seconds. Ryze AI supports all major advertising platforms.</p>
                    </div>
                    <div className="platform-cards-grid">
                        {platforms.map((platform, index) => (
                            <GlareCard key={index} className="platform-glare-card">
                                <div className="platform-card-content">
                                    <div className="platform-icon-wrapper" style={{
                                        background: index === 0 ? 'linear-gradient(135deg, #1877f2 0%, #3b5998 100%)' :
                                            index === 1 ? 'linear-gradient(135deg, #4285f4 0%, #34a853 50%, #fbbc04 75%, #ea4335 100%)' :
                                                'linear-gradient(135deg, #f58529 0%, #dd2a7b 50%, #8134af 100%)'
                                    }}>
                                        {platform.icon}
                                    </div>
                                    <h3 className="platform-card-title">{platform.title}</h3>
                                    <p className="platform-card-description">{platform.description}</p>
                                </div>
                            </GlareCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Capabilities Showcase */}
            <section className="section ai-showcase-section">
                <div className="container">
                    <div className="ai-showcase-grid">
                        <AnimatedDataCard
                            title="AI-Powered Analytics"
                            description="Real-time data visualization and insights powered by advanced machine learning algorithms."
                            mainColor="#10b981"
                            secondaryColor="#f59e0b"
                        />

                        <div className="ai-showcase-text">
                            <span className="section-badge">AI Technology</span>
                            <h2>Powered by <span className="text-gradient">Advanced AI</span></h2>
                            <p>Our AI agents analyze millions of data points in real-time, finding optimization opportunities that humans would miss.</p>
                            <ul className="ai-features-list">
                                <li><Sparkles size={18} /> Real-time campaign monitoring</li>
                                <li><Brain size={18} /> Predictive budget optimization</li>
                                <li><TrendingUp size={18} /> Automated A/B testing</li>
                                <li><Shield size={18} /> Anomaly detection & alerts</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="section how-it-works-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">How It Works</span>
                        <h2>From Chaos to <span className="text-gradient">Clarity</span> in 3 Steps</h2>
                        <p>No complex setup. No learning curve. Just results.</p>
                    </div>

                    <div className="steps-grid">
                        {howItWorks.map((step, index) => (
                            <div key={index} className="step-card" style={{ '--delay': `${index * 0.15}s` }}>
                                <div className="step-number">{index + 1}</div>
                                <div className="step-icon">{step.icon}</div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Comparison */}
            <section id="comparison" className="section comparison-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Why Ryze AI</span>
                        <h2>Replace Agencies with <span className="text-gradient">AdGent AI</span></h2>
                        <p>Get enterprise-level optimization without the enterprise-level price tag.</p>
                    </div>

                    <div className="comparison-grid">
                        {/* Ryze AI - Premium GlareCard */}
                        <GlareCard className="comparison-ryze-card">
                            <div className="comparison-ryze-content">
                                <div className="comparison-ryze-header">
                                    <div className="ryze-icon-badge">
                                        <Zap size={20} />
                                    </div>
                                    <h3>Ryze AI</h3>
                                    <span className="recommended-badge">Recommended</span>
                                </div>
                                <ul className="ryze-features-list">
                                    <li><span className="check-icon">✓</span> 24/7 automated campaign monitoring</li>
                                    <li><span className="check-icon">✓</span> AI-powered creative generation</li>
                                    <li><span className="check-icon">✓</span> Real-time budget optimization</li>
                                    <li><span className="check-icon">✓</span> Instant actionable insights</li>
                                    <li><span className="check-icon">✓</span> Scales with your ad spend</li>
                                    <li><span className="check-icon">✓</span> Starts at ₹8,333/month</li>
                                </ul>
                            </div>
                        </GlareCard>

                        <div className="comparison-divider">
                            <span>VS</span>
                        </div>

                        {/* Traditional Agency - Simple Card */}
                        <div className="comparison-side agency-side">
                            <h3>
                                <Users size={20} />
                                Traditional Agency
                            </h3>
                            <ul>
                                <li>Weekly or monthly check-ins</li>
                                <li>Outsourced creative teams</li>
                                <li>Manual budget adjustments</li>
                                <li>Monthly reports</li>
                                <li>15-20% of ad spend fees</li>
                                <li>₹50,000+ minimum retainers</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <FeatureGrid
                title="Everything You Need to Scale"
                subtitle="Powerful AI tools designed for performance marketers who want results, not busywork."
                features={features}
                columns={4}
                variant="cards"
            />

            {/* Results Stats */}
            <Stats
                title="Real Results from Real Customers"
                subtitle="Average improvements across our customer base after 90 days."
                stats={stats}
                variant="cards"
            />

            {/* Testimonials - Animated */}
            <section id="testimonials" className="section testimonials-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Testimonials</span>
                        <h2>Loved by <span className="text-gradient">Performance Marketers</span></h2>
                        <p>See what our customers are saying about their experience with Ryze AI.</p>
                    </div>
                    <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
                </div>
            </section>

            {/* Final CTA */}
            <div id="demo">
                <CTASection
                    title="Ready to Stop Wasting Ad Budget?"
                    subtitle="Join 230+ advertisers who are scaling profitably with AI. Get your free ad account review today."
                    primaryCTA={{ text: 'Book a Demo', link: '/#demo' }}
                    secondaryCTA={{ text: 'Get Free Review', link: '/#demo' }}
                    variant="gradient"
                />
            </div>
        </div>
    );
}
