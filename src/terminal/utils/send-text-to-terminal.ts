import * as vscode from "vscode";

export type SendTextToTerminalParams = {
  name?: string;
  command: string;
};

export const sendTextToTerminal = async ({
  name,
  command,
}: SendTextToTerminalParams): Promise<void> => {
  const taskDefinition: vscode.TaskDefinition = {
    type: "shell",
  };

  const task = new vscode.Task(
    taskDefinition,
    vscode.TaskScope.Workspace,
    name ?? "NX Generator",
    "nx-generators",
    new vscode.ShellExecution(command)
  );

  task.presentationOptions = {
    reveal: vscode.TaskRevealKind.Always,
    panel: vscode.TaskPanelKind.Shared,
    focus: true,
  };

  await vscode.tasks.executeTask(task);
};
