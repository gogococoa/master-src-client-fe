import styled from './bedrock-icon.module.css';

export type ThemeType = 'light' | 'dark' | 'primary';

export const THEME_CLASS: Record<ThemeType, string> = {
    primary: '',
    light: styled.themeLight,
    dark: styled.themeDark,
};
