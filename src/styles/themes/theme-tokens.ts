export const lightTokens = {
    background: '#ffffff',
    foreground: '#171717',
    colorPrimary: '#4f69ff',
} as const;

export const darkTokens = {
  background: '#0a0a0a',
  foreground: '#ededed',
} as const;

export type ThemeTokens = Record<keyof typeof lightTokens, string>;

export enum ThemeModeEnum {
  LIGHT = 'light',
  DARK = 'dark'
}