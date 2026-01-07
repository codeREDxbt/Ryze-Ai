import Hero from '../components/Hero';
import PricingCard from '../components/PricingCard';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import { Check, X } from 'lucide-react';
import './PricingPage.css';

export default function PricingPage() {
    const pricingPlans = [
        {
            name: 'Starter',
            description: 'Perfect for small businesses and solo marketers',
            price: 8333,
            period: '/month',
            features: [
                { text: 'Up to ₹5L monthly ad spend', included: true },
                { text: '1 ad platform integration', included: true },
                { text: 'Daily campaign monitoring', included: true },
                { text: 'Basic performance reports', included: true },
                { text: 'Email support', included: true },
                { text: 'AI creative generation', included: false },
                { text: 'Priority support', included: false },
            ],
            cta: { text: 'Start Free Trial', link: '/demo' },
        },
        {
            name: 'Pro',
            description: 'For growing businesses ready to scale',
            price: 24999,
            period: '/month',
            features: [
                { text: 'Up to ₹25L monthly ad spend', included: true },
                { text: 'All ad platform integrations', included: true },
                { text: '24/7 campaign monitoring', included: true },
                { text: 'Advanced analytics dashboard', included: true },
                { text: 'AI creative generation', included: true },
                { text: 'Priority chat support', included: true },
                { text: 'Custom recommendations', included: true },
            ],
            cta: { text: 'Start Free Trial', link: '/demo' },
            isPopular: true,
        },
        {
            name: 'Enterprise',
            description: 'For agencies and large advertisers',
            price: null,
            features: [
                { text: 'Unlimited ad spend', included: true },
                { text: 'All platform integrations', included: true },
                { text: 'Dedicated account manager', included: true },
                { text: 'Custom API access', included: true },
                { text: 'White-label options', included: true },
                { text: 'SLA guarantees', included: true },
                { text: 'Custom training & onboarding', included: true },
            ],
            cta: { text: 'Contact Sales', link: '/demo' },
            isEnterprise: true,
        },
    ];

    const faqs = [
        {
            question: 'How does the free trial work?',
            answer: 'Start with a 14-day free trial on any plan. No credit card required. Connect your ad accounts and see Ryze AI in action. Cancel anytime before your trial ends.',
        },
        {
            question: 'What ad platforms do you support?',
            answer: 'We currently support Meta Ads (Facebook & Instagram), Google Ads (Search, Display, YouTube), and TikTok Ads. LinkedIn Ads and Twitter/X Ads are coming soon.',
        },
        {
            question: 'How is ad spend calculated?',
            answer: 'Ad spend is calculated as the total amount you spend across all connected ad platforms in a billing month. We don\'t charge a percentage of your spend—just a flat monthly fee.',
        },
        {
            question: 'Can I switch plans later?',
            answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle. No penalties or hidden fees.',
        },
        {
            question: 'Do you offer agency pricing?',
            answer: 'Yes! Our Enterprise plan includes special agency features like white-labeling, multi-client management, and volume discounts. Contact our sales team for a custom quote.',
        },
        {
            question: 'Is my data secure?',
            answer: 'Security is our top priority. We use bank-level encryption, are SOC 2 compliant, and never store your ad platform credentials. Your data is always yours.',
        },
    ];

    const featureComparison = [
        { feature: 'Ad platforms supported', starter: '1', pro: 'All', enterprise: 'All + Custom' },
        { feature: 'Monthly ad spend limit', starter: '₹5L', pro: '₹25L', enterprise: 'Unlimited' },
        { feature: 'Campaign monitoring', starter: 'Daily', pro: '24/7', enterprise: '24/7' },
        { feature: 'AI creative generation', starter: false, pro: true, enterprise: true },
        { feature: 'Custom recommendations', starter: false, pro: true, enterprise: true },
        { feature: 'API access', starter: false, pro: false, enterprise: true },
        { feature: 'Dedicated manager', starter: false, pro: false, enterprise: true },
        { feature: 'White-label option', starter: false, pro: false, enterprise: true },
    ];

    return (
        <div className="pricing-page">
            {/* Hero */}
            <Hero
                badge="Simple, Transparent Pricing"
                headline="Invest in Growth, Not"
                highlightedText="Guesswork"
                subheadline="Choose the plan that fits your ad spend. No hidden fees, no percentages. Just powerful AI optimization."
                variant="center"
            />

            {/* Pricing Cards */}
            <section id="plans" className="pricing-cards-section section">
                <div className="container">
                    <div className="pricing-cards-grid">
                        {pricingPlans.map((plan, index) => (
                            <PricingCard key={index} {...plan} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Comparison Table */}
            <section id="compare" className="comparison-table-section section">
                <div className="container">
                    <div className="section-header">
                        <h2>Compare Plans</h2>
                        <p>See exactly what's included in each plan</p>
                    </div>

                    <div className="comparison-table-wrapper">
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Starter</th>
                                    <th className="popular">Pro</th>
                                    <th>Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                {featureComparison.map((row, index) => (
                                    <tr key={index}>
                                        <td>{row.feature}</td>
                                        <td>
                                            {typeof row.starter === 'boolean' ? (
                                                row.starter ? <Check size={18} className="check" /> : <X size={18} className="cross" />
                                            ) : (
                                                row.starter
                                            )}
                                        </td>
                                        <td className="popular">
                                            {typeof row.pro === 'boolean' ? (
                                                row.pro ? <Check size={18} className="check" /> : <X size={18} className="cross" />
                                            ) : (
                                                row.pro
                                            )}
                                        </td>
                                        <td>
                                            {typeof row.enterprise === 'boolean' ? (
                                                row.enterprise ? <Check size={18} className="check" /> : <X size={18} className="cross" />
                                            ) : (
                                                row.enterprise
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <div id="faq">
                <FAQ
                    title="Frequently Asked Questions"
                    subtitle="Everything you need to know about pricing and plans"
                    faqs={faqs}
                />
            </div>

            {/* CTA */}
            <CTASection
                title="Start Your Free Trial Today"
                subtitle="14 days free. No credit card required. Cancel anytime."
                primaryCTA={{ text: 'Book a Demo', link: '/demo' }}
                variant="gradient"
            />
        </div>
    );
}
