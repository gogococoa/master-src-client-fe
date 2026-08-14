import AntdRegistryLayout from '@/components/layouts/AntdRegistryLayout';
import AntdRegistry from '@/lib/antd-custom/AntdRegistry';
import { AntdThemeProvider } from '@/lib/antd-custom/AntdThemeProvider';
import '@/styles/base/globals.css';
import { ThemeProvider } from '@/styles/themes/ThemeProvider';
import { generateRootCss } from '@/styles/themes/apply-token';
import { themeInitScript } from '@/styles/themes/theme-init';
import { ThemeModeEnum } from '@/styles/themes/theme-tokens';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { cookies } from 'next/headers';
import Script from 'next/script';
import React from 'react';
import StyledComponentsRegistry from '@/lib/styled-components-custom/StyledComponentsRegistry';

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

    const validThemes: string[] = Object.values(ThemeModeEnum);
    const theme: ThemeModeEnum =
        themeCookie && validThemes.includes(themeCookie) ? (themeCookie as ThemeModeEnum) : ThemeModeEnum.LIGHT;

    return (
        <html lang="en" suppressHydrationWarning data-theme={theme as string}>
            <head>
                {!themeCookie && (
                    <Script id="theme-init" strategy="beforeInteractive">
                        {themeInitScript}
                    </Script>
                )}
                <style dangerouslySetInnerHTML={{ __html: generateRootCss() }} />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
                <StyledComponentsRegistry>
                    <AntdRegistry>
                        <ThemeProvider initialTheme={theme}>
                            <AntdThemeProvider>
                                <AntdRegistryLayout>{children}</AntdRegistryLayout>
                            </AntdThemeProvider>
                        </ThemeProvider>
                    </AntdRegistry>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
