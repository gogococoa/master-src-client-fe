import type { ThemeConfig } from "antd";
import { theme } from 'antd';
import { darkTokens, lightTokens, ThemeModeEnum } from "./themeTokens";

export function getAntdTheme(mode: ThemeModeEnum): ThemeConfig {
  const merged = mode === ThemeModeEnum.DARK ? { ...lightTokens, ...darkTokens } : lightTokens;

  return {
    token: {
      colorPrimary: merged.colorPrimary,
      colorBgBase: merged.background,
      colorTextBase: merged.foreground,
    },
    algorithm: mode === ThemeModeEnum.DARK ? theme.darkAlgorithm : theme.defaultAlgorithm,
  };
}