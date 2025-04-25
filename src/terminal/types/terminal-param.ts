import { TerminalParamContext } from "./terminal-param-context";
import { TerminalParamType } from "./terminal-param-type";

export type TerminalParam = {
  param: string;
  detail: string;
  type: TerminalParamType;
  context?: TerminalParamContext;
};
