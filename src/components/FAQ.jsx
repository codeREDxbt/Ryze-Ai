import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

export default function FAQ({ title, subtitle, faqs }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section section">
            <div className="container">
                {(title || subtitle) && (
                    <div className="section-header">
                        {title && <h2>{title}</h2>}
                        {subtitle && <p>{subtitle}</p>}
                    </div>
                )}

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'faq-item-open' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleFaq(index)}
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <span>{faq.question}</span>
                                <ChevronDown size={20} className="faq-icon" aria-hidden="true" />
                            </button>
                            <div
                                id={`faq-answer-${index}`}
                                className="faq-answer"
                                role="region"
                                aria-hidden={openIndex !== index}
                            >
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
