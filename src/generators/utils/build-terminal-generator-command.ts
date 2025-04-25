export const buildParamsString = (params: Record<string, string>): string =>
  Object.keys(params)
    .map((param) => `--${param}=${params[param]}`)
    .join(" ");

export const buildTerminalGeneratorCommand = (
  generator: string,
  params?: Record<string, string>
): string =>
  `npx nx g ${generator}${params && ` ${buildParamsString(params)}`}`;
