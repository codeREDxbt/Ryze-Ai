import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import CTASection from '../components/CTASection';
import ImageSplit from '../components/ImageSplit';
import Visual1Card from '../components/Visual1Card';
import Visual2Card from '../components/Visual2Card';
import GlareCard from '../components/GlareCard';
import {
    Zap,
    Brain,
    BarChart3,
    Target,
    Sparkles,
    Shield,
    TrendingUp,
    RefreshCcw,
    Search,
    ImagePlus,
    DollarSign,
    LineChart,
    Settings,
    Bell,
    FileText,
    Layers
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

    const advancedFeatures = [
        {
            icon: <Search size={24} />,
            title: 'Keyword Intelligence',
            description: 'AI-powered keyword research and negative keyword management to maximize search relevance.',
        },
        {
            icon: <Target size={24} />,
            title: 'Audience Insights',
            description: 'Deep analysis of audience segments to find your most profitable customer profiles.',
        },
        {
            icon: <BarChart3 size={24} />,
            title: 'Competitive Benchmarking',
            description: 'See how your campaigns stack up against industry benchmarks and competitors.',
        },
        {
            icon: <LineChart size={24} />,
            title: 'Predictive Analytics',
            description: 'AI forecasting to predict campaign performance and budget needs before they happen.',
        },
    ];

    const automationFeatures = [
        {
            icon: <RefreshCcw size={24} />,
            title: 'Auto Bid Management',
            description: 'Dynamic bid adjustments based on real-time performance data and conversion likelihood.',
        },
        {
            icon: <Settings size={24} />,
            title: 'Rule-Based Automation',
            description: 'Set custom rules and let Ryze AI execute changes based on your specific criteria.',
        },
        {
            icon: <Bell size={24} />,
            title: 'Smart Alerts',
            description: 'Get notified instantly when campaigns need attention or hit performance thresholds.',
        },
        {
            icon: <Layers size={24} />,
            title: 'A/B Testing Automation',
            description: 'Automatic creative and audience testing with statistical significance analysis.',
        },
    ];

    const reportingFeatures = [
        {
            icon: <FileText size={24} />,
            title: 'Performance Reports',
            description: 'Beautiful, actionable reports that highlight what\'s working and what needs fixing.',
        },
        {
            icon: <TrendingUp size={24} />,
            title: 'ROI Attribution',
            description: 'Clear visibility into which campaigns, creatives, and audiences drive real revenue.',
        },
        {
            icon: <ImagePlus size={24} />,
            title: 'Creative Analytics',
            description: 'Deep dive into creative performance to understand what resonates with your audience.',
        },
        {
            icon: <Zap size={24} />,
            title: 'Real-Time Dashboard',
            description: 'Live metrics and KPIs at your fingertips. No more waiting for reports.',
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

            {/* Advanced Features - Condensed to 2x2 */}
            <section className="section-alt">
                <FeatureGrid
                    title="Advanced Analytics"
                    subtitle="Deep insights to inform smarter decisions"
                    features={advancedFeatures}
                    columns={2}
                    variant="cards"
                />
            </section>

            {/* Animated Visual Section - Visual2Card */}
            <section className="features-animated-section">
                <div className="container">
                    <div className="section-intro">
                        <h3>Smart Budget Intelligence</h3>
                        <p>Intelligent budget allocation and ROI optimization</p>
                    </div>
                    <div className="animated-cards-grid reverse">
                        <div className="animated-card-wrapper large">
                            <Visual2Card mainColor="#f59e0b" secondaryColor="#8b5cf6" />
                        </div>
                        <div className="features-highlight">
                            <h4>Automated Budget Optimization</h4>
                            <ul>
                                <li><Zap size={16} /> Hourly rebalancing</li>
                                <li><Zap size={16} /> Auto-scale winning campaigns</li>
                                <li><Zap size={16} /> Prevent wasted spend</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Automation Features - Condensed to 2x2 */}
            <FeatureGrid
                title="Automation Suite"
                subtitle="Set it and forget it optimization"
                features={automationFeatures}
                columns={2}
                variant="cards"
            />

            {/* Animated Visual Section - GlareCard Showcase */}
            <section className="features-animated-section">
                <div className="container">
                    <div className="section-intro">
                        <h3>Creative Generation Excellence</h3>
                        <p>AI-powered ad creative and messaging</p>
                    </div>
                    <div className="glare-cards-showcase">
                        <div className="glare-card-item">
                            <GlareCard>
                                <div className="glare-content">
                                    <Brain size={32} className="glare-icon" style={{color: '#10b981'}} />
                                    <h4>Intelligent Headlines</h4>
                                    <p>AI-generated headlines optimized for CTR and conversion</p>
                                </div>
                            </GlareCard>
                        </div>
                        <div className="glare-card-item">
                            <GlareCard>
                                <div className="glare-content">
                                    <Sparkles size={32} className="glare-icon" style={{color: '#f59e0b'}} />
                                    <h4>Copy Variations</h4>
                                    <p>Endless ad copy variations tested and ranked by performance</p>
                                </div>
                            </GlareCard>
                        </div>
                        <div className="glare-card-item">
                            <GlareCard>
                                <div className="glare-content">
                                    <ImagePlus size={32} className="glare-icon" style={{color: '#8b5cf6'}} />
                                    <h4>Visual Assets</h4>
                                    <p>Professional creative suggestions tailored to your brand</p>
                                </div>
                            </GlareCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reporting Features - Condensed to 2x2 */}
            <section className="section-alt">
                <FeatureGrid
                    title="Reporting & Insights"
                    subtitle="Crystal clear visibility into performance"
                    features={reportingFeatures}
                    columns={2}
                    variant="cards"
                />
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
