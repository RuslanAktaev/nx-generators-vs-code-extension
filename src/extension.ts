import * as vscode from "vscode";
import { componentGeneratorOptions } from "./generators/component";
import { pickTerminalCommandOptions, sendTextToTerminal } from "./shared/utils";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "ronas-it-nx-generators.generateComponent",
      () => {
        const command = "nx g custom-generator:component";

        pickTerminalCommandOptions({
          title: "Generate component: options",
          placeholder: "Select option",
          executeCommandTitle: `Execute command: ${command}`,
          options: componentGeneratorOptions,
          textInputOptions: {
            prompt: "Generate component",
          },
          onParamsEntered: (paramsString) =>
            sendTextToTerminal({
              name: "Generate component",
              command: `${command} ${paramsString}`,
            }),
        });
      }
    )
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}
