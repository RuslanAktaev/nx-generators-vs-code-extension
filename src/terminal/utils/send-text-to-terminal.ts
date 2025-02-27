import * as vscode from "vscode";

export type SendTextToTerminalParams = {
  name?: string;
  shellPath?: string;
  shellArgs?: readonly string[] | string;
  command: string;
};

export const sendTextToTerminal = ({
  name,
  shellPath,
  shellArgs,
  command,
}: SendTextToTerminalParams): void => {
  const terminal = vscode.window.createTerminal(name, shellPath, shellArgs);

  terminal.show();
  terminal.sendText(command);
};
