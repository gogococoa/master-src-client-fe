export const lightTokens = {
    background: '#ffffff',
    foreground: '#171717',
    colorPrimary: '#4f69ff',

    /* ==========================================================================
   Layout
   ========================================================================== */
    headerHeight: 'calc(32px + 1rem)',
    headerWrapperHeight: '32px',

    /* ==========================================================================
   Theme Switch — sliding pill with day/night ambient sky
   ========================================================================== */
    themeSwitchBgPrimary: '#7ec8f2',
    themeSwitchBgSecondary: '#bfe8ff',
    themeSwitchStar: 'white',
    themeSwitchThumb: 'white',
    themeSwitchThumbCore: '#ffb703',
    // ==========================================================================
} as const;

export const darkTokens = {
    background: '#0a0a0a',
    foreground: '#ededed',

    /* ==========================================================================
   Theme Switch — sliding pill with day/night ambient sky
   ========================================================================== */
    themeSwitchBgPrimary: '#0b1130',
    themeSwitchBgSecondary: '#1c2452',

    themeSwitchThumb: '#e8ecf7',

    themeSwitchThumbCore: '#6b7394',
    // ==========================================================================
} as const;

export type ThemeTokens = Record<keyof typeof lightTokens, string>;

export enum ThemeModeEnum {
    LIGHT = 'light',
    DARK = 'dark',
}
