import * as vscode from "vscode";
import { TerminalParamType } from "./terminal-param-type";
import { TerminalParamContext } from "./terminal-param-context";

export type TerminalParamPickerItem = vscode.QuickPickItem & {
  type: TerminalParamType;
  context?: TerminalParamContext;
};
