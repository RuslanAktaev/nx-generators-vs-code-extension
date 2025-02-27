import * as vscode from "vscode";

export const isNXProject = async () =>
  !!(await vscode.workspace.findFiles("nx.json"));
