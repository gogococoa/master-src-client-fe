// src/styles/theme/ThemeProvider.tsx
'use client';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { ThemeModeEnum } from './theme-tokens';

interface IThemeContext {
    theme: ThemeModeEnum;
    setTheme: (t: ThemeModeEnum) => void;
    isMounted: boolean;
}

const ThemeContext = createContext<IThemeContext | null>(null);

export function ThemeProvider({ children, initialTheme }: { children: React.ReactNode; initialTheme: ThemeModeEnum }) {
    // Read the value the inline script already set, so React state matches the DOM on mount
    const [theme, setThemeState] = useState<ThemeModeEnum>(initialTheme);
    const isMounted = useRef<boolean>(false);

    // Runs once, AFTER hydration — safe to read the real DOM here.
    // Reconciles cases where the pre-hydration script changed data-theme
    // out from under React (first-visit-ever, no cookie yet).
    useEffect(() => {
        const domTheme = document.documentElement.getAttribute('data-theme');
        const validThemes: string[] = Object.values(ThemeModeEnum);

        if (domTheme && validThemes.includes(domTheme) && domTheme !== theme) {
            setThemeState(domTheme as ThemeModeEnum);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const setTheme = (t: ThemeModeEnum) => {
        document.cookie = `theme=${t}; path=/; max-age=31536000; SameSite=Lax`;
        document.documentElement.setAttribute('data-theme', t);
        setThemeState(t);
    };
    return (
        <ThemeContext.Provider value={{ theme, setTheme, isMounted: isMounted.current }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useThemeContext() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
    return ctx;
}
