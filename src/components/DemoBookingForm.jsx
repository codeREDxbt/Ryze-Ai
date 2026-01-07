import { useState, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Calendar, Github, Mail, Facebook } from 'lucide-react';
import './DemoBookingForm.css';
import { z } from 'zod';

/**
 * DemoBookingForm - Animated form for booking demos
 * Adapted from Aceternity UI to match Ryze AI design system
 */
export default function DemoBookingForm() {
    // Strict schema validation (OWASP ASVS 5.3: Input Validation)
    const bookingSchema = z
        .object({
            firstName: z
                .string()
                .trim()
                .min(1, 'First name is required')
                .max(50, 'First name too long')
                .regex(/^[A-Za-z'\-\s]+$/, 'Only letters, spaces, hyphens, apostrophes'),
            lastName: z
                .string()
                .trim()
                .min(1, 'Last name is required')
                .max(50, 'Last name too long')
                .regex(/^[A-Za-z'\-\s]+$/, 'Only letters, spaces, hyphens, apostrophes'),
            email: z.string().trim().email('Invalid email').max(254, 'Email too long'),
            date: z.string().min(1, 'Date is required'),
            time: z
                .string()
                .min(1, 'Time is required')
                .regex(/^\d{2}:\d{2}$/,
                    'Time must be in HH:MM format'),
        })
        .strict(); // Reject unexpected fields

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        date: '',
        time: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Simple client-side rate limiting (graceful 429)
    // Note: Real enforcement must be server-side (per IP/user).
    const submitTimesRef = useRef([]);
    const RATE_LIMIT_COUNT = 3; // max submissions
    const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute

    const now = () => Date.now();
    const withinWindow = (ts) => now() - ts < RATE_LIMIT_WINDOW_MS;

    const isRateLimited = () => {
        submitTimesRef.current = (submitTimesRef.current || []).filter(withinWindow);
        return submitTimesRef.current.length >= RATE_LIMIT_COUNT;
    };

    const recordSubmit = () => {
        submitTimesRef.current.push(now());
    };

    const sanitizeName = (v) => v.replace(/[^A-Za-z'\-\s]/g, '').replace(/\s+/g, ' ').trim();
    const sanitizeEmail = (v) => v.trim();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Client-side rate limit guard (HTTP 429 semantics)
        if (isRateLimited()) {
            setError('Too many requests. Please wait a minute and try again.');
            return;
        }

        // Validate and sanitize
        const candidate = {
            firstName: sanitizeName(formData.firstName),
            lastName: sanitizeName(formData.lastName),
            email: sanitizeEmail(formData.email),
            date: formData.date,
            time: formData.time,
        };

        const result = bookingSchema.safeParse(candidate);
        if (!result.success) {
            setError(result.error.issues[0]?.message || 'Invalid input');
            return;
        }

        recordSubmit();
        // TODO: Send to backend API (do not expose secrets client-side)
        // fetch('/api/book-demo', { method: 'POST', body: JSON.stringify(result.data) })
        //   .then(...).catch(...)

        setSuccess('Demo booked request prepared. We will reach out shortly.');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        let sanitized = value;
        if (name === 'firstName' || name === 'lastName') sanitized = sanitizeName(value);
        if (name === 'email') sanitized = sanitizeEmail(value);
        setFormData((prev) => ({ ...prev, [name]: sanitized }));
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
                            autoComplete="given-name"
                            maxLength={50}
                            pattern="[A-Za-z'\-\s]+"
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
                            autoComplete="family-name"
                            maxLength={50}
                            pattern="[A-Za-z'\-\s]+"
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
                        autoComplete="email"
                        maxLength={254}
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
                            pattern="^\\d{2}:\\d{2}$"
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

                {/* Graceful errors/success (no secrets, no stacktraces) */}
                {error && <p role="alert" className="form-error" aria-live="polite">{error}</p>}
                {success && <p className="form-success" aria-live="polite">{success}</p>}

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
