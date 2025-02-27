import * as vscode from "vscode";
import {
  componentGeneratorConfig,
  reactLibraryGeneratorConfig,
  runGenerator,
  expoAppGeneratorConfig,
  nextAppGeneratorConfig,
} from "./generators";
import { isNXProject } from "./shared";

export async function activate(context: vscode.ExtensionContext) {
  vscode.commands.executeCommand(
    "setContext",
    "ronas-it-nx-generators.isNXProject",
    isNXProject()
  );

  [
    expoAppGeneratorConfig,
    nextAppGeneratorConfig,
    componentGeneratorConfig,
    reactLibraryGeneratorConfig,
  ].forEach((config) => {
    context.subscriptions.push(
      vscode.commands.registerCommand(
        `ronas-it-nx-generators.${config.command}`,
        () => runGenerator(config)
      )
    );
  });
}

// This method is called when your extension is deactivated
export function deactivate() {}
