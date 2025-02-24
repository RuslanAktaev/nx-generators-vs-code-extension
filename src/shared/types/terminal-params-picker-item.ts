import * as vscode from "vscode";
import { TerminalParamType } from "./terminal-param-type";

export type TerminalParamPickerItem = vscode.QuickPickItem & {
  type: TerminalParamType;
};
