/**
 * BorderBeam Component
 * A decorative animated border effect that creates a glowing beam 
 * moving along the edges of a container. Inspired by BadtzUI.
 */

export default function BorderBeam({
    className = '',
    delay = 0,
    duration = 10,
    colorFrom = 'var(--accent-color)',
    colorTo = 'var(--accent-hover)',
    size = 100,
    lightWidth = 200,
    lightColor = '#FAFAFA',
    borderWidth = 1,
}) {
    return (
        <div
            className={`border-beam ${className}`}
            style={{
                '--delay': `${delay}s`,
                '--duration': `${duration}s`,
                '--color-from': colorFrom,
                '--color-to': colorTo,
                '--size': `${size}px`,
                '--light-width': `${lightWidth}px`,
                '--light-color': lightColor,
                '--border-width': `${borderWidth}px`,
            }}
            aria-hidden="true"
        />
    );
}
