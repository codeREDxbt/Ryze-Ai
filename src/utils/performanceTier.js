/**
 * Performance Tier Detection System
 * Detects device capability and sets appropriate effect tier.
 * 
 * Tiers:
 * - A (baseline): Low-end devices, reduced motion preference
 * - B (enhanced): Mid-range devices
 * - C (full): High-end devices with full effects
 */

/**
 * Detect the appropriate performance tier based on device capabilities.
 * @returns {'A' | 'B' | 'C'} The detected performance tier
 */
export function getPerformanceTier() {
    // Check reduced motion preference first (highest priority)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        return 'A';
    }

    // Device capability detection
    const memory = navigator.deviceMemory || 4; // Default to 4GB if not supported
    const cores = navigator.hardwareConcurrency || 4; // Default to 4 cores if not supported

    // Check for save-data preference
    const saveData = navigator.connection?.saveData || false;

    // Tier A: Low-end devices
    if (saveData || memory <= 2 || cores <= 2) {
        return 'A';
    }

    // Tier B: Mid-range devices
    if (memory <= 4 || cores <= 4) {
        return 'B';
    }

    // Tier C: High-end devices
    return 'C';
}

/**
 * Initialize performance tier on the document.
 * Sets data-perf-tier attribute on <html> element.
 */
export function initPerformanceTier() {
    const tier = getPerformanceTier();
    document.documentElement.setAttribute('data-perf-tier', tier);

    // Log for debugging (remove in production)
    if (import.meta.env.DEV) {
        console.log(`[Performance] Tier ${tier} detected`, {
            memory: navigator.deviceMemory,
            cores: navigator.hardwareConcurrency,
            reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
            saveData: navigator.connection?.saveData
        });
    }

    // Listen for reduced motion preference changes
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    motionQuery.addEventListener('change', (e) => {
        if (e.matches) {
            document.documentElement.setAttribute('data-perf-tier', 'A');
        } else {
            // Re-evaluate tier when motion preference changes
            document.documentElement.setAttribute('data-perf-tier', getPerformanceTier());
        }
    });

    return tier;
}

/**
 * Force a specific performance tier (useful for testing).
 * @param {'A' | 'B' | 'C'} tier - The tier to force
 */
export function forcePerformanceTier(tier) {
    if (['A', 'B', 'C'].includes(tier)) {
        document.documentElement.setAttribute('data-perf-tier', tier);
        console.log(`[Performance] Forced to Tier ${tier}`);
    }
}

export default { getPerformanceTier, initPerformanceTier, forcePerformanceTier };
