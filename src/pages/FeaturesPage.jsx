import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import CTASection from '../components/CTASection';
import ImageSplit from '../components/ImageSplit';
import Visual1Card from '../components/Visual1Card';
import GlareCard from '../components/GlareCard';
import {
    Zap,
    Brain,
    BarChart3,
    Sparkles,
    Shield,
    TrendingUp,
    RefreshCcw,
    Search,
    DollarSign,
    Bell,
    FileText
} from 'lucide-react';
import './FeaturesPage.css';

export default function FeaturesPage() {
    const coreFeatures = [
        {
            icon: <Brain size={24} />,
            title: 'AI Campaign Manager',
            description: 'Autonomous AI that monitors, analyzes, and optimizes your campaigns 24/7 without human intervention.',
        },
        {
            icon: <Sparkles size={24} />,
            title: 'AI Creative Generation',
            description: 'Generate winning ad creatives, headlines, and copy variations in seconds using advanced AI models.',
        },
        {
            icon: <DollarSign size={24} />,
            title: 'Smart Budget Optimizer',
            description: 'Automatically shift budget from underperformers to top campaigns in real-time for maximum ROAS.',
        },
        {
            icon: <Shield size={24} />,
            title: 'Wasted Spend Detection',
            description: 'Identify and eliminate negative keywords, poor audiences, and budget drains automatically.',
        },
    ];

    // Consolidated features combining Analytics, Automation, and Reporting
    const moreFeatures = [
        {
            icon: <BarChart3 size={24} />,
            title: 'Advanced Analytics',
            description: 'Predictive AI analytics, competitive benchmarking, and audience insights to drive smarter decisions.',
        },
        {
            icon: <RefreshCcw size={24} />,
            title: 'Smart Automation',
            description: 'Auto bid management, rule-based automation, and smart alerts for hands-free optimization.',
        },
        {
            icon: <FileText size={24} />,
            title: 'Reporting & Insights',
            description: 'Beautiful performance reports, ROI attribution, and real-time dashboards at your fingertips.',
        },
        {
            icon: <Search size={24} />,
            title: 'Keyword Intelligence',
            description: 'AI-powered keyword research and negative keyword management to maximize search relevance.',
        },
        {
            icon: <Bell size={24} />,
            title: 'Smart Alerts & Testing',
            description: 'Instant notifications and automatic A/B testing with statistical significance analysis.',
        },
        {
            icon: <TrendingUp size={24} />,
            title: 'ROI Attribution',
            description: 'Clear visibility into which campaigns, creatives, and audiences drive real revenue.',
        },
    ];

    const featureDetails = [
        {
            title: 'Campaign Setup & Launch Automation',
            description: 'Let AI handle the complex setup process. Ryze automatically configures optimal settings based on your goals, industry benchmarks, and best practices from thousands of campaigns.',
            benefits: [
                'Automatic campaign structure optimization',
                'Smart audience targeting suggestions',
                'Best-practice settings applied automatically',
                'Launch-ready in minutes, not hours',
            ],
        },
        {
            title: 'Real-Time Budget Intelligence',
            description: 'Stop manually shifting budgets between campaigns. Our AI continuously monitors performance and reallocates spend to maximize returns every single hour.',
            benefits: [
                'Hourly budget rebalancing',
                'Automatic scale-up of winners',
                'Instant pause of underperformers',
                'Custom pacing strategies',
            ],
        },
        {
            title: 'AI Creative Generation',
            description: 'Generate scroll-stopping ad creatives in seconds. Our AI understands what works for your industry and creates variations optimized for each platform.',
            benefits: [
                'Headlines, descriptions, and CTAs',
                'Platform-specific formatting',
                'Brand voice consistency',
                'Unlimited variations',
            ],
        },
        {
            title: 'Comprehensive Ad Audit',
            description: 'Get a complete health check of your ad accounts. Identify missed opportunities, wasted spend, and quick wins you can implement immediately.',
            benefits: [
                'Account structure analysis',
                'Tracking & attribution audit',
                'Creative performance review',
                'Competitor benchmarking',
            ],
        },
    ];

    return (
        <div className="features-page">
            {/* Hero */}
            <Hero
                badge="Platform Features"
                headline="Everything You Need to"
                highlightedText="Scale Profitably"
                subheadline="Powerful AI tools designed for performance marketers who want results, not busywork. Replace manual optimization with intelligent automation."
                primaryCTA={{ text: 'Book a Demo', link: '/demo' }}
                secondaryCTA={{ text: 'See Pricing', link: '/pricing' }}
                variant="center"
            />

            {/* Core Features - Condensed to 2x2 */}
            <div id="core">
                <FeatureGrid
                    title="Core AI Capabilities"
                    subtitle="The foundation of intelligent ad management"
                    features={coreFeatures}
                    columns={2}
                    variant="cards"
                />
            </div>

            {/* Animated Visual Section - Visual1Card */}
            <section className="features-animated-section">
                <div className="container">
                    <div className="section-intro">
                        <h3>Campaign Performance Monitoring</h3>
                        <p>Real-time analytics with AI-powered insights</p>
                    </div>
                    <div className="animated-cards-grid">
                        <div className="animated-card-wrapper large">
                            <Visual1Card mainColor="#10b981" secondaryColor="#6366f1" />
                        </div>
                        <div className="features-highlight">
                            <h4>AI-Powered Campaign Analysis</h4>
                            <ul>
                                <li><Zap size={16} /> 24/7 autonomous monitoring</li>
                                <li><Zap size={16} /> Real-time performance insights</li>
                                <li><Zap size={16} /> Automatic optimization triggers</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Details */}
            <section id="details" className="feature-details-section section">
                <div className="container">
                    {featureDetails.map((detail, index) => (
                        <div
                            key={index}
                            className={`feature-detail ${index % 2 === 1 ? 'feature-detail-reverse' : ''}`}
                        >
                            <div className="feature-detail-content">
                                <h3>{detail.title}</h3>
                                <p>{detail.description}</p>
                                <ul className="feature-benefits">
                                    {detail.benefits.map((benefit, i) => (
                                        <li key={i}>
                                            <Zap size={16} className="benefit-icon" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="feature-detail-visual">
                                <ImageSplit
                                    src={`https://images.unsplash.com/photo-${index === 0 ? '1551288049-bebda4e38f71' : index === 1 ? '1460925895917-afdab827c52f' : index === 2 ? '1611162617213-7d7a39e9b1d7' : '1504868584819-f8e8b4b6d7e3'}?w=600&h=400&fit=crop`}
                                    sections={7}
                                    offsetStep={25}
                                    className="feature-image-split"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Combined Features Section - Premium GlareCards */}
            <section className="section-alt premium-features-section">
                <div className="container">
                    <div className="section-header">
                        <h2>More Powerful Features</h2>
                        <p>Analytics, automation, and reporting tools to supercharge your campaigns</p>
                    </div>
                    <div className="premium-features-grid">
                        {moreFeatures.map((feature, index) => (
                            <GlareCard key={index} className="premium-feature-card">
                                <div className="premium-feature-content">
                                    <div className="premium-feature-icon" style={{
                                        background: `linear-gradient(135deg, ${['#10b981', '#6366f1', '#f59e0b', '#ec4899', '#8b5cf6', '#06b6d4'][index]} 0%, ${['#34d399', '#818cf8', '#fbbf24', '#f472b6', '#a78bfa', '#22d3ee'][index]} 100%)`
                                    }}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="premium-feature-title">{feature.title}</h3>
                                    <p className="premium-feature-description">{feature.description}</p>
                                </div>
                            </GlareCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection
                title="See Ryze AI in Action"
                subtitle="Get a personalized demo of how Ryze AI can transform your ad performance"
                primaryCTA={{ text: 'Book a Demo', link: '/demo' }}
                secondaryCTA={{ text: 'View Pricing', link: '/pricing' }}
                variant="gradient"
            />
        </div>
    );
}
