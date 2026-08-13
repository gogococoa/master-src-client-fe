function themeInit() {
    try {
        var isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var theme = isDark ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        document.cookie = 'theme=' + theme + '; path=/; max-age=31536000; SameSite=Lax';
    } catch (e) {
        // matchMedia or cookie write may be unavailable in rare environments
    }
}

export const themeInitScript = `(${themeInit.toString()})();`;
