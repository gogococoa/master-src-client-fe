'use client';
import { useThemeContext } from '@/styles/themes/ThemeProvider';
import { ThemeModeEnum } from '@/styles/themes/themeTokens';

export function ThemeToggle() {
  const { theme, setTheme } = useThemeContext();

  return (
    <button onClick={() => setTheme(theme === ThemeModeEnum.DARK ? ThemeModeEnum.LIGHT : ThemeModeEnum.DARK)}>
      {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}