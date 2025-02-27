export const buildTerminalGeneratorCommand = (
  generator: string,
  paramsString?: string
): string => `npx nx g ${generator}${paramsString && ` ${paramsString}`}`;
