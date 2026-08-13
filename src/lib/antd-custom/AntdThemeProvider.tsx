'use client';
import { getAntdTheme } from '@/styles/themes/antd-tokens';
import { useThemeContext } from '@/styles/themes/ThemeProvider';
import { ConfigProvider } from 'antd';

export function AntdThemeProvider({ children }: { children: React.ReactNode }) {
    //   const [mode, setMode] = useState<ThemeModeEnum>(ThemeModeEnum.LIGHT);

    //   useEffect(() => {
    //     const mq = window.matchMedia('(prefers-color-scheme: dark)');
    //     setMode(mq.matches ? ThemeModeEnum.DARK : ThemeModeEnum.LIGHT);
    //     const listener = (e: MediaQueryListEvent) => setMode(e.matches ? ThemeModeEnum.DARK : ThemeModeEnum.LIGHT);
    //     mq.addEventListener('change', listener);
    //     return () => mq.removeEventListener('change', listener);
    //   }, []);

        const { theme } = useThemeContext();
    return <ConfigProvider theme={getAntdTheme(theme)}>{children}</ConfigProvider>;
}
