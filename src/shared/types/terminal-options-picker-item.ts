import * as vscode from "vscode";

export type TerminalOptionsPickerItem = vscode.QuickPickItem & {
  value?: string;
};
