export type AppendParamToTerminalCommandArgs = {
  sourceParamsString: string;
  param: string;
  value: string;
};

export const appendParamToTerminalCommand = ({
  sourceParamsString,
  param,
  value,
}: AppendParamToTerminalCommandArgs): string =>
  `${sourceParamsString} --${param}=${value}`;
