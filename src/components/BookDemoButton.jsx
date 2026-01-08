import { useDemo } from '../contexts/DemoContext';
import { ArrowRight } from 'lucide-react';

/**
 * reusable BookDemoButton triggers the global demo modal.
 * Tracks usage automatically.
 */
export default function BookDemoButton({
    variant = 'primary', // 'primary' | 'ghost' | 'outline'
    size = 'lg',         // 'sm' | 'md' | 'lg'
    className = '',
    children = 'Book a Demo',
    showIcon = true,
    trackingLocation = 'unknown', // e.g. 'hero', 'navbar'
    ...props
}) {
    const { openDemo } = useDemo();

    const handleClick = (e) => {
        // Analytics hook would go here
        // track('demo_button_click', { location: trackingLocation });
        console.log(`Demo button clicked from ${trackingLocation}`);

        openDemo();

        if (props.onClick) props.onClick(e);
    };

    return (
        <button
            onClick={handleClick}
            className={`btn btn-${variant} btn-${size} ${className}`}
            {...props}
        >
            {children}
            {showIcon && <ArrowRight size={size === 'sm' ? 14 : 18} aria-hidden="true" />}
        </button>
    );
}
