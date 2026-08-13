import { lightTokens, darkTokens, ThemeTokens} from "./theme-tokens";

function toCssVarName(key: string): string {
  return '--' + key.replace(/([A-Z])/g, '-$1').toLowerCase();
}

function toDeclarations(tokens:Partial<ThemeTokens>): string {
  return Object.entries(tokens)
    .map(([key, value]) => `  ${toCssVarName(key)}: ${value};`)
    .join('\n');
}

export function generateRootCss(): string {
  const lightBlock = `:root {\n${toDeclarations(lightTokens)}\n}`;

  // const darkBlock = `@media (prefers-color-scheme: dark) {\n  :root {\n${toDeclarations(
  //   darkTokens
  // )
  //   .split('\n')
  //   .map((line) => '  ' + line)
  //   .join('\n')}\n  }\n}`;

  const darkBlock = `[data-theme="dark"] {\n${toDeclarations(darkTokens)}\n}`;

  return `${lightBlock}\n\n${darkBlock}`;
}