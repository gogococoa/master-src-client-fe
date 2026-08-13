'use client';
import { useThemeContext } from '@/styles/themes/ThemeProvider';
import { ThemeModeEnum } from '@/styles/themes/theme-tokens';

export function ThemeToggle() {
    const { theme, setTheme } = useThemeContext();

    const handleToggleV2 = () => {
        const isDark = theme === ThemeModeEnum.DARK;
        const nextTheme = isDark ? ThemeModeEnum.LIGHT : ThemeModeEnum.DARK;

        // Fallback for unsupported browsers (Safari < 18, older Firefox)
        if (!document.startViewTransition) {
            setTheme(nextTheme);
            return;
        }

        document.documentElement.dataset.themeDirection = isDark ? 'to-light' : 'to-dark';

        document.startViewTransition(() => {
            setTheme(nextTheme);
        });
    };

    return <button onClick={() => handleToggleV2()}>{theme === 'dark' ? '☀️ Light' : '🌙 Dark'}</button>;
}
