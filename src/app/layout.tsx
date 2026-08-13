import AntdRegistryLayout from '@/components/layouts/AntdRegistryLayout';
import AntdRegistry from '@/lib/antdCustom/AntdRegistry';
import { AntdThemeProvider } from '@/lib/antdCustom/AntdThemeProvider';
import '@/styles/globals.css';
import '@/styles/styles.css/font.css'
import { ThemeProvider } from '@/styles/themes/ThemeProvider';
import { generateRootCss } from '@/styles/themes/apply-token';
import { themeInitScript } from '@/styles/themes/theme-init';
import { ThemeModeEnum } from '@/styles/themes/theme-tokens';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { cookies } from 'next/headers';
import Script from 'next/script';
import React from 'react';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Master Source Code',
    description: 'a standard boilerplate',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cookieStore = await cookies();
    const themeCookie = cookieStore.get('theme')?.value;

    console.log('SERVER — raw cookie value:', themeCookie);

    const validThemes: string[] = Object.values(ThemeModeEnum);
  const theme: ThemeModeEnum = themeCookie && validThemes.includes(themeCookie)
    ? (themeCookie as ThemeModeEnum)
    : ThemeModeEnum.LIGHT;

  console.log('SERVER — resolved theme:', theme); // TEMP

    return (
        <html lang="en" suppressHydrationWarning data-theme={theme as string}>
            <head>
                {!themeCookie && <Script id='theme-init' strategy='beforeInteractive'>{themeInitScript}</Script>}
                <style dangerouslySetInnerHTML={{ __html: generateRootCss() }} />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
                <AntdRegistry>
                    <ThemeProvider initialTheme={theme}>
                        <AntdThemeProvider>
                            <AntdRegistryLayout>
                                 {children}
                                </AntdRegistryLayout>
                        </AntdThemeProvider>
                    </ThemeProvider>
                </AntdRegistry>
            </body>
        </html>
    );
}
