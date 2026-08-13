'use client';
import { useThemeContext } from '@/styles/themes/ThemeProvider';
import { ThemeModeEnum } from '@/styles/themes/theme-tokens';

export function ThemeToggle() {
    const { theme, setTheme } = useThemeContext();

    const handleToggle = () => {
        const isDark = theme === ThemeModeEnum.DARK;
        const nextTheme = isDark ? ThemeModeEnum.LIGHT : ThemeModeEnum.DARK;

        // Create the flash overlay element
        const flash = document.createElement('div');
        flash.className = `theme-flash ${isDark ? 'turning-on' : 'turning-off'}`;
        document.body.appendChild(flash);

        // Swap the theme (this triggers your CSS variable transition)
        setTheme(nextTheme);

        // Clean up the overlay after animation finishes
        flash.addEventListener('animationend', () => flash.remove());
    };

    return <button onClick={() => handleToggle()}>{theme === 'dark' ? '☀️ Light' : '🌙 Dark'}</button>;
}
