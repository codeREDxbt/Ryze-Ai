import { createContext, useContext, useState, useCallback } from 'react';

const DemoContext = createContext(undefined);

export function DemoProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const openDemo = useCallback(() => setIsOpen(true), []);
    const closeDemo = useCallback(() => setIsOpen(false), []);

    return (
        <DemoContext.Provider value={{ isOpen, openDemo, closeDemo }}>
            {children}
        </DemoContext.Provider>
    );
}

export function useDemo() {
    const context = useContext(DemoContext);
    if (!context) {
        throw new Error('useDemo must be used within a DemoProvider');
    }
    return context;
}
