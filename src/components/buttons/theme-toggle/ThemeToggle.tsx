'use client';
import { useThemeContext } from '@/styles/themes/ThemeProvider';
import { ThemeModeEnum } from '@/styles/themes/theme-tokens';
import fontStyled from '@/styles/utilities/font.module.css';
import themeToggleStyled from './theme-toggle.module.css';

export function ThemeToggle() {
    const { theme, setTheme } = useThemeContext();

    const isDark = theme === ThemeModeEnum.DARK;

    const handleToggle = () => {
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

    return (
        <button
            onClick={() => handleToggle()}
            className={themeToggleStyled.themeSwitch}
            aria-label="Toggle theme"
            aria-pressed={isDark}
        >
            <span className={themeToggleStyled.switchStars}>
                <span className={`${themeToggleStyled.starDot} ${themeToggleStyled.s1}`} />
                <span className={`${themeToggleStyled.starDot} ${themeToggleStyled.s2}`} />
                <span className={`${themeToggleStyled.starDot} ${themeToggleStyled.s3}`} />
                <span className={`${themeToggleStyled.starDot} ${themeToggleStyled.s4}`} />
            </span>

            <span className={themeToggleStyled.switchThumb}>
                <svg viewBox="0 0 24 24" className={themeToggleStyled.thumbIcon}>
                    <g className={themeToggleStyled.thumbRays}>
                        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                            <line
                                key={deg}
                                x1="12"
                                y1="1"
                                x2="12"
                                y2="3"
                                transform={`rotate(${deg} 12 12)`}
                                className={themeToggleStyled.thumbRay}
                            />
                        ))}
                    </g>
                    <circle cx="12" cy="12" r="5" className={themeToggleStyled.thumbCore} />
                    <circle cx="12" cy="12" r="5" className={themeToggleStyled.thumbMask} />
                </svg>
            </span>
        </button>
    );
}
