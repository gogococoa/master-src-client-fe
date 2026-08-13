export const lightTokens = {
    background: '#ffffff',
    foreground: '#171717',
    colorPrimary: '#4f69ff',

    transition: 'background-color 0.6s cubic-bezier(0.4, 0, 0.2, 1), color 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

export const darkTokens = {
    background: '#0a0a0a',
    foreground: '#ededed',
} as const;

export type ThemeTokens = Record<keyof typeof lightTokens, string>;

export enum ThemeModeEnum {
    LIGHT = 'light',
    DARK = 'dark',
}
