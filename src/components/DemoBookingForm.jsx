import { useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Calendar, Github, Mail, Facebook } from 'lucide-react';
import './DemoBookingForm.css';

/**
 * DemoBookingForm - Animated form for booking demos
 * Adapted from Aceternity UI to match Ryze AI design system
 */
export default function DemoBookingForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        date: '',
        time: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Demo booking submitted:', formData);
        // Add your booking logic here
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="demo-booking-form">
            <div className="demo-form-header">
                <h2>Book Your Free Demo</h2>
                <p>Choose a time that works for you.</p>
            </div>

            <form className="demo-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <FormField>
                        <Label htmlFor="firstName">First name</Label>
                        <AnimatedInput
                            id="firstName"
                            name="firstName"
                            placeholder="John"
                            type="text"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="lastName">Last name</Label>
                        <AnimatedInput
                            id="lastName"
                            name="lastName"
                            placeholder="Doe"
                            type="text"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </FormField>
                </div>

                <FormField>
                    <Label htmlFor="email">Email Address</Label>
                    <AnimatedInput
                        id="email"
                        name="email"
                        placeholder="john@company.com"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </FormField>

                <div className="form-row">
                    <FormField>
                        <Label htmlFor="date">Date</Label>
                        <AnimatedInput
                            id="date"
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            icon={<Calendar size={16} />}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="time">Time</Label>
                        <AnimatedInput
                            id="time"
                            name="time"
                            type="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                        />
                    </FormField>
                </div>

                <button className="demo-submit-btn" type="submit">
                    Book Demo →
                    <BottomGradient />
                </button>

                <div className="form-divider" />

                <div className="social-connect">
                    <p className="social-connect-title">Or connect with</p>
                    <div className="social-buttons">
                        <SocialButton icon={<Github size={16} />} label="GitHub" />
                        <SocialButton icon={<Mail size={16} />} label="Google" />
                        <SocialButton icon={<Facebook size={16} />} label="Meta" />
                    </div>
                </div>
            </form>
        </div>
    );
}

function AnimatedInput({ icon, className = '', ...props }) {
    const radius = 100;
    const [visible, setVisible] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            style={{
                background: useMotionTemplate`
                    radial-gradient(
                        ${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
                        var(--accent-color),
                        transparent 80%
                    )
                `,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            className="animated-input-wrapper"
        >
            {icon && <div className="input-icon">{icon}</div>}
            <input className={`animated-input ${className}`} {...props} />
        </motion.div>
    );
}

function Label({ htmlFor, children }) {
    return (
        <label htmlFor={htmlFor} className="form-label">
            {children}
        </label>
    );
}

function FormField({ children, className = '' }) {
    return <div className={`form-field ${className}`}>{children}</div>;
}

function BottomGradient() {
    return (
        <>
            <span className="bottom-gradient-1" />
            <span className="bottom-gradient-2" />
        </>
    );
}

function SocialButton({ icon, label }) {
    return (
        <button className="social-btn" type="button">
            <span className="social-icon">{icon}</span>
            <span className="social-label">{label}</span>
            <BottomGradient />
        </button>
    );
}
