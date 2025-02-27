import * as vscode from "vscode";
import {
  componentGeneratorConfig,
  reactLibraryGeneratorConfig,
  runGenerator,
} from "./generators";

export function activate(context: vscode.ExtensionContext) {
  [componentGeneratorConfig, reactLibraryGeneratorConfig].forEach((config) => {
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
